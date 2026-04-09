#!/usr/bin/env python3
"""Extract flashcard data from Annales PDFs and revision data from Cours PDFs."""
import fitz
import os
import re
import json
import base64
import sys
import unicodedata

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ANNALES = os.path.join(BASE, "Annales")
COURS = os.path.join(BASE, "Cours")
OUTPUT = os.path.join(BASE, "platform")
IMG_DIR = os.path.join(OUTPUT, "images")
os.makedirs(IMG_DIR, exist_ok=True)

def norm(s):
    """Normalize unicode for comparison."""
    return unicodedata.normalize("NFC", s)

def clean_text(t):
    """Clean text for display."""
    t = t.strip()
    t = re.sub(r'\n{3,}', '\n\n', t)
    return t

def slug(s):
    """Create a safe filename slug."""
    s = unicodedata.normalize("NFKD", s)
    s = re.sub(r'[^\w\s-]', '', s)
    s = re.sub(r'[\s]+', '_', s).strip('_')
    return s[:60]

def extract_images_from_pdf(pdf_path, prefix):
    """Extract all images from a PDF, save to IMG_DIR, return list of {page, filename, w, h}."""
    doc = fitz.open(pdf_path)
    images = []
    for page_num in range(doc.page_count):
        page = doc[page_num]
        for img_idx, img_info in enumerate(page.get_images(full=True)):
            xref = img_info[0]
            try:
                img_data = doc.extract_image(xref)
                if img_data and len(img_data["image"]) > 500:  # Skip tiny images
                    ext = img_data.get("ext", "png")
                    filename = f"{prefix}_p{page_num+1}_i{img_idx+1}.{ext}"
                    filepath = os.path.join(IMG_DIR, filename)
                    with open(filepath, "wb") as f:
                        f.write(img_data["image"])
                    images.append({
                        "page": page_num + 1,
                        "filename": filename,
                        "w": img_data.get("width", 0),
                        "h": img_data.get("height", 0)
                    })
            except Exception:
                pass
    doc.close()
    return images

def render_page_as_image(pdf_path, page_num, prefix):
    """Render a PDF page as an image for cases where we need the visual."""
    doc = fitz.open(pdf_path)
    page = doc[page_num]
    mat = fitz.Matrix(2, 2)  # 2x zoom for better quality
    pix = page.get_pixmap(matrix=mat)
    filename = f"{prefix}_page{page_num+1}.png"
    filepath = os.path.join(IMG_DIR, filename)
    pix.save(filepath)
    doc.close()
    return filename

def get_full_text(pdf_path):
    """Get full text from a PDF."""
    doc = fitz.open(pdf_path)
    text = ""
    for page in doc:
        text += page.get_text() + "\n"
    doc.close()
    return text

def get_page_texts(pdf_path):
    """Get text per page from a PDF."""
    doc = fitz.open(pdf_path)
    pages = []
    for page in doc:
        pages.append(page.get_text())
    doc.close()
    return pages

def find_pdfs(directory):
    """Find all PDFs in a directory tree."""
    pdfs = []
    for root, dirs, files in os.walk(directory):
        for f in files:
            if f.lower().endswith('.pdf'):
                pdfs.append(os.path.join(root, f))
    return pdfs

def classify_pdf(filename):
    """Classify a PDF as correction, subject, or combined."""
    fn = filename.lower()
    if any(w in fn for w in ['correction', 'corrig', '.correction.']):
        return 'correction'
    elif any(w in fn for w in ['sujet', 'annale', 'epreuve', 'acc ']):
        return 'subject'
    else:
        return 'unknown'

