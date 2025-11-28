import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { docImport } from 'src/utils/storybook';

import { Login } from './Login';

const meta: Meta = {
  title: 'Views/Login',
  component: Login,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: docImport('views', 'Login'),
      },
    },
  },
  args: { appName: 'RWS - Propylon', btnOnClick: fn() },
} satisfies Meta<typeof Login>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
