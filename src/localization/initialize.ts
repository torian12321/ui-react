import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import { DEFAULT_LANGUAGE, I18N_NAMESPACE } from 'src/constants';

import localizationEn from './en/localization.en';
import localizationEs from './es/localization.es';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: DEFAULT_LANGUAGE,
    lng: DEFAULT_LANGUAGE, // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
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
