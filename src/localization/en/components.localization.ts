export default {
  copyButton: {
    defaultLabel: 'Copy',
    defaultTooltip: 'Copy to clipboard',
    successMessage: 'Text copied to clipboard!',
  },
  modal: {
    footer: {
      reviewForm: 'Please review the errors *',
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
      invalidDate: 'Invalid date',
      isRequired: '{{label}} is required',
    },
  },
  iconButtonGroup: {
    moreOptions: 'More options',
  },
  loadingBar: {
    defaultLabel: 'Loading...',
  },
  buttonCreateFilter: {
    button: 'Create new filter',
    fieldLabel: 'Filter name',
    infoMessages: {
      invalidNameLengtMax: 'Filter name must be less than {{max}} characters',
    },
  },
  buttonCustomizations: {
    selectorLabel: 'Custom Views',
    addLabel: 'Add Custom View',
    menuItemButton: {
      delete: 'Delete',
      favorite: 'Favorite',
      setAsFavorite: 'Set as Favorite',
    },
    dialogCreate: {
      title: 'Add Custom View',
      fieldLabel: 'View name',
      placeholder: 'Enter view name',
      tip: 'Adding a new view will save both the selected columns and filters',
      buttonSave: 'Save custom view',
      errorMessages: {
        tooShort:
          'The name is too short. It must be at least {{min}} characters.',
        tooLong:
          'The name is too long. It must be less than {{max}} characters.',
        alreadyInUse: 'The name is already in use.',
      },
    },
  },
  transferList: {
    label: {
      available: 'Available {{label}}',
      selected: 'Selected {{label}}',
    },
    input: {
      placeholder: 'Filter...',
    },
    footer: {
      totalElements: '{{count}} elements',
      filteredElements: '{{filtered}} of {{count}}',
    },
  },
};
