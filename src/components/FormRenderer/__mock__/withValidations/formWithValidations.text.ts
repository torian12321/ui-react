import type { FormSchema } from '../../FormRenderer.types';

export const formWithTextValidations: FormSchema = {
  fields: [
    {
      type: 'info_message',
      name: 'info',
      label: 'Use `min_length` and `max_length` validations to set text limits',
    },
    {
      type: 'text',
      name: 'min_length',
      label: 'min length',
      validations: {
        min_length: 10,
      },
    },
    {
      type: 'text',
      name: 'max_length',
      label: 'max length',
      defaultValue:
        'The given field will fail if more than 10 characters are set',
      validations: {
        max_length: 10,
      },
    },
    {
      type: 'long_text',
      name: 'long_min_length',
      label: 'min length',
      validations: {
        min_length: 10,
      },
    },
    {
      type: 'long_text',
      name: 'long_max_length',
      label: 'max length',
      defaultValue:
        'The given field will fail if more than 10 characters are set',
      validations: {
        max_length: 10,
      },
    },
  ],
};
