import type { Meta, StoryObj } from '@storybook/react-vite';

import { docImport } from 'src/utils/storybook';

import { CopyButton } from './CopyButton';

const meta: Meta = {
  title: 'Components/CopyButton',
  component: CopyButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: docImport('components', 'CopyButton'),
      },
    },
  },
  tags: ['autodocs'],
  args: { text: 'Copy' },
} satisfies Meta<typeof CopyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDefaultLabel: Story = {
  args: {
    text: 'I am text that will be copied',
  },
};

export const WithCustomLabel: Story = {
  args: {
    text: 'I am text that will be copied',
    label: 'Click Here To Copy',
  },
};
