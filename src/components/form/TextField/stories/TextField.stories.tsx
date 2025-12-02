import type { Meta, StoryObj } from '@storybook/react-vite';

import { docImport } from 'src/utils/storybook';

import { TextField } from '../TextField';
import type { TextFieldProps } from '../TextField.types';
import { StoryDecorator } from './StoryDecorator';

const meta: Meta<TextFieldProps> = {
  title: 'Components/form/TextField',
  component: TextField,
  decorators: [StoryDecorator],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: docImport('components', 'TextField'),
      },
    },
  },
  tags: ['autodocs'],
  args: {
    name: 'text-field',
    value: '',
    placeholder: 'Text field',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
