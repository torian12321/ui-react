import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { docImport } from 'src/utils/storybook';

import { ThemeSelector } from './ThemeSelector';
import type { ThemeSelectorProps } from './ThemeSelector.types';

const meta: Meta<ThemeSelectorProps> = {
  title: 'Layout/Header/Components/ThemeSelector',
  component: ThemeSelector,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: docImport('layout', 'ThemeSelector'),
      },
    },
  },
  args: { show: true, onChange: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithCustomOptions: Story = {
  args: {
    options: ['light', 'dark', 'blue', { value: 'propylon', label: 'Custom' }],
  },
};
