import type { Meta, StoryObj } from '@storybook/react-vite';

import { docImport } from 'src/utils/storybook';

import { mockHtml, mockText } from './__mock__';
import { DocumentDisplay } from './DocumentDisplay';

const meta: Meta = {
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
} satisfies Meta<typeof DocumentDisplay>;

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
