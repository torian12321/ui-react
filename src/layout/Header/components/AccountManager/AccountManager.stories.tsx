import MuiProfileIcon from '@mui/icons-material/PermIdentity';
import MuiSettingsIcon from '@mui/icons-material/Settings';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { AccountManager } from './AccountManager';

const meta: Meta = {
  title: 'Layout/Header/Components/AccountManager',
  component: AccountManager,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: { userName: 'John Doe', onLogout: fn() },
} satisfies Meta<typeof AccountManager>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithActions: Story = {
  args: {
    actions: [
      { label: 'Settings', icon: MuiSettingsIcon, onClick: fn() },
      { label: 'Sign in with a different account', onClick: fn() },
    ],
  },
};

export const WithGroupedActions: Story = {
  args: {
    actions: [
      {
        label: 'Your Profile',
        group: 'userDetails',
        icon: MuiProfileIcon,
        onClick: fn(),
      },
      {
        label: 'Settings',
        group: 'userDetails',
        icon: MuiSettingsIcon,
        onClick: fn(),
      },
      { label: 'Sign in with a different account', onClick: fn() },
    ],
  },
};
