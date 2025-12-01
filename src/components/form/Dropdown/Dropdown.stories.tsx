import { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react-vite';
import { action } from 'storybook/actions';

import { docImport } from 'src/utils/storybook';

import { options } from './__mocks';
import { Dropdown } from './Dropdown';
import type { DropdownProps, OptionValue } from './Dropdown.types';

const meta: Meta = {
  title: 'Components/form/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: docImport('components', 'Dropdown'),
      },
    },
  },
  tags: ['autodocs'],
  args: {
    label: 'Country',
    options,
  },
} satisfies Meta<DropdownProps>;

export default meta;

const Template: StoryFn<DropdownProps> = ({
  value: initialValue,
  ...restArgs
}: DropdownProps) => {
  const [value, setValue] = useState<OptionValue | null>(initialValue ?? null);

  const handleChange = (value: OptionValue | null) => {
    setValue(value);
    action('onChange')(value);
  };

  return <Dropdown {...restArgs} value={value} onChange={handleChange} />;
};

export const Default = Template.bind({});

export const WithDisabledOptions = Template.bind({});
WithDisabledOptions.args = {
  options: options.map((option, index) => ({
    ...option,
    disabled: [0, 1, 3].includes(index),
  })),
};
