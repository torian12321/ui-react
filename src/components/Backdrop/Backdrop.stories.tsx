import type { Meta, StoryObj } from '@storybook/react-vite';

import { docImport } from 'src/utils/storybook';

import { Backdrop } from './Backdrop';

const meta = {
  title: 'Components/Backdrop',
  component: Backdrop,
  tags: ['autodocs'],
  args: { show: true },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: docImport('components', 'Backdrop'),
      },
    },
  },
} satisfies Meta<typeof Backdrop>;

export default meta;
type Story = StoryObj<typeof Backdrop>;

export const Default: Story = {};
export const WithCustomMessage: Story = {
  args: {
    message: 'Loading, please wait...',
  },
};
