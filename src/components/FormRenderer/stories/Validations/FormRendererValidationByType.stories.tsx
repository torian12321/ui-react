import type { Meta, StoryObj } from '@storybook/react-vite';

import { FormRenderer } from '../..';
import { formWithDateValidations } from '../../__mock__/withValidations/formWithValidations.dates';
import { formWithInfoMessageValidations } from '../../__mock__/withValidations/formWithValidations.infoMessages';
import { formWithNumericalValidations } from '../../__mock__/withValidations/formWithValidations.numbers';
import { formWithTextValidations } from '../../__mock__/withValidations/formWithValidations.text';
import type { FormRendererProps } from '../../FormRenderer.types';
import { StoryDecorator } from '../StoryDecorator';

const meta: Meta<FormRendererProps> = {
  title: 'components/FormRenderer/Validations/Type Specific',
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
