# Hannah Xiao - APM Portfolio Website

A production-ready React portfolio website for Hannah Xiao's application to the Perplexity Associate Product Manager (APM) program. Built with Vite, React, styled-components, and framer-motion.

## 🎯 Overview

This portfolio showcases:
- **3 detailed product case studies** demonstrating product discovery, experimentation, and data-driven decision-making in AI/ML products
- **APM take-home exercise** with a model solution showing product thinking and prioritization
- **Professional resume** with downloadable PDF
- **Responsive design** optimized for desktop, tablet, and mobile
- **Modern animations** using framer-motion for a polished user experience

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add your PDF files:**
   - Place your resume PDF at `public/assets/Hannah_Xiao_Resume.pdf`
   - Place your cover letter PDF at `public/assets/Hannah_Xiao_CL.pdf`
   - See `public/assets/README_ASSETS.md` for more details

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - Navigate to `http://localhost:3000` (or the port shown in your terminal)
   - The site should load with hot module replacement enabled

## 📦 Build for Production

To create a production-ready build:

```bash
npm run build
```

The optimized files will be in the `dist/` folder. To preview the production build locally:

```bash
npm run preview
```

## 🗂️ Project Structure

```
APIM-Portfolio/
├── public/
│   └── assets/
│       ├── Hannah_Xiao_Resume.pdf    (Add your resume here)
│       ├── Hannah_Xiao_CL.pdf        (Add your cover letter here)
│       └── README_ASSETS.md          (Instructions for PDFs)
├── src/
│   ├── components/
│   │   ├── Header.jsx                (Navigation with mobile menu)
│   │   ├── Hero.jsx                  (Hero section with CTA)
│   │   ├── Highlights.jsx            (3 key highlight cards)
│   │   ├── About.jsx                 (About section)
│   │   ├── Projects.jsx              (Projects grid)
│   │   ├── ProjectCard.jsx           (Individual project card)
│   │   ├── Resume.jsx                (Resume section)
│   │   ├── Contact.jsx               (Contact form)
│   │   └── Footer.jsx                (Footer with links)
│   ├── pages/
│   │   ├── Home.jsx                  (Landing page)
│   │   ├── ProjectsPage.jsx          (Projects listing page)
│   │   ├── CaseStudyDetail.jsx       (Individual case study)
│   │   ├── ResumePage.jsx            (Resume page)
│   │   ├── ContactPage.jsx           (Contact page)
│   │   └── APMTakeHome.jsx           (APM take-home exercise)
│   ├── data/
│   │   ├── projects.js               (All project data & case studies)
│   │   └── resumeData.js             (Resume content)
│   ├── styles/
│   │   └── globalStyles.js           (Global styles & theme)
│   ├── App.jsx                       (Main app with routing)
│   └── main.jsx                      (Entry point)
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## ✏️ Customization Guide

### 1. Update Personal Information

**Resume & Contact Info:**
Edit `src/data/resumeData.js`:
```javascript
export const resumeData = {
  personalInfo: {
    name: 'Your Name',
    email: 'your.email@example.com',
    linkedin: 'linkedin.com/in/yourprofile',
    github: 'github.com/yourprofile',
    location: 'Your City, State',
    relocating: 'Willing to relocate to...',
  },
  // Update education, experience, skills, etc.
};
```

**About Section:**
Edit `src/components/About.jsx` to update your personal bio and motivation for Perplexity.

### 2. Customize Projects & Case Studies

Edit `src/data/projects.js`:
```javascript
export const projects = [
  {
    id: 1,
    slug: 'your-project-slug',
    title: 'Your Project Title',
    subtitle: 'Short description',
    role: 'Your role',
    timeline: 'Time period',
    category: 'Category',
    shortDescription: 'Brief overview...',
    problem: 'Problem statement...',
    approach: ['Step 1', 'Step 2', ...],
    tools: ['Tool1', 'Tool2', ...],
    outcomes: ['Outcome 1', 'Outcome 2', ...],
    metrics: {
      primary: 'Primary metric',
      secondary: ['Secondary 1', 'Secondary 2'],
    },
    // Add fullCaseStudy object for detailed case study page
  },
];
```

### 3. Update Theme Colors

Edit `src/styles/globalStyles.js`:
```javascript
export const theme = {
  colors: {
    primary: '#0B1020',      // Deep Navy
    accent: '#6C5CE7',       // Electric Purple
    secondary: '#00BFA6',    // Aqua
    background: '#F7F9FC',   // Neutral background
    text: '#111827',         // Text color
    // Add or modify colors as needed
  },
};
```

### 4. Change Fonts

Update fonts in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourHeadingFont:wght@600;700;800&family=YourBodyFont:wght@400;500;600&display=swap" rel="stylesheet">
```

