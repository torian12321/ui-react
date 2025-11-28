import type { Meta, StoryObj } from '@storybook/react-vite';

import { CompanyLogo } from './CompanyLogo';

const meta: Meta = {
  title: 'Components/CompanyLogo',
  component: CompanyLogo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: { size: 'medium' },
} satisfies Meta<typeof CompanyLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
