import type { Decorator, StoryContext } from '@storybook/react-vite';
import { action } from 'storybook/actions';

import type { SwitchProps } from '../Switch.types';
import { useSwitch } from '../useSwitch';

export const StoryDecorator: Decorator<SwitchProps> = (
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
