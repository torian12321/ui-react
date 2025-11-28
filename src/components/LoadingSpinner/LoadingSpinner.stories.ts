import type { Meta, StoryObj } from '@storybook/react-vite';

import { docImport } from 'src/utils/storybook';

import { LoadingSpinner } from './LoadingSpinner';

const meta = {
  title: 'Components/LoadingSpinner',
  component: LoadingSpinner,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: docImport('components', 'LoadingSpinner'),
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LoadingSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
