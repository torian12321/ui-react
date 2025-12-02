import { RB_UNSELECTED } from '../../constants';
import type { FormSchema } from '../../FormRenderer.types';
import { mockOptions } from '../mockFormUtils';

export const formWithDefaultValuesRadioButtons: FormSchema = {
  fields: [
    {
      type: 'radio_button',
      name: 'rb',
      label: 'unset',
      infoMessage: 'Default to the first item by default.',
      properties: {
        choices: mockOptions,
      },
    },
    {
      type: 'radio_button',
      name: 'rb_custom',
      label: 'Custom value',
      defaultValue: mockOptions[2].value,
      properties: {
        choices: mockOptions,
      },
    },
    {
      type: 'radio_button',
      name: 'rb_unselected',
      label: 'Unselected',
      defaultValue: RB_UNSELECTED,
      infoMessage:
        'Radio button will not have selected values initally. The initial value will be null',
      properties: {
        choices: mockOptions,
      },
    },
  ],
};
