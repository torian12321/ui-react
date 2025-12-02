import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { docImport } from 'src/utils/storybook';

import { Login } from './Login';
import type { LoginProps } from './Login.types';

const meta: Meta<LoginProps> = {
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
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
