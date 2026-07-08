# AUDIT_NOTES (working doc — delete when audit completes)

## Project identity
- **What**: Personal portfolio SPA — tarekchaalan.com (custom domain via `public/CNAME`), deployed to GitHub Pages via `gh-pages -d dist`.
- **Stack**: React 18 + Vite 6, JSX only (no TS), React Router 7, React Bootstrap 5, i18next (en/es/fr/ar via HTTP backend loading `public/locales/*`), react-pdf (resume viewer), EmailJS (contact form), react-github-calendar, typewriter-effect.
- **History**: Migrated from Create React App to Vite (CRA fossils remain: `public/index.html`, `public/manifest.json`, most of `App.css`).

## Architecture actually in use
- `main.jsx` → ThemeProvider → App → Router with 5 lazy-ish routes (Suspense but **no `React.lazy`** — Suspense is only exercised by i18next HTTP backend).
- State: two contexts (ThemeContext = light/dark via `data-theme` attr + CSS vars in `colors.css`; LocaleContext mirrors i18n language).
- GH Pages SPA routing: `404.html` stores path in `sessionStorage.redirectPath` → `RedirectHandler` in App replays it. (Note: dead second mechanism in stale `public/index.html` uses `sessionStorage.redirect` — never shipped.)
- No tests, no CI, no test runner configured (`npm test` doesn't even exist as a script despite README claiming it does).

## Conventions observed
- Function components, default exports, inline styles mixed with CSS classes.
- CSS: single big `style.css` (1063 lines) + `colors.css` vars; `!important` used liberally.
- No error boundaries, no logging framework. `console.log` monkey-patched in main.jsx to suppress a noisy library message.
- Commit style: short sentence-case summaries.

## Build / lint / test status (baseline)
- `npm run build`: ✅ passes (19s). Warnings: main JS chunk 1.06 MB (react-pdf + everything, no code splitting); pdf.worker 2.2 MB asset.
- `npx eslint src`: ❌ **BROKEN** — `eslint.config.js` imports `eslint-plugin-react-refresh` and `globals`, neither declared in package.json.
- Tests: none exist.
- `npm audit`: 24 vulns (1 critical, 10 high) — axios (unused dep!), react-router-dom/turbo-stream, vite/rollup, babel, tar-fs (gh-pages), yaml.

## Key confirmed findings (details in Phase 2 catalogue)
1. **Prod is missing GA, SEO meta, OG/Twitter tags, manifest link** — they live only in dead CRA `public/index.html`; Vite builds from root `index.html` which has none of them. dist/index.html confirmed bare.
2. **Navbar scroll listener leak** — `window.addEventListener("scroll", scrollHandler)` runs in render body, re-adds every render, never removed.
3. **Modal blur never applies** — Projects.jsx toggles `.blur-effect` on `.main-content`, which doesn't exist (wrapper is `.content-wrapper`).
4. **App.jsx preloads `/preload/projects/TicTacToe.png`** — file doesn't exist → 404 on every page load.
5. **i18n `debug: true`** in production; language persistence mismatch: detector caches to cookie only, but App.jsx/i18n.jsx read `localStorage.i18nextLng` (only works because i18next itself writes localStorage? verify — detector `cache: ["cookie"]` means localStorage never written → resume-preload lang defaults to "en" always).
6. **`axios` dependency unused** (README even badges it) — also the single critical audit vuln chain.
7. Dead code: `App.css` CRA boilerplate, `src/Assets/myAvatar1.svg`, `home-bg.jpg` unreferenced; `vite.config.jsx` `historyApiFallback` is a webpack-dev-server option Vite ignores.
8. README drift: claims `npm test` script (doesn't exist), claims PWA wiring (manifest never linked), project structure lists files accurately otherwise.
9. Contact form: EmailJS IDs hardcoded (normal for EmailJS — public by design), `alert()` for UX, no send-in-progress state (double-submit possible).
10. Duplicate `id="SIfooter"` on 3 `<li>` elements in Footer (invalid HTML).
11. Resume.jsx `width` read once on mount, no resize listener (scale wrong after rotate/resize).
12. eslint config declares react version "18.3" — fine; `react-refresh` plugin referenced but missing.

## Seams
- External: EmailJS (contact), GitHub calendar API (react-github-calendar fetches), Google Fonts @import, i18n JSON over HTTP.
- No auth, no server, no persistence beyond localStorage/cookie/sessionStorage.

## Verification paths (manual)
- Home / About / Projects / Resume / Contact routes; language switch (4 langs, incl. RTL check for ar); theme toggle; project image modal; resume PDF render + download; 404 deep-link redirect flow.
