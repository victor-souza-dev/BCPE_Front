import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import { de } from "./translations/de";
import { en } from "./translations/en";
import { es } from "./translations/es";
import { it } from "./translations/it";
import { ja } from "./translations/ja";
import { ptbr } from "./translations/ptbr";
import { ru } from "./translations/ru";

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(Backend)
  .init({
    resources: {
      ptbr: { translation: ptbr },
      en: { translation: en },
      es: { translation: es },
      ja: { translation: ja },
      ru: { translation: ru },
      it: { translation: it },
      de: { translation: de },
    },
    fallbackLng: "ptbr",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      convertDetectedLanguage: (lng) => lng.replace("-", "").toLowerCase(),
    },
  });

export default i18n;
