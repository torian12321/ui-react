import type { FormSchema } from '../../FormRenderer.types';

type FieldNames =
  | 'name'
  | 'name_message'
  | 'phone'
  | 'phone_message'
  | 'language'
  | 'language_message';

export const formWithLogicContains: FormSchema<FieldNames> = {
  fields: [
    {
      type: 'text',
      name: 'name',
      label: 'Name',
    },
    {
      type: 'info_message',
      name: 'name_message',
      label: 'Name logic',
      placeholder:
        'Type a text containing `an` in Name field to hide this message. ("Anastasia" | "Diana" | "Joan")',
    },
    {
      type: 'number',
      name: 'phone',
      label: 'Phone',
    },
    {
      type: 'info_message',
      name: 'phone_message',
      label: 'Phone logic',
      placeholder:
        'Type a number containing `456` in Phone field to hide this message.',
    },
    {
      type: 'options_list',
      name: 'language',
      label: 'Language',
      properties: {
        choices: [
          { value: 'en', label: 'English' },
          { value: 'fr', label: 'French' },
          { value: 'de', label: 'German' },
        ],
      },
    },
    {
      type: 'info_message',
      name: 'language_message',
      label: 'Language logic',
      placeholder:
        'Do a selection containgin `French` in Language field to hide this message.',
    },
  ],
  logic: [
    {
      condition: {
        type: 'contains',
        ref: 'name',
        value: 'an',
      },
      actions: [
        {
          ref: 'name_message',
          action: 'hide',
        },
      ],
    },
    {
      condition: {
        type: 'contains',
        ref: 'phone',
        value: '456',
      },
      actions: [
        {
          ref: 'phone_message',
          action: 'hide',
        },
      ],
    },
    {
      condition: {
        type: 'contains',
        ref: 'language',
        value: 'fr',
      },
      actions: [
        {
          ref: 'language_message',
          action: 'hide',
        },
      ],
    },
  ],
};
