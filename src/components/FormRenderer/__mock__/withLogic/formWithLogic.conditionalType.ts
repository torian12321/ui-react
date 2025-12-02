import type { FormSchema } from '../../FormRenderer.types';

type FieldNames =
  | 'singature_page'
  | 'enrolled_bill_origin'
  | 'house_received_date';

const choices = [
  { value: 1, label: 'Option 1' },
  { value: 2, label: 'Option 2' },
  { value: 3, label: 'Option 3' },
  { value: 4, label: 'Option 4' },
];

export const formLogicConditionalTypes: FormSchema<FieldNames> = {
  fields: [
    {
      type: 'dropdown',
      name: 'singature_page',
      label: 'Signature page',
      properties: {
        choices: [
          { value: 'other_value_1', label: 'Option 1' },
          { value: 'other_value_2', label: 'Option 2' },
          { value: 'veto_override', label: 'Veto Override' },
          {
            value: 'veto_sustain_failed_opposing',
            label: 'Veto Sustain - Failed Opposing',
          },
          {
            value: 'veto_sustain_failed_origin',
            label: 'Veto Sustain - Failed Origin',
          },
        ],
      },
    },
    {
      type: 'dropdown',
      name: 'enrolled_bill_origin',
      label: 'Enrolled bill',
      properties: {
        choices: [
          { value: 'house', label: 'House' },
          { value: 'senate', label: 'Senate' },
        ],
      },
    },
    {
      type: 'dropdown',
      name: 'house_received_date',
      label: 'House received date',
      validations: {
        required: true,
      },
      properties: {
        choices,
      },
    },
  ],
  logic: [
    {
      condition: {
        type: 'or',
        conditions: [
          {
            type: 'equal',
            ref: 'singature_page',
            value: ['veto_override', 'veto_sustain_failed_opposing'],
          },
          {
            type: 'and',
            conditions: [
              {
                type: 'equal',
                ref: 'singature_page',
                value: 'veto_sustain_failed_origin',
              },
              {
                type: 'equal',
                ref: 'enrolled_bill_origin',
                value: 'house',
              },
            ],
          },
        ],
      },
      actions: [
        {
          ref: 'house_received_date',
          action: 'show',
        },
      ],
    },
  ],
};
