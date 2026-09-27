import os
import subprocess
import sys

# pip install pypdf if not available
try:
    import pypdf
except ImportError:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pypdf"])
    import pypdf

pdf_path = "assets/docs/BREWIARZ.pdf"
out1_path = "assets/docs/BREWIARZ-cz1.pdf"
out2_path = "assets/docs/BREWIARZ-cz2.pdf"

if not os.path.exists(pdf_path):
    print(f"Error: {pdf_path} not found.")
    sys.exit(1)

reader = pypdf.PdfReader(pdf_path)
total_pages = len(reader.pages)
midpoint = total_pages // 2

writer1 = pypdf.PdfWriter()
for i in range(midpoint):
    writer1.add_page(reader.pages[i])

writer2 = pypdf.PdfWriter()
for i in range(midpoint, total_pages):
    writer2.add_page(reader.pages[i])

with open(out1_path, "wb") as f1:
    writer1.write(f1)

with open(out2_path, "wb") as f2:
    writer2.write(f2)

size1 = os.path.getsize(out1_path) / (1024 * 1024)
size2 = os.path.getsize(out2_path) / (1024 * 1024)

print(f"Total pages: {total_pages}")
print(f"Part 1: {len(writer1.pages)} pages, {size1:.2f} MB")
print(f"Part 2: {len(writer2.pages)} pages, {size2:.2f} MB")

os.remove(pdf_path)
print("Original file deleted.")
