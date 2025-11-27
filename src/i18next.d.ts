import 'react-i18next';

import type { Localization, PartialLocalization } from './localization';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'en';
    resources: {
      en: Localization;
      es: PartialLocalization;
      // any other languages you would like to type
    };
  }
}
