// Shared HTML shell for the static Orbital Notes pages. Used at build time by
// scripts/build-orbital.mjs; pure functions, no I/O.
import { escapeHtml } from "./markdown.js";

export const SITE_ORIGIN = "https://tarekchaalan.com";

export const ROUTES = {
  landing: "/orbital",
  privacy: "/orbital/privacy",
  terms: "/orbital/terms",
  support: "/orbital/support",
  guide: "/orbital/guide",
};

export const FOOTER_LINKS = [
  { label: "Privacy", href: ROUTES.privacy },
  { label: "Terms", href: ROUTES.terms },
  { label: "Support", href: ROUTES.support },
  { label: "User Guide", href: ROUTES.guide },
];

// Same Google Fonts family as src/index.css (Raleway), plus the bolder
// weights the long-form prose needs for headings and **bold** text
export const FONT_STYLESHEET =
  "https://fonts.googleapis.com/css2?family=Raleway:wght@500;600;700&display=swap";

// Runs before first paint. Same localStorage key and attribute as
// src/ThemeContext.jsx; with no saved choice the <html data-theme="light">
// default applies, matching the main site's default
export const THEME_SCRIPT =
  '(function(){try{var t=localStorage.getItem("theme");' +
  'if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}' +
  "catch(e){}})();";

// Same mark as BrandLogo in src/components/Navbar.jsx
const LOGO_SVG =
  '<svg class="site-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 50" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12.80 18.75L20.20 18.75L21.40 13.20L1.20 13.20L0 18.75L7.30 18.75L1 48.20L6.55 48.20L12.80 18.75ZM38.95 18.85L41.35 14.35Q39.75 13.45 37.78 13.02Q35.80 12.60 34 12.60Q31.25 12.60 28.95 13.75Q26.65 14.90 25.05 17.12Q23.45 19.35 22.75 22.65L19.25 39.00Q18.60 42.05 19.30 44.25Q20 46.45 21.98 47.62Q23.95 48.80 27.05 48.80Q29 48.80 31.13 48.32Q33.25 47.85 35.60 47.05L35.90 41.80Q35.65 41.85 34.48 42.20Q33.30 42.55 31.70 42.85Q30.10 43.15 28.55 43.15Q27.10 43.15 26.15 42.72Q25.20 42.30 24.85 41.37Q24.50 40.45 24.80 38.90L28.30 22.50Q28.65 20.95 29.35 19.95Q30.05 18.95 31.30 18.45Q32.55 17.95 34.45 17.95Q35.60 17.95 36.83 18.20Q38.05 18.45 38.95 18.85Z"/></svg>';

function currentAttr(href, route) {
  return href === route ? ' aria-current="page"' : "";
}

// kind: "landing" (custom layout), "doc" (rendered markdown) or "page"
// (hand-written prose, e.g. support)
export function renderPage({ route, title, description, kind, content, css, year }) {
  const url = SITE_ORIGIN + route;
  const body =
    kind === "landing"
      ? `<div class="landing">\n${content}\n</div>`
      : `<article class="prose">\n${content}\n</article>` +
        (kind === "doc"
          ? '\n<p class="back-to-top"><a href="#top">Back to top</a></p>'
          : "");
  const footerLinks = FOOTER_LINKS.map(
    ({ label, href }) => `<a href="${href}"${currentAttr(href, route)}>${label}</a>`
  ).join("\n        ");

  return `<!DOCTYPE html>
<html lang="en" data-theme="light">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <link rel="canonical" href="${url}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <link rel="icon" type="image/svg+xml" href="/AvatarIcon.svg" />
    <script>${THEME_SCRIPT}</script>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="${FONT_STYLESHEET}" />
    <style>
${css}
    </style>
  </head>
  <body id="top">
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header">
      <div class="wrap site-header-inner">
        <a class="site-name" href="/">${LOGO_SVG}<span>Tarek Chaalan</span></a>
        <a class="product-link" href="${ROUTES.landing}"${currentAttr(ROUTES.landing, route)}>Orbital Notes</a>
      </div>
    </header>
    <main id="main" class="wrap">
${body}
    </main>
    <footer class="site-footer">
      <div class="wrap site-footer-inner">
        <nav class="footer-nav" aria-label="Orbital Notes">
        ${footerLinks}
        </nav>
        <p class="copyright">&copy; ${year} Tarek Chaalan</p>
      </div>
    </footer>
  </body>
</html>
`;
}
