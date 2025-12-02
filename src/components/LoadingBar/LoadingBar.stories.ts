import type { Meta, StoryObj } from '@storybook/react-vite';

import { docImport } from 'src/utils/storybook';

import { LoadingBar } from './LoadingBar';
import type { LoadingBarProps } from './LoadingBar.types';

const meta: Meta<LoadingBarProps> = {
  title: 'Components/LoadingBar',
  component: LoadingBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: docImport('components', 'LoadingBar'),
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
