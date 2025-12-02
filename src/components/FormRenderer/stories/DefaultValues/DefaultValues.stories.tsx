import type { Meta, StoryObj } from '@storybook/react-vite';

import { FormRenderer } from '../../';
import { formWithDefaultValues } from '../../__mock__/withDefaultValues/formWithDefaultValues';
import { formWithDefaultValuesDates } from '../../__mock__/withDefaultValues/formWithDefaultValues.dates';
import { formWithDefaultValuesDateTime } from '../../__mock__/withDefaultValues/formWithDefaultValues.datetime';
import { formWithDefaultValuesRadioButtons } from '../../__mock__/withDefaultValues/formWithDefaultValues.radio_buttons';
import type { FormRendererProps } from '../../FormRenderer.types';
import { StoryDecorator } from '../StoryDecorator';

const meta: Meta<FormRendererProps> = {
  title: 'components/FormRenderer/DefaultValues',
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
