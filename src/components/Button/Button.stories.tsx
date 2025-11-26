import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Button } from './Button';
import { BUTTON_SIZES } from './Button.types';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
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

export const OutlineStyle: Story = ({ ...args }) => (
  <Button.Group>
    <Button {...args}>Default</Button>
    <Button primary {...args}>
      Primary
    </Button>
  </Button.Group>
);
OutlineStyle.args = {
  outline: true,
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
