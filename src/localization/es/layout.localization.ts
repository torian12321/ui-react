import locLayout from 'src/localization/en/layout.localization';
import type { DeepPartial } from 'src/types/utils';

export default {
  accountManager: {
    btnTitle: 'Gestor de cuentas',
    logout: 'Cerrar sesión',
  },
  languageSelector: {
    ariaLabel: 'Selector de idioma',
    options: {
      en: 'Inglés',
      es: 'Español',
    },
  },
  themeSelector: {
    ariaLabel: 'Selector de tema',
    options: {
      light: 'Claro',
      dark: 'Oscuro',
      rws: 'Claro RWS',
      rwsDark: 'Oscuro RWS',
      pink: 'Rosa',
      green: 'Verde',
      blue: 'Azul',
      sc: 'Carolina del Sur',
      propylon: 'Propylon',
      ny: 'Nueva York',
    },
  },
} satisfies DeepPartial<typeof locLayout>;
