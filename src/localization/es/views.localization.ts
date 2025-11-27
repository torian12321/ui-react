import locViews from 'src/localization/en/views.localization';
import type { DeepPartial } from 'src/types/utils';

export default {
  login: {
    title: 'Iniciar sesión en tu cuenta',
    btnText: 'Login',
  },
} satisfies DeepPartial<typeof locViews>;
