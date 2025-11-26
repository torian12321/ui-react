import type { Meta, StoryObj } from '@storybook/react-vite';

import { SplashScreen } from './SplashScreen';

const meta = {
  title: 'Views/SplashScreen',
  component: SplashScreen,
  tags: ['autodocs'],
} satisfies Meta<typeof SplashScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
