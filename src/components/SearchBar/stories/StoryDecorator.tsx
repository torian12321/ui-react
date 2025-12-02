import { useState } from 'react';
import type { Decorator, StoryContext } from '@storybook/react-vite';
import { action } from 'storybook/actions';

import type { SearchBarProps } from '../SearchBar.types';

export const StoryDecorator: Decorator<SearchBarProps> = (
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Story,
  context: StoryContext<SearchBarProps>,
) => {
  const [value, setValue] = useState('');

  const handleChange = (newValue: string) => {
    setValue(newValue);
    action('onChange')(newValue);
  };

  return <Story args={{ ...context.args, value, onChange: handleChange }} />;
};
