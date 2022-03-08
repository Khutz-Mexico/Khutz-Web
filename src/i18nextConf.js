import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const fallbackLng = ['es'];
const availableLanguages = ['es', 'en'];

i18n
  .use(Backend)
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
    backend: {
      loadPath: '/assets/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
