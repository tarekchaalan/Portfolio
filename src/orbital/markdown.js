// Markdown -> HTML for the static Orbital Notes pages (privacy, terms, guide).
// Used at build time by scripts/build-orbital.mjs; pure functions, no I/O.
//
// Rendering rules:
// - Text is rendered verbatim: no sanitizer, nothing dropped except HTML
//   comments (GitHub drops those too).
// - Any other raw HTML in the source is escaped so it shows as literal text
//   (e.g. `"via <provider>"` in the user guide stays visible).
// - Headings get GitHub-style slug ids, so `#anchor` links written for GitHub
//   keep working.
// - Links to the sibling docs (PRIVACY.md, TERMS.md, ...) are rewritten to
//   the site's extensionless routes, keeping any #fragment.
// - Tables are wrapped in a horizontally scrollable container.
import { Marked, Renderer } from "marked";
import { gfmHeadingId, getHeadingList } from "marked-gfm-heading-id";

// Same pattern as: grep -nE '^> \*\*DRAFT|PLACEHOLDER'
export const HARD_STOP_PATTERN = /^> \*\*DRAFT|PLACEHOLDER/;

// Relative doc links in the markdown -> routes on tarekchaalan.com
export const DOC_ROUTES = {
  "PRIVACY.md": "/orbital/privacy",
  "TERMS.md": "/orbital/terms",
  "USER-GUIDE.md": "/orbital/guide",
  "README.md": "/orbital",
};

// Tables with at least this many columns get a sticky first column
const WIDE_TABLE_COLUMNS = 6;

export function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Lines that block publication, as { line, text } with 1-based line numbers
// matching the file on disk (so they line up with grep -n output)
export function findHardStopLines(source) {
  return source
    .split(/\r?\n/)
    .flatMap((text, i) =>
      HARD_STOP_PATTERN.test(text) ? [{ line: i + 1, text }] : []
    );
}

// The repo copies start with a "<!-- Source: ... -->" provenance line
export function stripSourceComment(source) {
  return source.replace(/^<!-- Source: [^\n]*-->[ \t]*\r?\n/, "");
}

// Parses a relative link to one of the sibling docs
function parseDocHref(href) {
  const match = /^(?:\.\/)?([\w.-]+\.md)(#.*)?$/i.exec(href);
  if (!match || !DOC_ROUTES[match[1]]) return null;
  return { doc: match[1], route: DOC_ROUTES[match[1]], fragment: match[2] || "" };
}

export function rewriteDocHref(href) {
  const doc = parseDocHref(href);
  return doc ? doc.route + doc.fragment : href;
}

export function renderMarkdownDoc(source) {
  const links = [];

  const marked = new Marked({ gfm: true }, gfmHeadingId(), {
    walkTokens(token) {
      if (token.type === "link") {
        links.push(token.href);
        token.href = rewriteDocHref(token.href);
      } else if (token.type === "text" && token.escaped) {
        // marked leaves text inside raw <pre>/<script>/... unescaped; since
        // raw HTML is shown as literal text here, escape that text too
        token.escaped = false;
      }
    },
    renderer: {
      html({ text, block }) {
        const visible = text.replace(/<!--[\s\S]*?(?:-->|$)/g, "");
        if (!visible.trim()) return "";
        return block
          ? `<p>${escapeHtml(visible.trim())}</p>\n`
          : escapeHtml(visible);
      },
      table(token) {
        const wide = token.header.length >= WIDE_TABLE_COLUMNS;
        const table = Renderer.prototype.table.call(this, token);
        return `<div class="table-wrap${
          wide ? " table-wrap--wide" : ""
        }" tabindex="0">\n${table}</div>\n`;
      },
    },
  });

  const html = marked.parse(stripSourceComment(source));
  const headings = getHeadingList().map(({ level, id, raw }) => ({
    level,
    id,
    text: raw,
  }));

  return { html, headings, ids: new Set(headings.map((h) => h.id)), links };
}

function decodeFragment(fragment) {
  try {
    return decodeURIComponent(fragment);
  } catch {
    return fragment;
  }
}

// Checks every link collected by renderMarkdownDoc. `docs` maps a doc file
// name (e.g. "USER-GUIDE.md") to its render result. Returns, per doc:
// { inPage: { total, unresolved[] }, crossDoc: { total, unresolved[] },
//   unknownRelative[] }
export function checkDocLinks(docs) {
  const report = {};

  for (const [name, doc] of Object.entries(docs)) {
    const result = {
      inPage: { total: 0, unresolved: [] },
      crossDoc: { total: 0, unresolved: [] },
      unknownRelative: [],
    };

    for (const href of doc.links) {
      if (href.startsWith("#")) {
        result.inPage.total++;
        if (!doc.ids.has(decodeFragment(href.slice(1)))) {
          result.inPage.unresolved.push(href);
        }
        continue;
      }

      if (/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(href)) continue; // external

      const target = parseDocHref(href);
      if (!target) {
        result.unknownRelative.push(href);
        continue;
      }

      result.crossDoc.total++;
      if (!target.fragment) continue;
      const targetDoc = docs[target.doc];
      const id = decodeFragment(target.fragment.slice(1));
      if (!targetDoc || !targetDoc.ids.has(id)) {
        result.crossDoc.unresolved.push(href);
      }
    }

    report[name] = result;
  }

  return report;
}
