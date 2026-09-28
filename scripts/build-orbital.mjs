#!/usr/bin/env node
/*
 * Builds the static Orbital Notes pages into dist/ (runs after `vite build`
 * as part of `npm run build`).
 *
 * These pages are plain HTML files, not SPA routes: the full text is in the
 * served HTML (App Review opens these URLs), and GitHub Pages serves them
 * with a 200 without going through the 404.html SPA fallback. Each page is
 * written twice, e.g. dist/orbital/guide.html and dist/orbital/guide/index.html,
 * so /orbital/guide resolves however the host maps extensionless URLs.
 *
 *   /orbital          landing       src/orbital/content.js
 *   /orbital/support  support       src/orbital/content.js
 *   /orbital/guide    user guide    src/orbital/docs/USER-GUIDE.md
 *   /orbital/privacy  privacy       src/orbital/docs/PRIVACY.md   (hard stop)
 *   /orbital/terms    terms         src/orbital/docs/TERMS.md     (hard stop)
 *
 * Re-syncing the docs: the markdown lives in the Orbital app repo
 * (/Users/tarek/Developer/macos/orbital/docs/). Copy PRIVACY.md, TERMS.md and
 * USER-GUIDE.md over the copies in src/orbital/docs/ (the first-line
 * "<!-- Source: ... -->" comment is optional; README.md has a one-liner that
 * keeps it). Nothing outside this repo is read at build time.
 *
 * DRAFT hard stop: before emitting privacy or terms, the build runs the
 * equivalent of  grep -nE '^> \*\*DRAFT|PLACEHOLDER'  on that doc. Any match
 * means the page is NOT emitted (neither file); the matching lines are
 * printed and the rest of the build continues. The footer links to those
 * pages stay, so they go live on the first build after the docs are final.
 *
 * Link check: every in-page #anchor and cross-doc link in the markdown must
 * resolve to a heading id (GitHub-style slugs). A broken link on a page that
 * is emitted fails the build; on a withheld page it is only a warning.
 */
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  checkDocLinks,
  findHardStopLines,
  renderMarkdownDoc,
} from "../src/orbital/markdown.js";
import { ROUTES, renderPage } from "../src/orbital/layout.js";
import {
  TAGLINE,
  landingContent,
  supportContent,
} from "../src/orbital/content.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
const docsDir = path.join(root, "src/orbital/docs");

const log = (message = "") => console.log(`[orbital] ${message}`);
const rel = (file) => path.relative(root, file);

// Route "/orbital/guide" -> dist/orbital/guide.html + dist/orbital/guide/index.html
function outputFiles(route) {
  const base = path.join(distDir, route.replace(/^\//, ""));
  return [`${base}.html`, path.join(base, "index.html")];
}

function stripCssComments(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\n\s*\n+/g, "\n")
    .trim();
}

const DOCS = [
  {
    key: "privacy",
    file: "PRIVACY.md",
    title: "Orbital Notes — Privacy Policy",
    description:
      "Privacy policy for Orbital Notes, an audio-first notebook for Mac.",
    hardStop: true,
  },
  {
    key: "terms",
    file: "TERMS.md",
    title: "Orbital Notes — Terms of Use",
    description:
      "Terms of use for Orbital Notes, an audio-first notebook for Mac.",
    hardStop: true,
  },
  {
    key: "guide",
    file: "USER-GUIDE.md",
    title: "Orbital Notes — User Guide",
    description:
      "How to use Orbital Notes, an audio-first notebook for Mac: recording, transcription, the AI assistant, locking, iCloud sync, plans, and troubleshooting.",
    hardStop: false,
  },
];

async function main() {
  const css = [
    stripCssComments(await readFile(path.join(root, "src/colors.css"), "utf8")),
    stripCssComments(
      await readFile(path.join(root, "src/orbital/orbital.css"), "utf8")
    ),
  ].join("\n");
  const year = new Date().getFullYear();

  const pages = [
    {
      route: ROUTES.landing,
      title: "Orbital Notes",
      description: TAGLINE,
      kind: "landing",
      content: landingContent,
    },
    {
      route: ROUTES.support,
      title: "Orbital Notes — Support",
      description:
        "Get help with Orbital Notes: contact, reporting a problem, restoring purchases, subscriptions, and refunds.",
      kind: "page",
      content: supportContent,
    },
  ];
  const withheld = [];
  let failed = false;

  // Render every doc (withheld ones too, so cross-doc anchors can be checked)
  const rendered = {};
  for (const doc of DOCS) {
    const file = path.join(docsDir, doc.file);
    const source = await readFile(file, "utf8");
    const result = renderMarkdownDoc(source);
    rendered[doc.file] = result;

    const hits = doc.hardStop ? findHardStopLines(source) : [];
    if (hits.length) {
      withheld.push(doc.file);
      log(
        `HARD STOP: ${ROUTES[doc.key]} NOT emitted. ${rel(file)} matches ` +
          `'^> \\*\\*DRAFT|PLACEHOLDER' on ${hits.length} line(s):`
      );
      for (const { line, text } of hits) log(`  ${rel(file)}:${line}:${text}`);
      // Never leave a stale copy from an earlier build behind
      for (const out of outputFiles(ROUTES[doc.key])) {
        await rm(out, { force: true });
      }
      await rm(path.join(distDir, ROUTES[doc.key].slice(1)), {
        recursive: true,
        force: true,
      });
      continue;
    }

    pages.push({
      route: ROUTES[doc.key],
      title: doc.title,
      description: doc.description,
      kind: "doc",
      content: result.html,
    });
  }

  // Anchor / link check
  const report = checkDocLinks(rendered);
  for (const [name, r] of Object.entries(report)) {
    const emitted = !withheld.includes(name);
    const problems = [
      ...r.inPage.unresolved.map((href) => `unresolved in-page anchor ${href}`),
      ...r.crossDoc.unresolved.map((href) => `unresolved cross-doc anchor ${href}`),
      ...r.unknownRelative.map((href) => `relative link with no page on the site: ${href}`),
    ];
    const inPageOk = r.inPage.total - r.inPage.unresolved.length;
    const crossOk = r.crossDoc.total - r.crossDoc.unresolved.length;
    log(
      `links: ${name}: ${inPageOk}/${r.inPage.total} in-page anchors resolve, ` +
        `${crossOk}/${r.crossDoc.total} cross-doc links resolve` +
        (emitted ? "" : " (page withheld)")
    );
    for (const problem of problems) {
      log(`  ${emitted ? "ERROR" : "warning"}: ${name}: ${problem}`);
    }
    if (emitted && problems.length) failed = true;
  }

  // Write pages
  for (const page of pages) {
    const html = renderPage({ ...page, css, year });
    const files = outputFiles(page.route);
    for (const out of files) {
      await mkdir(path.dirname(out), { recursive: true });
      await writeFile(out, html);
    }
    log(`wrote ${page.route} -> ${files.map(rel).join(", ")}`);
  }

  if (withheld.length) {
    log(
      `withheld (draft markers): ${withheld.join(", ")}. Footer links to them ` +
        "stay in place and will work once the docs are final."
    );
  }

  if (failed) {
    log("FAILED: fix the broken links above in the source docs, then re-sync.");
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error("[orbital] build failed:", error);
  process.exitCode = 1;
});
