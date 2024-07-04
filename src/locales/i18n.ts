import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import { en } from "./translations/en";
import { es } from "./translations/es";
import { ptbr } from "./translations/ptbr";

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(Backend)
  .init({
    resources: {
      ptbr: { translation: ptbr },
      en: { translation: en },
      es: { translation: es },
    },
    fallbackLng: "ptbr",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
