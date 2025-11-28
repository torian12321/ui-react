import locComponents from 'src/localization/en/components.localization';
import type { DeepPartial } from 'src/types/utils';

export default {
  copyButton: {
    defaultLabel: 'Copiar',
    successMessage: 'Texto copiado al portapapeles!',
  },
  modal: {
    footer: {
      reviewForm: 'Por favor revisa los errores *',
    },
  },
  textAreaSearchable: {
    input: {
      placeholder: 'Search...',
      search: 'Search',
      prev: 'Previous',
      next: 'Next',
      clear: 'Clear',
    },
  },
} satisfies DeepPartial<typeof locComponents>;
