import type { Meta, StoryObj } from '@storybook/react-vite';

import { Breadcrumbs } from './Breadcrumbs';

const meta = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  args: { steps: ['Dashboard', 'Section 1', 'Subsection 01'] },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {};
