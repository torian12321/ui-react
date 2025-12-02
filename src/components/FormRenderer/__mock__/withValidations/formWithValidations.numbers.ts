import type { FormSchema } from '../../FormRenderer.types';

export const formWithNumericalValidations: FormSchema = {
  fields: [
    {
      type: 'number',
      name: 'min',
      label: 'Min value (10)',
      defaultValue: 5,
      validations: {
        min: 10,
      },
    },
    {
      type: 'number',
      name: 'max',
      label: 'Max value (10)',
      defaultValue: 15,
      validations: {
        max: 10,
      },
    },
    {
      type: 'number',
      name: 'minmax',
      label: 'Min and Max value combined (10 to 20)',
      defaultValue: 100,
      validations: {
        min: {
          value: 10,
        },
        max: 20,
      },
    },
  ],
};
