"""Add 2024-2025 exam PDFs to the annales data."""
import fitz
import os
import json
import re

def parse_exam_pdf(filepath):
    """Parse an exam PDF with inline Valide/Faux markers."""
    doc = fitz.open(filepath)
    full_text = ""
    images_by_page = {}
    img_dir = r"C:\Users\steev\Downloads\drive-download-20260408T111204Z-3-001\platform\images"
    basename = os.path.basename(filepath).replace(" ", "_").replace(",", "")[:40]

    for i in range(doc.page_count):
        page = doc[i]
        full_text += page.get_text() + "\n"
        for idx, img_info in enumerate(page.get_images(full=True)):
            xref = img_info[0]
            try:
                img_data = doc.extract_image(xref)
                if img_data and len(img_data["image"]) > 500:
                    ext = img_data.get("ext", "png")
                    fname = f"{basename}_p{i+1}_i{idx+1}.{ext}"
                    with open(os.path.join(img_dir, fname), "wb") as ff:
                        ff.write(img_data["image"])
                    if i not in images_by_page:
                        images_by_page[i] = []
                    images_by_page[i].append(fname)
            except Exception:
                pass
    doc.close()

    MARKERS = "\u2610\u2611\u25CE\u25C9"  # ☐☑◎◉
    pattern = r"Question\s*(\d+)\s*:\s*\(Type:\s*QR[MU]\)\s*[\d\./]*"
    matches = list(re.finditer(pattern, full_text, re.IGNORECASE))

    questions = []
    all_img_list = []
    for pg in sorted(images_by_page.keys()):
        all_img_list.extend(images_by_page[pg])
    img_assign_idx = 0

    for idx, match in enumerate(matches):
        q_num = match.group(1)
        start = match.end()
        end = matches[idx + 1].start() if idx + 1 < len(matches) else len(full_text)
        block = full_text[start:end].strip()

        # Remove metadata
        for pat in [
            r"R.f.rence:.*$", r"Date de cr.*$", r"Version:.*$",
            r"Page:.*$", r"\d{4}-\d{2}-\d{2}.*$",
            r"^Sarah AHDDAK.*$", r"^Epreuve:.*$", r"^Element.*$",
        ]:
            block = re.sub(pat, "", block, flags=re.MULTILINE)
        block = block.strip()

        # Find first proposition marker
        first_prop = re.search(
            r"[" + MARKERS + r"]\s*\n?\s*(?:Faux|Valide)\s+[A-L][\.\)]",
            block
        )
        if not first_prop:
            continue

        question_text = block[:first_prop.start()].strip()
        rest = block[first_prop.start():]

        # Parse propositions
        prop_pattern = (
            r"[" + MARKERS + r"]\s*\n?\s*(Faux|Valide)\s+([A-L])[\.\)]\s*"
            r"(.*?)(?=[" + MARKERS + r"]\s*\n?\s*(?:Faux|Valide)\s+[A-L][\.\)]|\Z)"
        )

        propositions = []
        answers = []
        explanations = []
        seen = set()

        for pm in re.finditer(prop_pattern, rest, re.DOTALL):
            marker = pm.group(1).upper()
            letter = pm.group(2).upper()
            text = pm.group(3).strip()

            if letter in seen:
                continue
            seen.add(letter)

            lines = text.split("\n")
            prop_text = lines[0].strip()
            expl_text = " ".join(l.strip() for l in lines[1:] if l.strip()).strip()

            if not prop_text:
                continue

            is_correct = marker == "VALIDE"
            propositions.append({"letter": letter, "text": prop_text})
            if is_correct:
                answers.append(letter)
            explanations.append({
                "letter": letter,
                "correct": is_correct,
                "text": expl_text,
            })

        if len(propositions) < 2:
            continue

        has_image = bool(
            re.search(r"(?:sch.ma|photo|coupe|image|figure)", question_text, re.IGNORECASE)
        )
        img_list = []
        if has_image and img_assign_idx < len(all_img_list):
            img_list = [all_img_list[img_assign_idx]]
            img_assign_idx += 1

        questions.append({
            "num": q_num,
            "question": question_text,
            "propositions": propositions,
            "answers": "".join(sorted(answers)),
            "explanations": explanations,
            "images": img_list,
            "raw_back": "",
        })

    return questions


def main():
    dl = r"C:\Users\steev\Downloads"
    ue5_path = ue6_path = None
    for f in os.listdir(dl):
        if f.startswith("DFG2-UE5") and f.endswith(".pdf"):
            ue5_path = os.path.join(dl, f)
        elif f.startswith("DFG2-UE6") and f.endswith(".pdf"):
            ue6_path = os.path.join(dl, f)

    print("Processing UE5 exam 2024-2025...")
    ue5_qs = parse_exam_pdf(ue5_path)
    print(f"  Extracted: {len(ue5_qs)} questions")

    print("Processing UE6 exam 2024-2025...")
    ue6_qs = parse_exam_pdf(ue6_path)
    print(f"  Extracted: {len(ue6_qs)} questions")

    # Load existing data
    data_path = r"C:\Users\steev\Downloads\drive-download-20260408T111204Z-3-001\platform\data.json"
    with open(data_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    # Add UE5
    if "Sujet" not in data["annales"]["UE5"]:
        data["annales"]["UE5"]["Sujet"] = {"name": "Sujets d'examen", "questions": []}
    existing = len(data["annales"]["UE5"]["Sujet"]["questions"])
    for i, q in enumerate(ue5_qs):
        q["id"] = f"UE5_exam2025_q{q['num']}_{existing + i}"
        data["annales"]["UE5"]["Sujet"]["questions"].append(q)
    data["annales"]["UE5"]["Sujet"]["name"] = "Sujets d'examen"
    print(f"  UE5 Sujets: {existing} -> {len(data['annales']['UE5']['Sujet']['questions'])}")

    # Add UE6
    if "Sujet" not in data["annales"]["UE6"]:
        data["annales"]["UE6"]["Sujet"] = {"name": "Sujets d'examen", "questions": []}
    existing = len(data["annales"]["UE6"]["Sujet"]["questions"])
    for i, q in enumerate(ue6_qs):
        q["id"] = f"UE6_exam2025_q{q['num']}_{existing + i}"
        data["annales"]["UE6"]["Sujet"]["questions"].append(q)
    data["annales"]["UE6"]["Sujet"]["name"] = "Sujets d'examen"
    print(f"  UE6 Sujets: {existing} -> {len(data['annales']['UE6']['Sujet']['questions'])}")

    # Save
    with open(data_path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    js_path = r"C:\Users\steev\Downloads\drive-download-20260408T111204Z-3-001\platform\data.js"
    with open(js_path, "w", encoding="utf-8") as f:
        f.write("const APP_DATA = ")
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write(";\n")

    # Summary
    total = sum(
        len(c["questions"])
        for ue in data["annales"].values()
        for c in ue.values()
    )
    print(f"\nTotal questions in app: {total}")

    # Samples
    print("\n=== UE5 2024-2025 samples ===")
    for q in ue5_qs[:3]:
        print(f"  Q{q['num']}: {q['question'][:60]}... | Ans: {q['answers']}")
    print(f"\n=== UE6 2024-2025 samples ===")
    for q in ue6_qs[:3]:
        print(f"  Q{q['num']}: {q['question'][:60]}... | Ans: {q['answers']}")


if __name__ == "__main__":
    main()