Then update `src/styles/globalStyles.js`:
```javascript
fonts: {
  heading: "'YourHeadingFont', sans-serif",
  body: "'YourBodyFont', sans-serif",
}
```

### 5. Update Application Links

The Perplexity APM application link appears in multiple places:
- `src/components/Header.jsx` (Apply button)
- `src/components/Contact.jsx` (Apply button)
- `src/components/Footer.jsx` (Quick links)

Current link: `https://boards.greenhouse.io/embed/job_app?token=4786686007&utm_source=jobright`

Replace with your target application URL.

### 6. Add Your PDF Resume & Cover Letter

1. Create or export your resume as a PDF named `Hannah_Xiao_Resume.pdf`
2. Create or export your cover letter as a PDF named `Hannah_Xiao_CL.pdf`
3. Place both files in `public/assets/`

**Alternative:** If you want different filenames, update the links in:
- `src/components/Hero.jsx`
- `src/components/Contact.jsx`
- `src/components/Resume.jsx`
- `src/components/Footer.jsx`

Search for `/assets/Hannah_Xiao_Resume.pdf` and replace with your filename.

## 🎨 Design Principles

This portfolio follows **Gestalt principles** for optimal readability:
- **Proximity:** Related content is grouped together
- **Similarity:** Consistent card styles and patterns
- **Hierarchy:** Clear visual hierarchy with typography and spacing
- **Whitespace:** Generous spacing for comfortable reading

**Typography:**
- Headings: Montserrat (bold, modern)
- Body: Inter (clean, readable)

**Color Palette:**
- Primary: Deep Navy (#0B1020)
- Accent: Electric Purple (#6C5CE7)
- Secondary: Aqua (#00BFA6)
- Background: Neutral (#F7F9FC)

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- **Mobile:** < 480px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

All components adapt gracefully to different screen sizes with mobile-first CSS.

## 🔧 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router Dom** - Client-side routing
- **styled-components** - CSS-in-JS styling
- **framer-motion** - Smooth animations
- **react-icons** - Icon library

## 📊 Key Features

### Navigation
- Fixed header with smooth scrolling
- Mobile-responsive hamburger menu
- Active route highlighting
- Direct "Apply to Perplexity" CTA button

### Home Page
- Eye-catching hero with clear value proposition
- 3 highlight cards (Product Sense, Technical Curiosity, Metrics-Driven)
- About section with relocation note
- Featured projects with metrics
- Resume summary with download link
- Contact form with mailto functionality

### Case Study Pages
- Detailed project narratives
- Structured sections: Problem, Approach, Outcomes, Learnings
- Metric cards highlighting key results
- Code blocks and wireframes where applicable
- Smooth animations on scroll

### APM Take-Home Exercise
- Mock product exercise with complete solution
- Demonstrates hypothesis generation, prioritization, and roadmap planning
- Shows structured thinking and data-driven approach

## 🚢 Deployment

### Deploy to Netlify
1. Push your code to GitHub
2. Connect your repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Deploy to Vercel
1. Push your code to GitHub
2. Import project in Vercel
3. Framework preset: Vite
4. Build command: `npm run build`
5. Output directory: `dist`

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/repository-name/',
     // ... other config
   })
   ```
4. Run: `npm run deploy`

## 🐛 Troubleshooting

### PDFs not downloading
- Ensure PDF files are in `public/assets/` with correct names
- Check browser console for 404 errors
- Verify file paths in components match actual filenames

### Styles not loading
- Clear browser cache
- Check that `GlobalStyles` is imported in `App.jsx`
- Verify Google Fonts are loading in `index.html`

### Routing issues (404 on refresh)
- For production, configure server to redirect all routes to `index.html`
- Netlify: Add `_redirects` file with `/* /index.html 200`
- Vercel: Add `vercel.json` with rewrites config

### Mobile menu not closing
- Check that `useLocation` is imported from `react-router-dom`
- Verify `useEffect` dependency array includes `location`

## 📝 License

This project is open source and available for personal use. Feel free to use it as a template for your own portfolio.

## 🤝 Contributing

This is a personal portfolio project, but if you find bugs or have suggestions, feel free to open an issue!

## 📧 Contact

**Hannah Xiao**
- Email: hannah.xiao@email.com
- LinkedIn: [linkedin.com/in/hannahxiao](https://linkedin.com/in/hannahxiao)
- GitHub: [github.com/hannahxiao](https://github.com/hannahxiao)
- Location: Seattle, WA → San Francisco, CA (willing to relocate)

---

Built with ❤️ for the Perplexity APM Program
