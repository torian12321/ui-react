import type { Meta, StoryObj } from '@storybook/react-vite';

import { docImport } from 'src/utils/storybook';

import { Footer } from './Footer';

const meta = {
  title: 'Layout/Footer',
  component: Footer,
  tags: ['autodocs'],
  args: { children: 'Footer content' },
  parameters: {
    docs: {
      description: {
        component: docImport('layout', 'Footer'),
      },
    },
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
