import pdfplumber

with pdfplumber.open(r'g:\PORTFOLIO\RachelNababan_CV.pdf') as pdf:
    text = ''
    for page in pdf.pages:
        text += page.extract_text() + '\n\n'
    print(text)
