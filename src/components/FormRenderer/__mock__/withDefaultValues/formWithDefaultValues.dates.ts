import type { FormSchema } from '../../FormRenderer.types';

export const formWithDefaultValuesDates: FormSchema = {
  fields: [
    {
      type: 'date',
      name: 'date',
      label: 'unset (default)',
    },
    {
      type: 'date',
      name: 'date_custom',
      label: 'Custom value',
      defaultValue: new Date(2030, 5, 24),
    },
    {
      type: 'date',
      name: 'date_today',
      label: 'Today',
      defaultValue: 'today',
    },
  ],
};
