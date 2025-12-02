import { useState } from 'react';
import type {
  Decorator,
  Meta,
  StoryContext,
  StoryObj,
} from '@storybook/react-vite';
import { action } from 'storybook/actions';
import { fn } from 'storybook/test';

import { docImport } from 'src/utils/storybook';

import { SearchBar } from './SearchBar';
import type { SearchBarProps } from './SearchBar.types';

const StateDecorator: Decorator<SearchBarProps> = (
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Story,
  context: StoryContext<SearchBarProps>,
) => {
  const [value, setValue] = useState('');

  const handleChange = (newValue: string) => {
    setValue(newValue);
    action('onChange')(newValue);
  };

  return <Story args={{ ...context.args, value, onChange: handleChange }} />;
};

const meta: Meta<SearchBarProps> = {
  title: 'Components/SearchBar',
  component: SearchBar,
  decorators: [StateDecorator],
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
