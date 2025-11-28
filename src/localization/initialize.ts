import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import { DEFAULT_LANGUAGE, I18N_NAMESPACE } from 'src/constants';

import localizationEn from './en/localization.en';
import localizationEs from './es/localization.es';

// Get the language from localStorage if it exists (matching Zustand's storage key)
const getInitialLanguage = (): string => {
  try {
    const appStorage = localStorage.getItem('app-storage');
    if (appStorage) {
      const parsed = JSON.parse(appStorage);
      return parsed?.state?.lang ?? DEFAULT_LANGUAGE;
    }
  } catch (error) {
    console.error('Error reading language from localStorage:', error);
  }
  return DEFAULT_LANGUAGE;
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: DEFAULT_LANGUAGE,
    lng: getInitialLanguage(), // Initialize with language from localStorage
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    // defaultNS: I18N_NAMESPACE, // Set library namespace as default
    ns: [I18N_NAMESPACE], // Declare the namespace
    supportedLngs: ['en', 'es'],
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    resources: {
      en: {
        [I18N_NAMESPACE]: localizationEn, // Use namespace instead of 'translation'
      },
      es: {
        [I18N_NAMESPACE]: localizationEs, // Use namespace instead of 'translation'
      },
    },
  });

export default i18n;
