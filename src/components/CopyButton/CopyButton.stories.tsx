import type { Meta, StoryObj } from '@storybook/react-vite';

import { docImport } from 'src/utils/storybook';

import { CopyButton } from './CopyButton';
import type { CopyButtonProps } from './CopyButton.types';

const meta: Meta<CopyButtonProps> = {
  title: 'Components/CopyButton',
  component: CopyButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: docImport('components', 'CopyButton'),
      },
    },
  },
  tags: ['autodocs'],
  args: { text: 'I am demo text to be copied' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
