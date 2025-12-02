import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { docImport } from 'src/utils/storybook';

import { Header } from './Header';
import { HeaderProps } from './Header.types';

const meta: Meta<HeaderProps> = {
  title: 'Layout/Header',
  component: Header,
  tags: ['autodocs', 'new'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: docImport('layout', 'Header'),
      },
    },
  },
  args: { title: 'RWS - Propylon' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithMenuOpener: Story = {
  args: {
    onClickMenuOpener: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Description for this specific story variant',
      },
    },
  },
};
