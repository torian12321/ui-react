import CopyIcon from '@mui/icons-material/ContentCopy';
import CutIcon from '@mui/icons-material/ContentCut';
import PasteIcon from '@mui/icons-material/ContentPaste';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import type { IconButtonProps } from 'src/components';
import { docImport } from 'src/utils/storybook';

import { IconButtonGroup } from './IconButtonGroup';

const BASE_ACTIONS: IconButtonProps[] = [
  {
    icon: EditIcon,
    label: 'Edit',
    onClick: fn(),
  },
  {
    icon: DeleteIcon,
    label: 'Delete',
    onClick: fn(),
  },
];

const meta: Meta = {
  title: 'Components/IconButtonGroup',
  component: IconButtonGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: docImport('components', 'IconButtonGroup'),
      },
    },
  },
  args: {
    actions: BASE_ACTIONS,
  },
} satisfies Meta<typeof IconButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithAllActionsDisabled: Story = {
  args: {
    disabled: true,
    actions: [
      ...BASE_ACTIONS,
      {
        icon: DeleteIcon,
        label: 'Update',
        onClick: fn(),
      },
    ],
  },
};

export const WithOneActionDisabled: Story = {
  args: {
    actions: [
      ...BASE_ACTIONS,
      {
        icon: DeleteIcon,
        label: 'Update (disabled)',
        disabled: true,
        onClick: fn(),
      },
    ],
  },
};

export const WithOneActionLoading: Story = {
  args: {
    actions: [
      ...BASE_ACTIONS,
      {
        icon: DeleteIcon,
        label: 'Update (loading)',
        isLoading: true,
        onClick: fn(),
      },
    ],
  },
};

export const WithMoreOptions: Story = {
  args: {
    actions: [
      ...BASE_ACTIONS,
      {
        icon: CutIcon,
        label: 'Cut',
        onClick: fn(),
      },
      {
        icon: CopyIcon,
        label: 'Copy',
        onClick: fn(),
      },

      {
        icon: PasteIcon,
        label: 'Paste',
        onClick: fn(),
      },
      {
        icon: DeleteIcon,
        label: 'Update',
        onClick: fn(),
      },
    ],
  },
};
