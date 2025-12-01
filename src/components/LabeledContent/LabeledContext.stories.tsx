import type { Meta, StoryObj } from '@storybook/react-vite';

import { docImport } from 'src/utils/storybook';

import { LabeledContent } from './LabeledContent';

const meta: Meta = {
  title: 'Components/LabeledContent',
  component: LabeledContent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: docImport('components', 'LabeledContent'),
      },
    },
  },
  tags: ['autodocs'],
  args: { label: 'Description label', children: 'Lorem ipsum dolor sit amet' },
} satisfies Meta<typeof LabeledContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Inlined: Story = {
  args: { inlined: true },
};
