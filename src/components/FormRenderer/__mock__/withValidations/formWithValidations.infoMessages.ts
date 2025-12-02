import type { FormSchema } from '../../FormRenderer.types';

export const formWithInfoMessageValidations: FormSchema = {
  fields: [
    {
      type: 'info_message',
      name: 'info',
      label: `Info message with severity 'info' will not trigger any validation`,
    },
    {
      type: 'info_message',
      name: 'info_with_warn',
      label: `
        Warning and Error message will cause the error to be invalid.\n 
        Click Submit to see the errors.
      `,
      properties: {
        severity: 'warning',
      },
    },
    {
      type: 'info_message',
      name: 'info_with_error',
      label: `
          Why to have a field that always triggers an error?\n 
          To 'validate' the form, the message should be hidden based on the conditions set.
      `,
      properties: {
        severity: 'error',
      },
    },
  ],
};
