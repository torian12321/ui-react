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
  datePicker: {
    errorMessages: {
      invalidDate: 'Fecha inválida',
      isRequired: '{{label}} es requerido',
    },
  },
  iconButtonGroup: {
    moreOptions: 'Más opciones',
  },
  loadingBar: {
    defaultLabel: 'Cargando...',
  },
  buttonCreateFilter: {
    button: 'Crear nuevo filtro',
    fieldLabel: 'Nombre del filtro',
  },
  buttonCustomizations: {
    selectorLabel: 'Vistas personalizadas',
    addLabel: 'Añadir vista personalizada',
    menuItemButton: {
      delete: 'Eliminar',
      favorite: 'Favorito',
      setAsFavorite: 'Establecer como favorito',
    },
  },
  transferList: {
    label: {
      available: 'Disponible {{label}}',
      selected: 'Seleccionado {{label}}',
    },
    input: {
      placeholder: 'Filtrar...',
    },
  },
  formRenderer: {
    errorMessages: {
      makeSelection: 'Por favor selecciona una opción',
      reviewConditions: 'Por favor revisa las condiciones.',
      invalidDate: 'Fecha inválida',
      minDate: 'Por favor selecciona una fecha posterior a {{min}}',
      maxDate: 'Por favor selecciona una fecha anterior a {{max}}',
      minDateToday:
        'Por favor selecciona una fecha posterior a la fecha de hoy',
      maxDateToday: 'Por favor selecciona una fecha anterior a la fecha de hoy',
      minNumber: 'Por favor ingresa un número mayor a {{min}}',
      maxNumber: 'Por favor ingresa un número menor a {{max}}',
      minLength: 'Por favor ingresa al menos {{min}} caracteres',
      maxLength: 'Por favor ingresa menos de {{max}} caracteres',
      minCharacters: 'Mínimo de caracteres: {{min}}',
      maxCharacters: 'Máximo de caracteres: {{max}}',
      required: '{{label}} es requerido',
      selectValid: 'Selecciona una opción válida {{label}}',
      pleaseEnter: 'Por favor ingresa {{label}}',
      selectValidFile: 'Selecciona un archivo válido',
    },
  },
} satisfies DeepPartial<typeof locComponents>;
