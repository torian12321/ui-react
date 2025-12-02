import type { FormSchema } from '../../FormRenderer.types';

export const formWithCustomMessageValidations: FormSchema = {
  fields: [
    {
      type: 'info_message',
      name: 'info',
      label:
        'When setting a validation, instead of a value we can pass an object with `value` and `message` used for custom error messaging',
    },
    {
      type: 'text',
      name: 'name',
      label: 'name',
      validations: {
        required: {
          value: true,
          message: 'Uuups, you forgot your name',
        },
        min_length: {
          value: 3,
          message: 'Please add a longer name',
        },
        max_length: {
          value: 20,
          message: 'Too many characters',
        },
      },
    },
    {
      type: 'number',
      name: 'age',
      label: 'age',
      validations: {
        required: {
          value: true,
          message: 'Plese share your age with us',
        },
        min: {
          value: 18,
          message: 'Sorry, you need to be an adult to participate',
        },
        max: {
          value: 99,
          message: 'You are too old for our system :(',
        },
      },
    },
  ],
};
