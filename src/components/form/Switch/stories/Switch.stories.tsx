import type { Meta, StoryObj } from '@storybook/react-vite';

import { docImport } from 'src/utils/storybook';

import { Switch } from '../Switch';
import type { SwitchProps } from '../Switch.types';
import { StoryDecorator } from './StoryDecorator';

const meta: Meta<SwitchProps> = {
  title: 'Components/form/Switch',
  component: Switch,
  decorators: [StoryDecorator],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: docImport('components', 'Switch, useSwitch'),
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithLabel: Story = {
  args: {
    label: 'With Label',
  },
};
export const WithSliderStyles: Story = {
  args: {
    sxToggle: {
      /** Font size controls component size */
      fontSize: '60px',
      background: 'orange',
    },
  },
};
