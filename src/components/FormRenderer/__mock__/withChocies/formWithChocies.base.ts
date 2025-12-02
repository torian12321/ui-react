import type { FormSchema } from '../../FormRenderer.types';
import { mockOptions } from '../mockFormUtils';

type FieldNames = 'dropdown_one' | 'dropdown_two' | 'radio_one' | 'radio_two';

type ChoicesRef = 'optionsList';

export const formWithChoices: FormSchema<FieldNames, ChoicesRef> = {
  fields: [
    {
      type: 'dropdown',
      name: 'dropdown_one',
      label: 'Dropdown One',
      properties: {
        choices: mockOptions,
      },
    },
    {
      type: 'dropdown',
      name: 'dropdown_two',
      label: 'Dropdown Two',
      properties: {
        choicesRef: 'optionsList',
      },
    },
    {
      type: 'radio_button',
      name: 'radio_one',
      label: 'Radio One',
      properties: {
        choices: mockOptions,
      },
    },
    {
      type: 'radio_button',
      name: 'radio_two',
      label: 'Radio Two',
      properties: {
        choicesRef: 'optionsList',
      },
    },
  ],
};
