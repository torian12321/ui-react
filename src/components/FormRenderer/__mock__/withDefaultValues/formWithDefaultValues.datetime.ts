import type { FormSchema } from '../../FormRenderer.types';

export const formWithDefaultValuesDateTime: FormSchema = {
  fields: [
    {
      type: 'date_time',
      name: 'date_time',
      label: 'unset (default)',
    },
    {
      type: 'date_time',
      name: 'date_time_custom',
      label: 'Custom value',
      defaultValue: new Date(2030, 5, 24, 10, 5, 8),
    },
    {
      type: 'date_time',
      name: 'date_time_today',
      label: 'Today',
      defaultValue: 'today',
    },
  ],
};
