import 'react-i18next';

import type { Localization } from './localization';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'torian-ui'; // Match the namespace constant
    resources: {
      'torian-ui': Localization;
    };
  }
}
