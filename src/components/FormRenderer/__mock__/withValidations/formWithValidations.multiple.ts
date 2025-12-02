import type { FormSchema } from '../../FormRenderer.types';

export const formWithMultipleValidations: FormSchema = {
  fields: [
    {
      type: 'info_message',
      name: 'info',
      label:
        'If multiple validations are simultaniously failing, all error messages will be displayed on screen.',
    },
    {
      type: 'text',
      name: 'name',
      label: 'name',
      validations: {
        required: true,
        min_length: 3,
        max_length: 20,
      },
    },
    {
      type: 'number',
      name: 'age',
      label: 'age',
      validations: {
        required: true,
        min: 18,
        max: 99,
      },
    },
  ],
};