def parse_questions_from_text(text, images=None):
    """Parse QCM questions from correction text.
    Returns list of {num, question, propositions:[{letter,text}], answers:str, explanations:[{letter,correct,text}], image_refs:[]}
    """
    questions = []

    # Normalize text
    text = text.replace('\r\n', '\n').replace('\r', '\n')
    # Fix common OCR issues
    text = text.replace('\u200b', '')  # zero-width space

    # Split into question blocks
    # Pattern matches: "Question N:", "QCM N:", "QUESTION N:", "Q N :", etc.
    pattern = r'(?:Question|QCM|QUESTION)\s*(\d+)\s*[\*]*\s*[:\.\s]?\s*(?:\(Type:\s*QR[MU]\))?\s*'

    # Find all question starts
    matches = list(re.finditer(pattern, text, re.IGNORECASE))

    if not matches:
        return questions

    for idx, match in enumerate(matches):
        q_num = match.group(1)
        start = match.end()
        end = matches[idx + 1].start() if idx + 1 < len(matches) else len(text)
        block = text[start:end].strip()

        if len(block) < 20:
            continue

        q = parse_single_question(q_num, block, images)
        if q:
            questions.append(q)

    return questions

def parse_single_question(q_num, block, images=None):
    """Parse a single question block into structured data.
    Handles multiple formats:
    1. Separate: question+props then answer+explanations
    2. Inline: props with Valide/Faux markers, maybe with Correction: section
    3. Radio: ◎/◉ markers
    """
    # Checkbox/radio chars to strip
    MARKERS = '☐☑◎◉'

    # Step 1: Find the question text (before first proposition)
    # Propositions start with optional markers + A-E + . or )
    first_prop = re.search(
        r'(?:^|\n)\s*[' + MARKERS + r']?\s*(?:Faux\s+|Valide\s+)?[A-Ea-e][\.\)]\s+',
        block
    )
    if not first_prop:
        return None

    question_text = block[:first_prop.start()].strip()
    rest = block[first_prop.start():]

    # Step 2: Check if there's a Correction:/Réponse: section
    corr_match = re.search(r'\n\s*(?:Correction|R[eé]ponse\s*[s]?)\s*[:=]\s*', rest, re.IGNORECASE)

    # Step 3: Detect format - does the first prop have Valide/Faux inline?
    has_inline_markers = bool(re.search(
        r'[' + MARKERS + r']\s*(?:Faux|Valide)\s+[A-E][\.\)]',
        rest, re.IGNORECASE
    ))

    # Step 4: Extract all proposition lines with their markers
    # Universal pattern: optional marker, optional Faux/Valide, letter, text
    prop_pattern = (
        r'[' + MARKERS + r']?\s*'
        r'(?:(Faux|Valide)\s+)?'
        r'([A-Ea-e])[\.\)]\s*'
        r'(.*?)(?=\n\s*[' + MARKERS + r']?\s*(?:Faux\s+|Valide\s+)?[A-Ea-e][\.\)]'
        r'|\n\s*(?:Correction|R[eé]ponse)\s*[:\s=]|\n\s*→|\Z)'
    )

    propositions = []
    answers_from_inline = []
    explanations_inline = []

    for pm in re.finditer(prop_pattern, rest, re.DOTALL | re.IGNORECASE):
        marker = pm.group(1)  # Faux/Valide or None
        letter = pm.group(2).upper()
        text = pm.group(3).strip()

        # Check for explanation arrow after prop
        expl_text = ""
        # Look for → explanation in the text itself
        arrow_match = re.search(r'→\s*(.*)', text, re.DOTALL)
        if arrow_match:
            expl_text = arrow_match.group(1).strip()
            text = text[:arrow_match.start()].strip()

        # Clean proposition text - remove ALL answer hints
        clean = text
        clean = re.sub(r'\(neutralis[eé]e?\)', '', clean)
        clean = re.sub(r'^\s*(?:Faux|Valide)\s+', '', clean, flags=re.IGNORECASE)
        # Remove trailing VRAI/FAUX markers (but not words containing them like "vraisemblablement")
        clean = re.sub(r'\s+(?:VRAI|FAUX|VRAi)\s*$', '', clean, flags=re.IGNORECASE)
        # Remove answer letters in parens like "(E.)" or answer refs
        clean = re.sub(r'\s*\([A-E]\.\)\s*$', '', clean)
        # Remove inline correction markers
        clean = re.sub(r'\s*(?:→|==>)\s+.*$', '', clean)
        # Remove leading "X.FAUX," or "X.VRAI," patterns (leaked corrections)
        clean = re.sub(r'^[A-E]\.(?:FAUX|VRAI)[,:\s]+', '', clean, flags=re.IGNORECASE)
        # Remove ◎/◉ markers and Faux/Valide at start
        clean = re.sub(r'^[◎◉☐☑]\s*(?:Faux|Valide)\s+[A-E][\.\)]\s*', '', clean, flags=re.IGNORECASE)
        # Remove trailing "Réponse(s): XY" answer leaks
        clean = re.sub(r'\s*R[eé]ponse\s*[s]?\s*[:=]\s*[A-E]+\s*$', '', clean, flags=re.IGNORECASE)
        # Remove trailing answer letter groups like "Correction: ABDE"
        clean = re.sub(r'\s*Correction\s*[:=]\s*[A-E]+\s*$', '', clean, flags=re.IGNORECASE)
        clean = clean.strip()

        if not clean or len(clean) < 2:
            continue

        # Skip if this looks like a correction line (VRAI/FAUX at start)
        if re.match(r'^(VRAI|VRAi|FAUX)\b', clean, re.IGNORECASE):
            # This is actually a correction, not a proposition
            is_correct = clean[:4].upper() in ('VRAI', 'VRAI')
            expl = re.sub(r'^(VRAI|VRAi|FAUX)[,:\s]*', '', clean, flags=re.IGNORECASE).strip()
            explanations_inline.append({
                "letter": letter,
                "correct": is_correct,
                "text": expl
            })
            if is_correct:
                answers_from_inline.append(letter)
            continue

        # Only keep first occurrence of each letter
        if any(p["letter"] == letter for p in propositions):
            continue

        propositions.append({"letter": letter, "text": clean})

        if marker:
            is_correct = marker.upper() == 'VALIDE'
            answers_from_inline.append(letter if is_correct else None)
            explanations_inline.append({
                "letter": letter,
                "correct": is_correct,
                "text": expl_text
            })

    if len(propositions) < 2:
        return None

    # Step 5: Parse the Correction: section if it exists
    answer_letters = ""
    explanations = []

    if corr_match:
        corr_text = rest[corr_match.end():]

        # Try to get answer from Réponse: line
        m = re.search(r'R[eé]ponse\s*[s]?\s*[:=]\s*([A-E]+)', rest, re.IGNORECASE)
        if m:
            answer_letters = m.group(1).upper()

        # Parse line-by-line for A.VRAI/FAUX patterns
        corr_lines = corr_text.split('\n')
        current_letter = None
        current_correct = None
        current_text = []

        for line in corr_lines:
            line_s = line.strip()
            if not line_s:
                if current_letter and current_text:
                    explanations.append({
                        "letter": current_letter,
                        "correct": current_correct,
                        "text": ' '.join(current_text).strip()
                    })
                    current_letter = None
                    current_text = []
                continue

            # Match "A.VRAI..." or "A. FAUX..." or "A)VRAI..."
            m = re.match(r'([A-E])[\.\)]\s*[\u200b\u200c]*(VRAI|VRAi|FAUX)[,:\.\s\u200b]*(.*)', line_s, re.IGNORECASE)
            if m:
                # Save previous
                if current_letter:
                    explanations.append({
                        "letter": current_letter,
                        "correct": current_correct,
                        "text": ' '.join(current_text).strip()
                    })
                current_letter = m.group(1).upper()
                current_correct = m.group(2).upper() in ('VRAI',)
                txt = re.sub(r'^[\u200b\u200c\s,]+', '', m.group(3).strip())
                current_text = [txt] if txt else []
            elif current_letter:
                # Continuation of explanation
                current_text.append(line_s)

        # Save last
        if current_letter:
            explanations.append({
                "letter": current_letter,
                "correct": current_correct,
                "text": ' '.join(current_text).strip()
            })

    # Step 6: If no Correction section, use inline markers
    if not explanations and explanations_inline:
        explanations = explanations_inline

    # Step 7: Determine correct answers
    if not answer_letters:
        if explanations:
            answer_letters = ''.join(sorted(e["letter"] for e in explanations if e["correct"]))
        elif answers_from_inline:
            answer_letters = ''.join(sorted(a for a in answers_from_inline if a))

    # Also try explicit Réponse: line in full block
    if not answer_letters:
        m = re.search(r'R[eé]ponse\s*[s]?\s*[:=]\s*([A-E]+)', block, re.IGNORECASE)
        if m:
            answer_letters = m.group(1).upper()

    # Step 8: If we still have no separate explanations, try back_text patterns
    if not explanations:
        # Try Faux/Valide X. pattern
        for em in re.finditer(
            r'(?:Faux|Valide)\s+([A-E])[\.\)]\s*(.*?)(?=\n\s*(?:Faux|Valide)\s+[A-E][\.\)]|\Z)',
            block, re.DOTALL | re.IGNORECASE
        ):
            letter = em.group(1).upper()
            is_valide = block[em.start():em.start()+6].strip().lower().startswith('valide')
            expl = em.group(2).strip()
            explanations.append({
                "letter": letter,
                "correct": is_valide,
                "text": expl
            })

    # Step 9: Build raw_back for display if no structured explanations
    raw_back = ""
    if not explanations and corr_match:
        raw_back = clean_text(rest[corr_match.start():])

    # Clean question text
    question_text = re.sub(r'^[\s\n]*', '', question_text)
    question_text = re.sub(r'Veuillez choisir.*$', '', question_text, flags=re.MULTILINE)
    question_text = re.sub(r'\s*Date de cr.*$', '', question_text, flags=re.MULTILINE)
    question_text = re.sub(r'\s*Page:.*$', '', question_text, flags=re.MULTILINE)
    question_text = re.sub(r'\s*R[eé]f[eé]rence:.*$', '', question_text, flags=re.MULTILINE)
    question_text = re.sub(r'\s*Version:.*$', '', question_text, flags=re.MULTILINE)
    question_text = question_text.strip()

    # Check for image references in question
    has_image_ref = bool(re.search(
        r'(?:sch[eé]ma|photographie|coupe|image|tableau|figure|ci-dessous|ci-dessus|suivant)',
        question_text, re.IGNORECASE
    ))

    if not question_text:
        return None

    return {
        "num": q_num,
        "question": question_text,
        "propositions": propositions,
        "answers": answer_letters.upper(),
        "explanations": explanations,
        "has_image_ref": has_image_ref,
        "raw_back": raw_back
    }


