import type { Meta, StoryObj } from '@storybook/react-vite';

import { docImport } from 'src/utils/storybook';

import { CompanyLogo } from './CompanyLogo';
import type { CompanyLogoProps } from './CompanyLogo.types';

const meta: Meta<CompanyLogoProps> = {
  title: 'Components/CompanyLogo',
  component: CompanyLogo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: docImport('components', 'CompanyLogo'),
      },
    },
  },
  args: { size: 'medium' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
