import type { Meta, StoryObj } from '@storybook/react-vite';

import { LoadingBar } from './LoadingBar';

const meta = {
  title: 'Components/LoadingBar',
  component: LoadingBar,
  tags: ['autodocs'],
} satisfies Meta<typeof LoadingBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