def process_annales():
    """Process all Annales PDFs and return structured flashcard data."""

    all_data = {}  # {ue: {course: {name, questions:[]}}}

    for ue_name in sorted(os.listdir(ANNALES)):
        ue_path = os.path.join(ANNALES, ue_name)
        if not os.path.isdir(ue_path):
            continue

        ue_key = ue_name  # e.g., "UE5", "UE6"
        all_data[ue_key] = {}

        # Process each course/topic directory
        for item in sorted(os.listdir(ue_path)):
            item_path = os.path.join(ue_path, item)

            if os.path.isdir(item_path):
                course_name = item
                course_slug = slug(f"{ue_key}_{course_name}")

                # Find all PDFs in this directory (including subdirs)
                pdfs_in_dir = find_pdfs(item_path)

                if not pdfs_in_dir:
                    continue

                # Classify PDFs
                corrections = []
                subjects = []
                for p in pdfs_in_dir:
                    fn = os.path.basename(p)
                    cls = classify_pdf(fn)
                    if cls == 'correction':
                        corrections.append(p)
                    else:
                        subjects.append(p)

                # If no corrections found, check if any file has answers
                if not corrections:
                    for p in subjects[:]:
                        text = get_full_text(p)
                        if re.search(r'(?:VRAI|FAUX|Valide|Réponse\s*:)', text, re.IGNORECASE):
                            corrections.append(p)

                all_questions = []
                seen_nums = set()

                # Process correction files first
                for corr_path in corrections:
                    fn = os.path.basename(corr_path)
                    text = get_full_text(corr_path)

                    # Extract images
                    img_prefix = course_slug
                    images = extract_images_from_pdf(corr_path, img_prefix)

                    # Parse questions
                    questions = parse_questions_from_text(text, images)

                    for q in questions:
                        # Deduplicate by question number + first 50 chars
                        q_key = f"{q['num']}_{q['question'][:50]}"
                        # Prefer version with answers
                        existing_idx = None
                        for ei, eq in enumerate(all_questions):
                            eq_key = f"{eq['num']}_{eq['question'][:50]}"
                            if eq_key == q_key:
                                existing_idx = ei
                                break

                        if existing_idx is not None:
                            if q["answers"] and not all_questions[existing_idx]["answers"]:
                                q["id"] = all_questions[existing_idx]["id"]
                                all_questions[existing_idx] = q
                        elif q_key not in seen_nums:
                            seen_nums.add(q_key)
                            q["id"] = f"{course_slug}_q{q['num']}_{len(all_questions)}"
                            all_questions.append(q)

                # Associate images only with questions that reference them
                # and only 1 image per question (closest match)
                if images and all_questions:
                    img_idx = 0
                    for q in all_questions:
                        if q.get("has_image_ref") and img_idx < len(images):
                            q["images"] = [images[img_idx]["filename"]]
                            img_idx += 1
                        else:
                            q["images"] = []

                # If we have subjects but no correction-parsed questions,
                # try to get questions from subjects (for those without corrections)
                if not all_questions and subjects:
                    for subj_path in subjects:
                        text = get_full_text(subj_path)
                        questions = parse_questions_from_text(text)
                        for q in questions:
                            if q["answers"]:  # Only include if we have answers
                                q["id"] = f"{course_slug}_q{q['num']}_{len(all_questions)}"
                                all_questions.append(q)

                if all_questions:
                    # For directories with subdirs (like physio), use parent name
                    # but include sub-topic info
                    if course_name in all_data[ue_key]:
                        all_data[ue_key][course_name]["questions"].extend(all_questions)
                    else:
                        all_data[ue_key][course_name] = {
                            "name": course_name,
                            "questions": all_questions
                        }

                    print(f"  {ue_key}/{course_name}: {len(all_questions)} questions")
                else:
                    print(f"  {ue_key}/{course_name}: 0 questions (skipped)")

    return all_data


