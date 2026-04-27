# Tanay Grover — Portfolio (Redesigned)

Modern React + Vite + TailwindCSS portfolio.

## Setup

```powershell
cd portfolio
npm install
npm run dev
```

Runs at http://localhost:5173

## Assets

Place your photos in the `public/assets/` folder:
- `public/assets/hero-photo.jpg` — hero section photo
- `public/assets/IMG_1111.jpeg` — about section photo

## Stack

- React 18 (functional components + hooks)
- Vite 5
- TailwindCSS 3 (dark-first, custom design tokens)
- Syne + DM Sans + JetBrains Mono fonts (Google Fonts)
- IntersectionObserver for scroll-reveal animations (no heavy libs)

## Structure

```
src/
  components/
    Navbar.jsx
    Hero.jsx
    Experience.jsx
    Projects.jsx
    Publications.jsx
    Skills.jsx
    About.jsx
    Footer.jsx
  hooks/
    useScrollReveal.js
  data.js          # all content — edit here
  App.jsx
  main.jsx
  index.css
```

## Customization

All portfolio content lives in `src/data.js`. Edit that file to update experience, projects, publications, and skills without touching component code.
