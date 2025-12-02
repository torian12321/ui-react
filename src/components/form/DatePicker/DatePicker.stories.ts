import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { docImport } from 'src/utils/storybook';

import { DatePicker } from './DatePicker';
import type { DatePickerProps } from './DatePicker.types';

const meta: Meta<DatePickerProps> = {
  title: 'Components/form/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: docImport('components', 'DatePicker'),
      },
    },
  },
  args: { onChange: fn(), label: 'Date picker' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDefaultValue: Story = {
  args: {
    label: 'Set initial day',
    value: new Date(),
  },
};

export const CustomFormat: Story = {
  args: {
    label: 'Custom date format',
    isDateTimePicker: true,
    dateFormat: 'MM-DD-YYYY',
    dateTimeFormat: 'MM-DD-YYYY hh:mm a',
  },
};

export const TimePicker: Story = {
  args: {
    label: 'Date time picker',
    isDateTimePicker: true,
  },
};

export const Error: Story = {
  args: {
    label: 'Datepicker with error',
    hasError: true,
    isTouched: true,
  },
};