def process_cours():
    """Process all Cours PDFs and return structured revision data."""

    all_data = {}  # {ue: {course_name: {name, content_html}}}

    for ue_name in sorted(os.listdir(COURS)):
        ue_path = os.path.join(COURS, ue_name)
        if not os.path.isdir(ue_path):
            continue

        ue_key = ue_name
        all_data[ue_key] = {}

        # Process each subject directory
        for subj_name in sorted(os.listdir(ue_path)):
            subj_path = os.path.join(ue_path, subj_name)
            if not os.path.isdir(subj_path):
                continue

            # Process each course directory
            courses_in_subj = []
            for course_dir in sorted(os.listdir(subj_path)):
                course_path = os.path.join(subj_path, course_dir)
                if os.path.isdir(course_path):
                    # Find PDFs in course directory
                    pdfs = [os.path.join(course_path, f) for f in os.listdir(course_path) if f.lower().endswith('.pdf')]
                    if pdfs:
                        courses_in_subj.append({
                            "dir_name": course_dir,
                            "pdfs": pdfs
                        })

            if not courses_in_subj:
                continue

            # Check if courses should be merged (multi-part courses)
            # Pattern: "Cours N _ Name" - group by similar names
            course_groups = {}
            for c in courses_in_subj:
                # Extract course name from dir name
                name_match = re.match(r'Cours\s*\d+\s*[_:]\s*(.*)', c["dir_name"])
                if name_match:
                    display_name = name_match.group(1).strip()
                else:
                    display_name = c["dir_name"]

                # Use the subject name as the group key for this subject's courses
                group_key = subj_name
                if group_key not in course_groups:
                    course_groups[group_key] = {
                        "display_name": subj_name,
                        "courses": []
                    }
                course_groups[group_key]["courses"].append({
                    "name": display_name,
                    "dir_name": c["dir_name"],
                    "pdfs": c["pdfs"]
                })

            # Process each course group
            for group_key, group in course_groups.items():
                all_text_parts = []
                all_images = []

                for course in group["courses"]:
                    for pdf_path in course["pdfs"]:
                        text = get_full_text(pdf_path)
                        prefix = slug(f"cours_{ue_key}_{course['name']}")
                        imgs = extract_images_from_pdf(pdf_path, prefix)

                        all_text_parts.append({
                            "course_name": course["name"],
                            "dir_name": course["dir_name"],
                            "text": text,
                            "images": imgs
                        })

                # Create revision content
                content_parts = []
                for part in all_text_parts:
                    course_title = part["dir_name"]
                    text = part["text"]

                    # Clean and format text
                    text = clean_text(text)

                    # Convert to HTML-like structure
                    lines = text.split('\n')
                    formatted_lines = []
                    for line in lines:
                        line = line.strip()
                        if not line:
                            continue
                        # Skip common header/footer noise
                        if any(skip in line.lower() for skip in ['page ', 'diapo', '©', 'tous droits']):
                            continue
                        formatted_lines.append(line)

                    if formatted_lines:
                        content_parts.append({
                            "title": course_title,
                            "lines": formatted_lines,
                            "images": [img["filename"] for img in part["images"]]
                        })

                if content_parts:
                    course_key = group["display_name"]
                    all_data[ue_key][course_key] = {
                        "name": group["display_name"],
                        "parts": content_parts
                    }
                    total_lines = sum(len(p["lines"]) for p in content_parts)
                    print(f"  {ue_key}/{course_key}: {len(content_parts)} parts, {total_lines} lines")

    return all_data


