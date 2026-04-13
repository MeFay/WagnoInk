import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import pt from "./locales/pt/translation.json";
import en from "./locales/en/translation.json";
import es from "./locales/es/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: pt },
      en: { translation: en },
      es: { translation: es },
    },
    fallbackLng: "pt",
    supportedLngs: ["pt", "en", "es"],
    interpolation: { escapeValue: false },
    detection: {
      // I only check localStorage, not the browser's language.
      // This way the user's language choice stays saved between visits.
      // If nothing is stored yet, fallbackLng kicks in and defaults to Portuguese.
      order: ["localStorage"],
      lookupLocalStorage: "wagno-lang",
      caches: ["localStorage"],
    },
  });

export default i18n;
