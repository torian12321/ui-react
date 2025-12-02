import { useState } from 'react';
import type { Decorator, StoryContext } from '@storybook/react-vite';
import { action } from 'storybook/actions';

import type { TextFieldProps } from '../TextField.types';

export const StoryDecorator: Decorator<TextFieldProps> = (
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Story,
  props: StoryContext<TextFieldProps>,
) => {
  const [value, setValue] = useState(props?.args?.value ?? '');

  const handleChange = (newValue: string) => {
    setValue(newValue);
    action('onChange')(newValue);
  };

  return (
    <Story {...props} args={{ ...props.args, value, onChange: handleChange }} />
  );
};
