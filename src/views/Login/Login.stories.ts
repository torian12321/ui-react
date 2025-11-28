import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Login } from './Login';

const meta: Meta = {
  title: 'Views/Login',
  component: Login,
  parameters: {
    layout: 'fullscreen',
  },
  args: { appName: 'RWS - Propylon', btnOnClick: fn() },
} satisfies Meta<typeof Login>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
