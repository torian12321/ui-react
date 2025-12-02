import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { docImport, statusBadge } from 'src/utils/storybook';

import { ButtonCreateFilter } from './ButtonCreateFilter';
import type { ButtonCreateFilterProps } from './ButtonCreateFilter.types';

const meta: Meta<ButtonCreateFilterProps> = {
  title: 'Components/ButtonCreateFilter',
  component: ButtonCreateFilter,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          statusBadge('deprecated') +
          docImport('components', 'ButtonCreateFilter'),
      },
    },
  },
  args: { onSubmit: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithErrors: Story = {
  args: {
    errors: ['Error Message 1', 'Error Message 2'],
  },
};
