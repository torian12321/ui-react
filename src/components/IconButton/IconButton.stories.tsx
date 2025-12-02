import EditIcon from '@mui/icons-material/Edit';
import MuiSettingsIcon from '@mui/icons-material/Settings';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { IconButton } from './IconButton';
import type { IconButtonProps } from './IconButton.types';

const meta: Meta<IconButtonProps> = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    icon: EditIcon,
    label: 'Edit',
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const WithCustomIcon: Story = {
  args: {
    label: 'Settings',
    icon: MuiSettingsIcon,
  },
};

export const WithCustomStyles: Story = {
  args: {
    sx: {
      color: '#443ce2',
      background: '#cce1f4',
    },
  },
};
