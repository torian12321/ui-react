import type { Meta, StoryObj } from '@storybook/react-vite';
import { formWithDefaultValues } from 'formRenderer/__mock__/withDefaultValues/formWithDefaultValues';
import { formWithDefaultValuesDates } from 'formRenderer/__mock__/withDefaultValues/formWithDefaultValues.dates';
import { formWithDefaultValuesDateTime } from 'formRenderer/__mock__/withDefaultValues/formWithDefaultValues.datetime';
import { formWithDefaultValuesRadioButtons } from 'formRenderer/__mock__/withDefaultValues/formWithDefaultValues.radio_buttons';
import { FormRenderer } from 'formRenderer/FormRenderer';
import type { FormRendererProps } from 'formRenderer/FormRenderer.types';

import { StoryDecorator } from '../StoryDecorator';

const meta: Meta<FormRendererProps> = {
  title: 'FormRenderer/DefaultValues',
  component: FormRenderer,
  decorators: [StoryDecorator],
  args: {
    id: 'form-renderer',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: formWithDefaultValues,
};
export const Dates: Story = {
  args: formWithDefaultValuesDates,
};
export const DateTimes: Story = {
  args: formWithDefaultValuesDateTime,
};
export const Radiobuttons: Story = {
  args: formWithDefaultValuesRadioButtons,
};
