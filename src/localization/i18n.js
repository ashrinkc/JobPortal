import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import translationEN from "./locales/en/translation.json";
import translationPL from "./locales/pl/translation.json";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    fallbackLng: "en",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },

    resources: {
      en: {
        translations: translationEN,
      },
      pl: {
        translations: translationPL,
      },
    },
    ns: ["translations"],
    defaultNS: "translations",
  });

export default i18n;
