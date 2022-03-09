import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import es from './locales/es/translation.json';
import en from './locales/en/translation.json';

const fallbackLng = ['es'];
const availableLanguages = ['es', 'en'];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng,
    detection: { checkWhitelist: true },
    debug: false,
    whitelist: availableLanguages,
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
    useLocalStorage: true,
    useDataAttrOptions: true,
    resources: { es: { translation: es }, en: { translation: en } },
  });

export default i18n;
