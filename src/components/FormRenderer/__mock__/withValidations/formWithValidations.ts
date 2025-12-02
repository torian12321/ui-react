import type { FormSchema } from '../../FormRenderer.types';
import { mockOptions } from '../mockFormUtils';

export const formWithRequiredValidations: FormSchema = {
  fields: [
    {
      type: 'info_message',
      name: 'info',
      label: `
        When a field has the 'required' validation we will check if there is a value set to it.\n
        It will also add an asterisk indicator to the field label as an indicator to the user
      `,
    },
    {
      type: 'text',
      name: 'name',
      label: 'name',
      validations: {
        required: true,
      },
    },
    {
      type: 'long_text',
      name: 'surname',
      label: 'surname',
      validations: {
        required: true,
      },
    },
    {
      type: 'number',
      name: 'age',
      label: 'age',
      validations: {
        required: true,
      },
    },
    {
      type: 'dropdown',
      name: 'role',
      label: 'Role',
      infoMessage:
        'Dropdown fiels with required validation does not have the "Clear" option',
      properties: {
        choices: mockOptions,
      },
      validations: {
        required: true,
      },
    },
    {
      type: 'date',
      name: 'date_flight',
      label: 'Entry Day',
      validations: {
        required: true,
      },
    },
    {
      type: 'boolean',
      name: 'tac',
      label: 'I do accept the terms and conditions',
      validations: {
        required: true,
      },
    },
  ],
};
