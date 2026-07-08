import { describe, it, expect } from "vitest";
import i18n from "../i18n";

describe("i18n configuration (regression)", () => {
  it("persists the language choice to localStorage via valid option keys", () => {
    // `caches` (not `cache`) is the real option name — the old config's
    // invalid key meant persistence only worked through detector defaults
    expect(i18n.options.detection.caches).toContain("localStorage");
    expect(i18n.options.detection.order).toContain("localStorage");
  });

  it("falls back to English", () => {
    expect(i18n.options.fallbackLng).toContain("en");
  });

  it("sets document lang and direction when the language changes", async () => {
    // satisfy the resource loader locally — the HTTP backend has no server
    // to fetch from under jsdom and would retry until the test times out
    i18n.addResourceBundle("ar", "translation", {});
    i18n.addResourceBundle("en", "translation", {});

    await i18n.changeLanguage("ar");
    expect(document.documentElement.dir).toBe("rtl");
    expect(document.documentElement.lang).toBe("ar");

    await i18n.changeLanguage("en");
    expect(document.documentElement.dir).toBe("ltr");
    expect(document.documentElement.lang).toBe("en");
  });
});
