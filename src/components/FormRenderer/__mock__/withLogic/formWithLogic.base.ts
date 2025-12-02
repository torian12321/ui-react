import type { FormSchema } from '../../FormRenderer.types';

type FieldNames =
  | 'name'
  | 'surname'
  | 'age'
  | 'buy_lottery'
  | 'moderation_message';

export const formWithLogic: FormSchema<FieldNames> = {
  fields: [
    {
      type: 'text',
      name: 'name',
      label: 'name',
    },
    {
      type: 'long_text',
      name: 'surname',
      label: 'surname',
    },
    {
      type: 'number',
      name: 'age',
      label: 'age',
      infoMessage:
        'For the avoidance of doubt, the restriction covers those who are, or who seem to be, under the age of 25',
    },
    {
      type: 'boolean',
      name: 'buy_lottery',
      label: 'Do you want to buy Lottery?',
    },
    {
      type: 'info_message',
      name: 'moderation_message',
      label: 'Warning',
      placeholder: 'Play in moderation and responsibly',
      properties: {
        severity: 'warning',
      },
    },
  ],
  logic: [
    {
      condition: {
        type: 'equal',
        ref: 'buy_lottery',
        value: true,
      },
      actions: [
        {
          ref: 'age',
          action: 'make_mandatory',
        },
        {
          ref: 'moderation_message',
          action: 'show',
        },
      ],
    },
  ],
};
