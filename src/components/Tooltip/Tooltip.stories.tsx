import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';

import { Button } from 'src/components';
import { docImport } from 'src/utils/storybook';

import { Tooltip } from './Tooltip';
import type { TooltipProps, TooltipTypes } from './Tooltip.types';

const meta: Meta<TooltipProps> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: docImport('components', 'Tooltip'),
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<Story> = args => (
  <Tooltip
    title='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    {...args}
  >
    <Button>Hover me to show tooltip</Button>
  </Tooltip>
);

export const Default = Template.bind({});

const TOOLTIP_TYPES: TooltipTypes[] = ['default', 'warning', 'error'];
export const Types: StoryFn<Story> = ({ ...args }) => (
  <Button.Group>
    {TOOLTIP_TYPES.map(type => (
      <Tooltip
        key={type}
        title='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        {...args}
        type={type}
      >
        <Button>{type} Tooltip</Button>
      </Tooltip>
    ))}
  </Button.Group>
);
