import { describe, it, expect } from "vitest";
import {
  checkDocLinks,
  findHardStopLines,
  renderMarkdownDoc,
  rewriteDocHref,
  stripSourceComment,
} from "../orbital/markdown";
import { FOOTER_LINKS, renderPage } from "../orbital/layout";
import { TAGLINE, landingContent, supportContent } from "../orbital/content";

describe("Orbital pages: DRAFT hard stop", () => {
  it("matches DRAFT blockquotes and PLACEHOLDER anywhere, like grep -nE", () => {
    const source = [
      "<!-- Source: /x/PRIVACY.md — re-sync by copying that file over this one -->",
      "# Policy",
      "> **DRAFT — for the owner's review**",
      "Not a > **DRAFT line",
      "> Plain quote",
      "<!-- PLACEHOLDER — confirm before publishing -->",
    ].join("\n");
    expect(findHardStopLines(source)).toEqual([
      { line: 3, text: "> **DRAFT — for the owner's review**" },
      { line: 6, text: "<!-- PLACEHOLDER — confirm before publishing -->" },
    ]);
  });

  it("finds nothing in a final doc", () => {
    expect(findHardStopLines("# Terms\n\n> A normal quote\n")).toEqual([]);
  });
});

describe("Orbital pages: markdown rendering", () => {
  it("strips the provenance comment and drops other HTML comments", () => {
    const source =
      "<!-- Source: /x/TERMS.md — re-sync by copying that file over this one -->\n" +
      "# Terms\n\n<!-- PLACEHOLDER — note to self\n     spanning lines -->\n## Governing law\n";
    expect(stripSourceComment(source).startsWith("# Terms")).toBe(true);
    const { html } = renderMarkdownDoc(source);
    expect(html).not.toContain("Source:");
    expect(html).not.toContain("PLACEHOLDER");
    expect(html).not.toContain("<!--");
    expect(html).toContain('<h2 id="governing-law">Governing law</h2>');
  });

  it("escapes raw HTML in prose so it stays visible", () => {
    const { html } = renderMarkdownDoc(
      'Every answer is labelled "via <provider>" so you know.\n\n' +
        "Folder `meeting-with-sam--<id>` and `block:<subject>`.\n"
    );
    expect(html).toContain("via &lt;provider&gt;");
    expect(html).toContain("<code>meeting-with-sam--&lt;id&gt;</code>");
    expect(html).toContain("<code>block:&lt;subject&gt;</code>");
    expect(html).not.toContain("<provider>");
  });

  it("gives headings GitHub-style slug ids, suffixing duplicates", () => {
    const { html, ids } = renderMarkdownDoc(
      "## 12. Locking, privacy, and where your data lives\n\n" +
        "## Plans and what you're buying\n\n" +
        "### Notes\n\n### Notes\n\n### Notes\n"
    );
    expect([...ids]).toEqual([
      "12-locking-privacy-and-where-your-data-lives",
      "plans-and-what-youre-buying",
      "notes",
      "notes-1",
      "notes-2",
    ]);
    expect(html).toContain('id="notes-2"');
  });

  it("rewrites sibling doc links to site routes, keeping fragments and text", () => {
    expect(rewriteDocHref("TERMS.md#payments-subscriptions-and-refunds")).toBe(
      "/orbital/terms#payments-subscriptions-and-refunds"
    );
    expect(rewriteDocHref("PRIVACY.md")).toBe("/orbital/privacy");
    expect(rewriteDocHref("README.md")).toBe("/orbital");
    expect(rewriteDocHref("https://example.com/TERMS.md")).toBe(
      "https://example.com/TERMS.md"
    );
    const { html } = renderMarkdownDoc(
      "See the [privacy policy](PRIVACY.md) and [docs/README.md](README.md)."
    );
    expect(html).toContain('<a href="/orbital/privacy">privacy policy</a>');
    expect(html).toContain('<a href="/orbital">docs/README.md</a>');
  });

  it("wraps tables in a scroll container, flagging very wide ones", () => {
    const narrow = renderMarkdownDoc("| A | B |\n|---|---|\n| 1 | 2 |\n").html;
    expect(narrow).toMatch(/^<div class="table-wrap" tabindex="0">\n<table>/);
    const wideRow = (cell) => `|${Array(7).fill(cell).join("|")}|\n`;
    const wide = renderMarkdownDoc(
      wideRow(" H ") + wideRow("---") + wideRow(" c ")
    ).html;
    expect(wide).toContain('class="table-wrap table-wrap--wide"');
  });
});

