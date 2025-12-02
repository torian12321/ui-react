import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { docImport } from 'src/utils/storybook';

import { choices, choicesLongList } from '../__mocks';
import { TransferList } from '../TransferList';
import type { TransferListProps } from '../TransferList.types';
import { StoryDecorator } from './StoryDecorator';

const meta: Meta<TransferListProps> = {
  title: 'Components/form/TransferList',
  component: TransferList,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: docImport('components', 'TransferList'),
      },
    },
  },
  tags: ['autodocs'],
  args: { choices, label: 'Countries', onChange: fn() },
  decorators: [StoryDecorator],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDefaultValue: Story = {
  args: {
    defaultValue: [choices[0].value, choices[3].value],
  },
};

export const LargeList: Story = {
  args: {
    label: '500 items',
    choices: choicesLongList,
  },
};

export const NoSearchNorSort: Story = {
  args: {
    searchable: false,
    sortable: false,
  },
};
