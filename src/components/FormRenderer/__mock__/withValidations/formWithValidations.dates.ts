import type { FormSchema } from '../../FormRenderer.types';

export const formWithDateValidations: FormSchema = {
  fields: [
    {
      type: 'date',
      name: 'invalid_date',
      label: 'Date field with an invalid date set',
      defaultValue: 'incorrectValueNonDateFormat',
    },
    {
      type: 'info_message',
      name: 'info',
      label: 'use `max_date` and `max_date` validations to set date limits',
    },
    {
      type: 'date',
      name: 'min_date',
      label: 'Min date',
      defaultValue: '2000-01-01',
      validations: {
        min_date: '2020-01-01',
      },
    },
    {
      type: 'date',
      name: 'max_date',
      label: 'Max date',
      defaultValue: '2050-01-01',
      validations: {
        max_date: '2020-01-01',
      },
    },
    {
      type: 'date',
      name: 'min_date_max_date',
      label: 'Combine min and max dates (from 2000 to 2050)',
      defaultValue: '2020-01-01',
      validations: {
        min_date: '2000-01-01',
        max_date: '2050-01-01',
      },
    },
    {
      type: 'info_message',
      name: 'info_today',
      label:
        '`today` can be used as a value on `defaultValue`, `min_date` and `max_date`',
    },
    {
      type: 'date',
      name: 'min_date_today',
      label: 'Min date is today',
      defaultValue: '2000-01-01',
      validations: {
        min_date: 'today',
      },
    },
    {
      type: 'date',
      name: 'max_date_today',
      label: 'Max date is today',
      defaultValue: '2050-01-01',
      validations: {
        max_date: 'today',
      },
    },
    {
      type: 'date',
      name: 'min_date_max_date_today',
      label: 'Combine min and max dates (from 2000 to 2050)',
      defaultValue: 'today',
      validations: {
        min_date: '2000-01-01',
        max_date: '2050-01-01',
      },
    },
  ],
};
