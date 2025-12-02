import type { FormSchema } from '../FormRenderer.types';
import { mockOptions } from './mockFormUtils';

export const formExampleCreateRequest: FormSchema = {
  fields: [
    {
      type: 'dropdown',
      name: 'session_year',
      label: 'Session Year',
      validations: {
        required: true,
      },
      properties: {
        choices: mockOptions,
      },
    },
    {
      type: 'date_time',
      name: 'date',
      label: 'Request Date',
      validations: {
        required: true,
      },
    },
    {
      type: 'boolean',
      name: 'reintro',
      label: 'Reintro',
    },
    {
      type: 'dropdown',
      name: 'session',
      label: 'Session',
      properties: {
        choices: mockOptions,
      },
    },
    {
      type: 'dropdown',
      name: 'bill_number',
      label: 'Bill Number',
      validations: {
        required: true,
      },
      properties: {
        choices: mockOptions,
      },
    },
    {
      type: 'radio_button',
      name: 'chamber',
      label: 'Chamber',
      properties: {
        choices: [
          { value: 'house', label: 'House' },
          { value: 'seante', label: 'Senate' },
          { value: 'both', label: 'Both' },
        ],
      },
    },
    {
      type: 'dropdown',
      name: 'request_type',
      label: 'Request Type',
      validations: {
        required: true,
      },
      properties: {
        choices: mockOptions,
      },
    },
    {
      type: 'dropdown',
      name: 'drafter',
      label: 'Drafter',
      validations: {
        required: true,
      },
      properties: {
        choices: mockOptions,
      },
    },
    {
      type: 'dropdown',
      name: 'secretary',
      label: 'Secretary',
      properties: {
        choices: mockOptions,
      },
    },
    {
      type: 'dropdown',
      name: 'requester',
      label: 'Requester',
      validations: {
        required: true,
      },
      properties: {
        choices: mockOptions,
      },
    },
    {
      type: 'dropdown',
      name: 'sponsor',
      label: 'Sponsor',
      properties: {
        choices: mockOptions,
      },
    },
    {
      type: 'dropdown',
      name: 'subject_tag',
      label: 'Subject Tag',
      properties: {
        choices: mockOptions,
      },
    },
    {
      type: 'boolean',
      name: 'by_request',
      label: 'By Request',
    },
    {
      type: 'text',
      name: 'subject',
      label: 'Subject',
      placeholder: 'Enter Subject',
      validations: {
        required: true,
      },
    },
    {
      type: 'long_text',
      name: 'notes',
      label: 'Notes',
      placeholder: 'Enter Note',
    },
    {
      type: 'boolean',
      name: 'active',
      label: 'active',
    },
    {
      type: 'boolean',
      name: 'create_another',
      label: 'Create Another',
    },
    {
      type: 'boolean',
      name: 'bulk_create',
      label: 'Bulk Create',
    },
    {
      type: 'number',
      name: 'bulk_create_number',
      defaultValue: 0,
    },
  ],
  logic: [
    {
      condition: {
        type: 'equal',
        ref: 'reintro',
        value: true,
      },
      actions: [
        {
          ref: ['session', 'bill_number'],
          action: 'show',
        },
      ],
    },
  ],
};