describe("Orbital pages: link check", () => {
  it("reports unresolved in-page and cross-doc anchors", () => {
    const docs = {
      "USER-GUIDE.md": renderMarkdownDoc(
        "## Contents\n\n[ok](#contents) [bad](#missing) [pp](PRIVACY.md#nope) " +
          "[terms](TERMS.md#governing-law) [arch](ARCHITECTURE.md) [web](https://a.b)\n"
      ),
      "PRIVACY.md": renderMarkdownDoc("# Privacy\n"),
      "TERMS.md": renderMarkdownDoc("## Governing law\n"),
    };
    const report = checkDocLinks(docs)["USER-GUIDE.md"];
    expect(report.inPage).toEqual({ total: 2, unresolved: ["#missing"] });
    expect(report.crossDoc).toEqual({
      total: 2,
      unresolved: ["PRIVACY.md#nope"],
    });
    expect(report.unknownRelative).toEqual(["ARCHITECTURE.md"]);
  });
});

describe("Orbital pages: page shell", () => {
  const page = renderPage({
    route: "/orbital/guide",
    title: "Orbital Notes — User Guide",
    description: "Guide & more",
    kind: "doc",
    content: "<h1>Orbital User Guide</h1>",
    css: ".x{}",
    year: 2026,
  });

  it("is a complete document with the content in the HTML", () => {
    expect(page.startsWith("<!DOCTYPE html>")).toBe(true);
    expect(page).toContain('<html lang="en" data-theme="light">');
    expect(page).toContain(
      '<meta name="viewport" content="width=device-width, initial-scale=1" />'
    );
    expect(page).toContain("<title>Orbital Notes — User Guide</title>");
    expect(page).toContain('content="Guide &amp; more"');
    expect(page).toContain("<h1>Orbital User Guide</h1>");
    expect(page).toContain("&copy; 2026 Tarek Chaalan");
  });

  it("applies the saved site theme before paint", () => {
    const head = page.slice(0, page.indexOf("</head>"));
    expect(head).toContain('localStorage.getItem("theme")');
    expect(head).toContain('setAttribute("data-theme",t)');
    expect(head.indexOf("<script>")).toBeLessThan(head.indexOf("<style>"));
  });

  it("links the header and footer with extensionless routes", () => {
    expect(page).toContain('<a class="site-name" href="/">');
    expect(page).toContain('href="/orbital">Orbital Notes</a>');
    for (const { href, label } of FOOTER_LINKS) {
      expect(page).toContain(`href="${href}"`);
      expect(page).toContain(`>${label}</a>`);
    }
    expect(FOOTER_LINKS.map((l) => l.href)).toEqual([
      "/orbital/privacy",
      "/orbital/terms",
      "/orbital/support",
      "/orbital/guide",
    ]);
    expect(page).toContain('<a href="/orbital/guide" aria-current="page">');
    expect(page).not.toMatch(/href="[^"]*\.html"/);
  });
});

describe("Orbital pages: landing and support content", () => {
  it("has the tagline and a non-link App Store badge, with no App Store URL shipped", () => {
    expect(landingContent).toContain(TAGLINE);
    expect(landingContent).toContain(
      '<p class="badge">Coming soon on the Mac App Store</p>'
    );
    expect(landingContent).not.toContain("apps.apple.com/app/id");
    expect(landingContent).toContain("Coming soon on the Mac App Store");
    expect(landingContent).not.toMatch(/<a\b[^>]*>[^<]*Coming soon on the Mac App Store/);
  });

  it("covers every support topic", () => {
    for (const needle of [
      "<h1>Orbital Notes Support</h1>",
      'href="mailto:orbitaldevs@outlook.com"',
      "Help ▸ Report a Problem…",
      "Settings ▸ Plans ▸ Restore Purchases",
      'href="https://apps.apple.com/account/subscriptions"',
      'href="https://reportaproblem.apple.com"',
      'href="/orbital/guide"',
    ]) {
      expect(supportContent).toContain(needle);
    }
  });
});
