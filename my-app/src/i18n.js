import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // Initializes i18next for React use
  .init({
    resources: {
      en: { translation: require('./en.json') },
      hi: { translation: require('./hi.json') }, // Include Hindi translations
      te: { translation: require('./te.json') }, // Empty for now, fill later
    },
    fallbackLng: 'en', // Default language if browser language not found
    debug: false, // Set to true for debugging purposes
    interpolation: {
      escapeValue: false, // Optional: Prevents escaping of HTML entities
    },
  });
export default i18n;
