import type { FormSchema } from '../FormRenderer.types';

export const formExampleWorkflowAttachment: FormSchema = {
  fields: [
    {
      type: 'text',
      name: 'note',
      label: 'Add Note',
      placeholder: 'Add Note...',
    },
    {
      type: 'file_upload',
      name: 'attachment',
      validations: {
        required: true,
      },
    },
  ],
};
