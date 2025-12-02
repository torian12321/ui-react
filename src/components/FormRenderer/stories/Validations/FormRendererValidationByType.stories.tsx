import type { Meta, StoryObj } from '@storybook/react-vite';
import { formWithDateValidations } from 'formRenderer/__mock__/withValidations/formWithValidations.dates';
import { formWithInfoMessageValidations } from 'formRenderer/__mock__/withValidations/formWithValidations.infoMessages';
import { formWithNumericalValidations } from 'formRenderer/__mock__/withValidations/formWithValidations.numbers';
import { formWithTextValidations } from 'formRenderer/__mock__/withValidations/formWithValidations.text';
import { FormRenderer } from 'formRenderer/FormRenderer';
import type { FormRendererProps } from 'formRenderer/FormRenderer.types';

import { StoryDecorator } from '../StoryDecorator';

const meta: Meta<FormRendererProps> = {
  title: 'FormRenderer/Validations/Type Specific',
  component: FormRenderer,
  decorators: [StoryDecorator],
  args: {
    id: 'form-renderer',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TypeText: Story = {
  args: formWithTextValidations,
};
export const TypeNumber: Story = {
  args: formWithNumericalValidations,
};
export const TypeDate: Story = {
  args: formWithDateValidations,
};
export const TypeInfoMessage: Story = {
  args: formWithInfoMessageValidations,
};
