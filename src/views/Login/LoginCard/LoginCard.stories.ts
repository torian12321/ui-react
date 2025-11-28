import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { LoginCard } from './LoginCard';

const meta: Meta = {
  title: 'Views/Login/LoginCard',
  component: LoginCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: { btnOnClick: fn() },
} satisfies Meta<typeof LoginCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
