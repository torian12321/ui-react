import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { docImport } from 'src/utils/storybook';

import { SearchBar } from '../SearchBar';
import type { SearchBarProps } from '../SearchBar.types';
import { StoryDecorator } from './StoryDecorator';

const meta: Meta<SearchBarProps> = {
  title: 'Components/SearchBar',
  component: SearchBar,
  decorators: [StoryDecorator],
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: docImport('components', 'SearchBar'),
      },
    },
  },
  args: {
    value: '',
    onSearch: fn(),
    onChange: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Refine Request',
  },
};
export const WithSync: Story = {
  args: {
    onSync: fn(),
  },
};
