# Resume Configuration & Setup Guide

This portfolio website is configured to serve your resume as a real PDF file from the `/public` static folder.

## 1. Resume File Location

Place your official resume PDF directly at:

```text
public/resume.pdf
```

The file name must match exactly: `resume.pdf` (lowercase).

A valid developer resume PDF has already been generated and placed at `public/resume.pdf` featuring your profile, B.Tech CSE (AI/ML) degree from Marwadi University, projects, and contact info. When you are ready to update it with your own personally exported PDF, simply overwrite `public/resume.pdf`.

---

## 2. Centralized Configuration

All resume download and view links are centralized in:

```typescript
// /src/config/siteConfig.ts
export const siteConfig = {
  resumeUrl: '/resume.pdf',
  resumeDownloadFilename: 'Rithesh-Kumar-Nyamathabad-Resume.pdf',
};
```

---

## 3. How the Actions Work

* **Download Resume**:
  Uses standard HTML5 anchor:
  `<a href="/resume.pdf" download="Rithesh-Kumar-Nyamathabad-Resume.pdf">`
  This triggers a direct file download in Chrome, Safari, Edge, Firefox, and mobile browsers.

* **View Resume**:
  Uses standard target anchor:
  `<a href="/resume.pdf" target="_blank" rel="noopener noreferrer">`
  This opens the PDF in a new browser tab using the browser's built-in PDF viewer.

* **Interactive CV Modal**:
  Opens the rich in-app developer CV modal with interactive proficiencies and print formatting.

---

## 4. Vercel & Production Deployment

When built (`npm run build`), Vite automatically places `public/resume.pdf` into `dist/resume.pdf`.

On Vercel:
* `https://YOUR-DOMAIN.com/resume.pdf` serves the PDF directly with `Content-Type: application/pdf`.
* `vercel.json` ensures `/resume.pdf` is never intercepted by client-side SPA rewrites.
