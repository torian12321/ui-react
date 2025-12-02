import type { Meta, StoryObj } from '@storybook/react-vite';

import { docImport } from 'src/utils/storybook';

import { LoadingSpinner } from './LoadingSpinner';
import type { LoadingSpinnerProps } from './LoadingSpinner.types';

const meta: Meta<LoadingSpinnerProps> = {
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
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
