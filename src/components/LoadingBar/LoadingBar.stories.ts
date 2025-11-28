import type { Meta, StoryObj } from '@storybook/react-vite';

import { docImport } from 'src/utils/storybook';

import { LoadingBar } from './LoadingBar';

const meta = {
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
} satisfies Meta<typeof LoadingBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
