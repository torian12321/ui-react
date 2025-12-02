import type { FormSchema } from '../../FormRenderer.types';
import { mockOptions } from '../mockFormUtils';

export const formWithDefaultValues: FormSchema = {
  fields: [
    {
      type: 'text',
      name: 'name',
      label: 'name',
      defaultValue: 'Peter',
    },
    {
      type: 'long_text',
      name: 'surname',
      label: 'surname',
      defaultValue: 'Parker',
    },
    {
      type: 'number',
      name: 'age',
      label: 'age',
      defaultValue: 22,
    },
    {
      type: 'dropdown',
      name: 'role',
      label: 'Role',
      defaultValue: mockOptions[2].value,
      properties: {
        choices: mockOptions,
      },
    },
    {
      type: 'transfer_list',
      name: 'transfer_list',
      label: 'Transfer List',
      defaultValue: [mockOptions[2].value],
      properties: {
        choices: mockOptions,
      },
    },
  ],
};