def main():
    print("=" * 60)
    print("PROCESSING ANNALES (Flashcards)")
    print("=" * 60)
    annales_data = process_annales()

    total_q = sum(
        len(course["questions"])
        for ue in annales_data.values()
        for course in ue.values()
    )
    print(f"\nTotal questions extracted: {total_q}")

    print("\n" + "=" * 60)
    print("PROCESSING COURS (Fiches de révision)")
    print("=" * 60)
    cours_data = process_cours()

    # Save as JSON
    output_data = {
        "annales": {},
        "cours": {}
    }

    # Convert annales data (remove non-serializable parts)
    for ue_key, courses in annales_data.items():
        output_data["annales"][ue_key] = {}
        for course_name, course_data in courses.items():
            output_data["annales"][ue_key][course_name] = {
                "name": course_data["name"],
                "questions": []
            }
            for q in course_data["questions"]:
                q_clean = {
                    "id": q["id"],
                    "num": q["num"],
                    "question": q["question"],
                    "propositions": q["propositions"],
                    "answers": q["answers"],
                    "explanations": q["explanations"],
                    "images": q.get("images", []),
                    "raw_back": q.get("raw_back", "")
                }
                output_data["annales"][ue_key][course_name]["questions"].append(q_clean)

    # Convert cours data
    for ue_key, subjects in cours_data.items():
        output_data["cours"][ue_key] = {}
        for subj_name, subj_data in subjects.items():
            output_data["cours"][ue_key][subj_name] = {
                "name": subj_data["name"],
                "parts": subj_data["parts"]
            }

    # Write JSON
    json_path = os.path.join(OUTPUT, "data.json")
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(output_data, f, ensure_ascii=False, indent=2)

    # Also write as JS module for the web app
    js_path = os.path.join(OUTPUT, "data.js")
    with open(js_path, "w", encoding="utf-8") as f:
        f.write("// Auto-generated flashcard and revision data\n")
        f.write("const APP_DATA = ")
        json.dump(output_data, f, ensure_ascii=False, indent=2)
        f.write(";\n")

    print(f"\nData saved to {json_path}")
    print(f"JS data saved to {js_path}")
    print(f"Images saved to {IMG_DIR}")
    print(f"Total images: {len(os.listdir(IMG_DIR))}")

if __name__ == "__main__":
    main()
