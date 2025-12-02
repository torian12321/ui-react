import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { docImport } from 'src/utils/storybook';

import { LanguageSelector } from './LanguageSelector';
import type { LanguageSelectorProps } from './LanguageSelector.types';

const meta: Meta<LanguageSelectorProps> = {
  title: 'Layout/Header/Components/LanguageSelector',
  component: LanguageSelector,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: docImport('layout', 'LanguageSelector'),
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
    options: ['en', { value: 'es', label: 'Spanish custom label' }],
  },
};
