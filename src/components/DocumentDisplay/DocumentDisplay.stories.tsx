import type { Meta, StoryObj } from '@storybook/react-vite';

import { docImport } from 'src/utils/storybook';

import { mockHtml, mockText } from './__mock__';
import { DocumentDisplay } from './DocumentDisplay';
import type { DocumentDisplayProps } from './DocumentDisplay.types';

const meta: Meta<DocumentDisplayProps> = {
  title: 'Components/DocumentDisplay',
  component: DocumentDisplay,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: docImport('components', 'DocumentDisplay'),
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: mockText,
  },
};

export const HtmlContent: Story = {
  args: {
    content: mockHtml,
  },
};
