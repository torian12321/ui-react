import locLayout from 'src/localization/en/layout.localization';
import type { DeepPartial } from 'src/types/utils';

export default {
  accountManager: {
    btnTitle: 'Gestor de cuentas',
    logout: 'Cerrar sesión',
  },
} satisfies DeepPartial<typeof locLayout>;
