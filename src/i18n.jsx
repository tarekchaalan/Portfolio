import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: import.meta.env.DEV,
    detection: {
      // localStorage carries the visitor's saved choice between sessions;
      // the option keys must be `order`/`caches` — earlier `cache` was
      // silently ignored and persistence only worked via detector defaults
      order: ["querystring", "localStorage", "cookie"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

// Keep the document's language and direction in sync (Arabic is RTL)
i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng;
  document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
});

export default i18n;
