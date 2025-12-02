import type { Meta, StoryObj } from '@storybook/react-vite';

import { docImport, statusBadge } from 'src/utils/storybook';

import { Breadcrumbs } from './Breadcrumbs';
import type { BreadcrumbsProps } from './Breadcrumbs.types';

const meta: Meta<BreadcrumbsProps> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  args: { steps: ['Dashboard', 'Section 1', 'Subsection 01'] },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          statusBadge('deprecated') + docImport('components', 'Breadcrumbs'),
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {};
