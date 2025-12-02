import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { docImport } from 'src/utils/storybook';

import { Chip } from './Chip';
import type { ChipProps } from './Chip.types';

const meta: Meta<ChipProps> = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: docImport('components', 'Chip'),
      },
    },
  },
  tags: ['autodocs'],
  args: { label: 'Chip label' },
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    color: {
      control: { type: 'color' },
    },
    bgColor: {
      control: { type: 'color' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Deletelable: Story = {
  args: {
    label: 'with onDelete option',
    onDelete: fn(),
  },
};

export const WithBooleanValues: StoryFn<Story> = () => (
  <Chip.List>
    <Chip label />
    <Chip label={false} />
  </Chip.List>
);

export const ChipsList: StoryFn<Story> = () => (
  <Chip.List>
    <Chip label='List' />
    <Chip label='of' />
    <Chip label='multiple' onDelete={fn} />
    <Chip label='Chips' color='#FB8C00' />
    <Chip label='Chips' color='#000' />
  </Chip.List>
);
