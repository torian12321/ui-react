import { useState } from 'react';
import type {
  Decorator,
  Meta,
  StoryContext,
  StoryObj,
} from '@storybook/react-vite';
import { action } from 'storybook/actions';

import { docImport } from 'src/utils/storybook';

import { TextField } from './TextField';
import type { TextFieldProps } from './TextField.types';

const StateDecorator: Decorator<TextFieldProps> = (
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

const meta: Meta<TextFieldProps> = {
  title: 'Components/form/TextField',
  component: TextField,
  decorators: [StateDecorator],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: docImport('components', 'TextField'),
      },
    },
  },
  tags: ['autodocs'],
  args: {
    name: 'text-field',
    value: '',
    placeholder: 'Text field',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
