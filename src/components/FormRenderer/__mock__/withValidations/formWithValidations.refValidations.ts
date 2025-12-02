import type { FormSchema } from '../../FormRenderer.types';

export const formWithDateValidations: FormSchema = {
  fields: [
    {
      type: 'date',
      name: 'ini_date', // <-- refered field
      label: 'Ini Date',
      defaultValue: '2030-02-01',
      validations: {
        required: true,
        min_date: 'today',
      },
    },
    {
      type: 'date',
      name: 'end_date',
      label: 'Deadline',
      defaultValue: '2020-01-01',
      infoMessage:
        'The `name` of a different field can be used on dateTime validations',
      validations: {
        min_date: {
          ref: 'ini_date', // <-- reference to a fieldName
          message: '`Deadline` must be later than `Ini date`',
        },
      },
    },
  ],
};

export const formWithNumericalValidations: FormSchema = {
  fields: [
    {
      type: 'number',
      name: 'min', // <-- refered field
      label: 'Min value',
      defaultValue: 5,
    },
    {
      type: 'number',
      name: 'max', // <-- refered field
      label: 'Max value',
      defaultValue: 15,
    },
    {
      type: 'number',
      name: 'minmax',
      label: 'Min and Max value combined',
      defaultValue: 100,
      validations: {
        min: {
          ref: 'min', // <-- reference to a fieldName
        },
        max: {
          ref: 'max', // <-- reference to a fieldName
        },
      },
    },
  ],
};
