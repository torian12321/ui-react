import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { ThemeSelector } from './ThemeSelector';

const meta: Meta = {
  title: 'Layout/Header/Components/ThemeSelector',
  component: ThemeSelector,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: { show: true, onChange: fn() },
} satisfies Meta<typeof ThemeSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithCustomOptions: Story = {
  args: {
    options: ['light', 'dark', 'blue', { value: 'propylon', label: 'Custom' }],
  },
};
