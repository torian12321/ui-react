import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { docImport } from 'src/utils/storybook';

import { Button } from './Button';
import { BUTTON_SIZES } from './Button.types';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: docImport('components', 'Button'),
      },
    },
  },
  tags: ['autodocs'],
  args: { children: 'Button', onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Primary: Story = {
  args: {
    primary: true,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const OutlineStyle: Story = {
  render: ({ outline = true, ...rest }) => (
    <Button.Group>
      <Button outline={outline} {...rest}>
        Default
      </Button>
      <Button primary {...rest}>
        Primary
      </Button>
    </Button.Group>
  ),
};

export const Sizes: StoryFn<Story> = ({ ...args }) => (
  <Button.Group>
    {BUTTON_SIZES.map(btnSize => (
      <Button key={btnSize} {...args} size={btnSize}>
        {btnSize}
      </Button>
    ))}
  </Button.Group>
);
