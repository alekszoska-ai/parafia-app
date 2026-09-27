import os
import pypdf

pdf_path = "assets/docs/BREWIARZ.pdf"
out1_path = "assets/docs/BREWIARZ-cz1.pdf"
out2_path = "assets/docs/BREWIARZ-cz2.pdf"
out3_path = "assets/docs/BREWIARZ-cz3.pdf"

reader = pypdf.PdfReader(pdf_path)
total_pages = len(reader.pages)

w1, w2, w3 = pypdf.PdfWriter(), pypdf.PdfWriter(), pypdf.PdfWriter()

for i in range(0, 606):
    w1.add_page(reader.pages[i])

for i in range(606, 1212):
    w2.add_page(reader.pages[i])

for i in range(1212, total_pages):
    w3.add_page(reader.pages[i])

with open(out1_path, "wb") as f1: w1.write(f1)
with open(out2_path, "wb") as f2: w2.write(f2)
with open(out3_path, "wb") as f3: w3.write(f3)

os.remove(pdf_path)

for path, w in [(out1_path, w1), (out2_path, w2), (out3_path, w3)]:
    size_mb = os.path.getsize(path) / (1024 * 1024)
    print(f"{path}: {len(w.pages)} pages, {size_mb:.2f} MB")
