import os, unicodedata, sys

d = r'C:\Users\steev\Downloads\drive-download-20260408T111204Z-3-001\platform\cours_text'

# Get all UE6 files
files = []
for f in os.listdir(d):
    nf = unicodedata.normalize('NFC', f)
    if nf.startswith('UE6'):
        files.append((nf, f))

files.sort()

# Read the one specified by command line arg (course number)
course_num = sys.argv[1] if len(sys.argv) > 1 else '1'

for nf, f in files:
    if f'Cours_{course_num}___' in nf or f'Cours_{course_num}_' in nf:
        fp = os.path.join(d, f)
        with open(fp, encoding='utf-8') as fh:
            lines = fh.readlines()[:2000]
        print(''.join(lines))
        break
