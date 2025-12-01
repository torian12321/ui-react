import type {
  Decorator,
  Meta,
  StoryContext,
  StoryObj,
} from '@storybook/react-vite';
import { action } from 'storybook/actions';

import { docImport } from 'src/utils/storybook';

import { Switch } from './Switch';
import type { SwitchProps } from './Switch.types';
import { useSwitch } from './useSwitch';

const StateDecorator: Decorator<SwitchProps> = (
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Story,
  props: StoryContext<SwitchProps>,
) => {
  const [checked, switchActions] = useSwitch(props?.args?.checked);

  const handleChange = (value: boolean) => {
    switchActions.toggle();
    action('onChange')(value);
  };

  return (
    <Story
      {...props}
      args={{ ...props.args, checked, onChange: handleChange }}
    />
  );
};

const meta: Meta = {
  title: 'Components/form/Switch',
  component: Switch,
  decorators: [StateDecorator],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: docImport('components', 'Switch'),
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<SwitchProps>;

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
    sxSlider: {
      /** Font size controls component size */
      fontSize: '60px',
      background: 'orange',
    },
  },
};
