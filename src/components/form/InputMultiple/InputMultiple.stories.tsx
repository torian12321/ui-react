import type { Meta } from '@storybook/react-vite';
import { action } from 'storybook/actions';

import { docImport } from 'src/utils/storybook';

import { InputMultiple } from './InputMultiple';
import type { InputMultipleProps } from './InputMultiple.types';
import { useInputMultiple } from './useInputMultiple';

const meta = {
  title: 'Components/form/InputMultiple',
  component: InputMultiple,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: docImport('components', 'InputMultiple'),
      },
    },
  },
  tags: ['autodocs'],
  args: {
    label: 'Input multiple field',
    value: {
      op_01: '12345',
      op_02: 'abcde',
    },
    inputs: [
      {
        name: 'op_01',
        placeholder: 'Chapter',
      },
      {
        name: 'op_02',
        placeholder: 'Article',
      },
      {
        name: 'op_03',
        placeholder: 'Section',
      },
    ],
  },
} satisfies Meta<typeof InputMultiple>;

export default meta;

type Options = 'op_01' | 'op_02' | 'op_03';

const Template = (args: InputMultipleProps<Options>) => {
  const { value = {}, ...restArgs } = args;
  const [optionValues, setOptionValues] = useInputMultiple<Options>(
    value as Record<Options, string>,
  );

  const handleChange = (record: Record<Options, string>) => {
    setOptionValues(record);
    action('onChange')(record);
  };

  return (
    <InputMultiple {...restArgs} value={optionValues} onChange={handleChange} />
  );
};

export const Default = Template.bind({});
