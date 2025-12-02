import type { FormSchema } from '../FormRenderer.types';
import { mockOptions } from './mockFormUtils';

export const formExampleWorkflow: FormSchema = {
  fields: [
    {
      type: 'dropdown',
      name: 'assignee',
      placeholder: '--Assign--',
      properties: {
        choices: mockOptions,
      },
    },
    {
      type: 'text',
      name: 'note',
      placeholder: 'Note to assignee',
    },
    {
      type: 'file_upload',
      name: 'attachment',
      placeholder: 'Drop a file or click to upload',
    },
  ],
};
