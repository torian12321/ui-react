import type { FormSchema } from '../../FormRenderer.types';

type FieldNames =
  | 'toggle_options'
  | 'rb_with_choices'
  | 'checkbox_with_choices'
  | 'dropdown_with_choices'
  | 'buy_lottery'
  | 'moderation_message';

const choices = [
  { value: 1, label: 'Option 1' },
  { value: 2, label: 'Option 2' },
  { value: 3, label: 'Option 3' },
  { value: 4, label: 'Option 4' },
];

export const formExcludeChoices: FormSchema<FieldNames> = {
  fields: [
    {
      type: 'boolean',
      name: 'toggle_options',
      label: 'Reduce options',
    },
    {
      type: 'radio_button',
      name: 'rb_with_choices',
      label: 'Options',
      infoMessage: 'Toggle option 2 and 3',
      properties: {
        choices,
      },
    },
    {
      type: 'options_list',
      name: 'checkbox_with_choices',
      label: 'Options',
      infoMessage: 'Toggle option 4',
      properties: {
        choices,
      },
    },
    {
      type: 'dropdown',
      name: 'dropdown_with_choices',
      label: 'Options',
      infoMessage: 'Toggle option 1',
      properties: {
        choices,
      },
    },
  ],
  logic: [
    {
      condition: {
        type: 'equal',
        ref: 'toggle_options',
        value: true,
      },
      actions: [
        {
          ref: 'dropdown_with_choices',
          action: 'exclude_choices',
          exclude: [1],
        },
        {
          ref: 'checkbox_with_choices',
          action: 'exclude_choices',
          exclude: [4],
        },
        {
          ref: 'rb_with_choices',
          action: 'exclude_choices',
          exclude: [2, 3],
        },
      ],
    },
  ],
};
