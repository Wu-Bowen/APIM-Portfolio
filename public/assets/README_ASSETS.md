# Assets Folder

This folder should contain the following PDF files for the portfolio website:

## Required Files

1. **Hannah_Xiao_Resume.pdf**
   - Your resume in PDF format
   - This file is linked throughout the site (Download Resume buttons, footer, etc.)

2. **Hannah_Xiao_CL.pdf**
   - Your cover letter in PDF format
   - This file is linked in the footer

## How to Add Your PDFs

Simply place your PDF files in this directory with the exact file names above.

If you want to use different file names, update the links in:
- `src/components/Hero.jsx` (line with `/assets/Hannah_Xiao_Resume.pdf`)
- `src/components/Contact.jsx` (download buttons)
- `src/components/Footer.jsx` (Quick Links section)

## Placeholder PDFs

If you don't have PDFs ready yet, you can create placeholder files or the links will simply prompt a download that won't work until the files are added.

For testing, you can create simple text files and rename them to .pdf, though they won't open properly until replaced with actual PDF files.
