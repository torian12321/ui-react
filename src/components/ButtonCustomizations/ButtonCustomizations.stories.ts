import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { docImport } from 'src/utils/storybook';

import { customOptions, customOptionsLong, defaultOptions } from './_mock';
import { ButtonCustomizations } from './ButtonCustomizations';
import type { ButtonCustomizationsProps } from './ButtonCustomizations.types';

const meta: Meta<ButtonCustomizationsProps> = {
  title: 'Components/ButtonCustomizations',
  component: ButtonCustomizations,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: docImport('components', 'ButtonCustomizations'),
      },
    },
  },
  args: {
    options: defaultOptions,
    onCreate: async () => Promise.resolve(true),
    onDelete: fn(),
    onSelect: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithSelectedValue: Story = {
  args: {
    value: defaultOptions[1].value,
  },
};

export const WithCustomOptions: Story = {
  args: {
    options: defaultOptions.concat(customOptions),
  },
};

export const WithLongLabels: Story = {
  args: {
    options: defaultOptions.concat(customOptionsLong),
  },
};

export const WhitoutOnCreate: Story = {
  args: {
    onCreate: undefined,
  },
};

export const WhitoutOptions: Story = {
  args: {
    options: [],
  },
};

export const WithFavoriteSelection: Story = {
  args: {
    favorite: defaultOptions[0].value,
    onSetFavorite: fn(),
  },
};
