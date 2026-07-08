<div id="top"></div>

<div align="center" style="width:100%;">
  <img src="./src/Assets/pre.svg" width="28%" alt="Project Logo" />

  <h1>
    <a href="https://tarekchaalan.com/" style="color: white;">PORTFOLIO</a>
  </h1>
  <em>Showcasing my work with a fast, multilingual React + Vite site.</em><br>

  <!-- REPO BADGES -->
  <img src="https://img.shields.io/github/license/tarekchaalan/Portfolio?style=flat&color=111111" alt="license">
  <img src="https://img.shields.io/github/last-commit/tarekchaalan/Portfolio?style=flat&color=111111" alt="last-commit">
  <img src="https://img.shields.io/github/languages/top/tarekchaalan/Portfolio?style=flat&color=111111" alt="top-language">
  <img src="https://img.shields.io/github/languages/count/tarekchaalan/Portfolio?style=flat&color=111111" alt="language-count">

  <!-- TECH BADGES -->
  <br/>
  <img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=000" alt="React">
  <img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=Vite&logoColor=fff" alt="Vite">
  <img src="https://img.shields.io/badge/i18next-26A69A.svg?style=flat&logo=i18next&logoColor=fff" alt="i18next">
  <img src="https://img.shields.io/badge/React%20Bootstrap-7952B3.svg?style=flat&logo=Bootstrap&logoColor=fff" alt="React Bootstrap">
  <img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=fff" alt="ESLint">
  <img src="https://img.shields.io/badge/Vitest-6E9F18.svg?style=flat&logo=Vitest&logoColor=fff" alt="Vitest">
</div>

---

## Table of Contents
<details>
<summary>Expand</summary>

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Quick Start](#quick-start)
  - [Scripts](#scripts)
- [Configuration](#configuration)
  - [Localization (i18n)](#localization-i18n)
  - [Theme](#theme)
  - [SEO / PWA](#seo--pwa)
- [Build & Deploy](#build--deploy)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

</details>

---

## Overview
A production-ready portfolio template using React + Vite. It includes multilingual content with i18next, dark/light theme, responsive UI via React Bootstrap, GitHub activity, and basic SEO/PWA wiring.

**Why this project**
- Fast dev loop with Vite.
- Clear component structure.
- Built-in localization and theming.
- Ready for GitHub Pages or Vercel.

---

## Features
| Area | Summary |
| :-- | :-- |
| Architecture | SPA, component-driven, client-side routing |
| Internationalization | i18next with language files under `public/locales/{en,ar,es,fr}` |
| Theming | Light/dark toggle via `ThemeContext.jsx` and CSS variables |
| UI/UX | Responsive layout, project cards, resume viewer, preloader |
| Integrations | EmailJS, GitHub contributions widget |
| Quality | ESLint config, Vitest test suite, consistent formatting |
| Performance | Vite dev server and optimized builds |

---

## Tech Stack
- **Core:** React, Vite, React Router, React Bootstrap
- **i18n:** i18next + language detector
- **Tooling:** ESLint, Vitest + Testing Library
- **Assets:** SVG/PNG under `src/Assets`

---

## Project Structure
```txt
Portfolio/
├─ public/
│  ├─ 404.html
│  ├─ CNAME
│  ├─ manifest.json
│  ├─ preload/
│  └─ locales/
│     ├─ en/translation.json
│     ├─ ar/translation.json
│     ├─ es/translation.json
│     └─ fr/translation.json
├─ src/
│  ├─ Assets/
│  ├─ components/
│  │  ├─ About/
│  │  ├─ Contact/
│  │  ├─ Home/
│  │  ├─ Projects/
│  │  ├─ Resume/
│  │  ├─ ErrorBoundary.jsx
│  │  ├─ Footer.jsx
│  │  ├─ Navbar.jsx
│  │  ├─ NotFound.jsx
│  │  └─ ScrollToTop.jsx
│  ├─ test/
│  ├─ App.jsx
│  ├─ ThemeContext.jsx
│  ├─ LocaleContext.jsx
│  ├─ i18n.jsx
│  ├─ colors.css
│  ├─ index.css
│  ├─ style.css
│  └─ main.jsx
├─ index.html
├─ eslint.config.js
├─ package.json
└─ vite.config.js
```

---

## Getting Started

### Quick Start

Requirements: **Node.js 18+**, **Git**

```bash
git clone https://github.com/tarekchaalan/Portfolio.git
cd Portfolio
npm install
npm run dev
# open http://localhost:5173
```

Single-line:

```bash
git clone https://github.com/tarekchaalan/Portfolio.git && cd Portfolio && npm install && npm run dev
```

### Scripts

```bash
npm run dev       # start Vite dev server with HMR
npm run build     # production build to dist/
npm run preview   # preview local production build
npm test          # run the Vitest suite once
npm run test:watch # run Vitest in watch mode
npm run lint      # run ESLint over src/
npm run deploy    # build and publish dist/ to GitHub Pages
```

---

## Configuration

### Localization (i18n)

* Strings live in `public/locales/{lang}/translation.json`.
* Default language is set in `src/i18n.jsx`.
* Add a new language by creating a folder and translation file, then exposing it in the language selector in `Navbar.jsx`.

### Theme

* Theme state in `src/ThemeContext.jsx`.
* CSS variables live in `src/colors.css` and are consumed by `index.css` / `style.css`.
* Toggle in the navbar or via context.

### SEO / PWA

* Edit base tags (analytics, meta description, OG/Twitter) in `index.html`.
* `public/manifest.json` provides icons, theme color, and display mode.
* SPA 404 handling for GitHub Pages is in `public/404.html`.

---

## Build & Deploy

### GitHub Pages

1. Enable GitHub Pages for the repo.
2. Set `base` and `outDir` in `vite.config.js` if needed.
3. Build and deploy:

   ```bash
   npm run deploy   # runs the build, then publishes dist/ via gh-pages
   ```

### Vercel (alternative)

1. Import the repo in Vercel.
2. Build command: `npm run build`
3. Output directory: `dist`
4. Set framework: **Other** or **Vite**. Deploy.

---

## Contributing

* **Issues:** [https://github.com/tarekchaalan/Portfolio/issues](https://github.com/tarekchaalan/Portfolio/issues)
* **PRs:** Fork, branch, commit, open PR with rationale.

```bash
git checkout -b feature/your-change
git commit -m "feat: describe your change"
git push origin feature/your-change
```

---

## License

MIT. See [LICENSE](./LICENSE).

---

## Contact

* Website: [https://tarekchaalan.com/](https://tarekchaalan.com/)
* Email: [tarekJobs@outlook.com](mailto:tarekJobs@outlook.com)
* Repo: [https://github.com/tarekchaalan/Portfolio](https://github.com/tarekchaalan/Portfolio)

<div align="right">

[![][back-to-top]](#top)

</div>

[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square

---