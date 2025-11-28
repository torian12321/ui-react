import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { LanguageSelector } from './LanguageSelector';

const meta: Meta = {
  title: 'Layout/Header/Components/LanguageSelector',
  component: LanguageSelector,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: { show: true, onChange: fn() },
} satisfies Meta<typeof LanguageSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithCustomOptions: Story = {
  args: {
    options: ['en', { value: 'es', label: 'Spanish custom label' }],
  },
};
