import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  formWithDateValidations,
  formWithNumericalValidations,
} from 'formRenderer/__mock__/withValidations/formWithValidations.refValidations';
import { FormRenderer } from 'formRenderer/FormRenderer';
import type { FormRendererProps } from 'formRenderer/FormRenderer.types';

import { StoryDecorator } from '../StoryDecorator';

const meta: Meta<FormRendererProps> = {
  title: 'FormRenderer/Validations/Type Specific/Ref',
  component: FormRenderer,
  decorators: [StoryDecorator],
  args: {
    id: 'form-renderer',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TypeNumber: Story = {
  args: formWithNumericalValidations,
};
export const TypeDate: Story = {
  args: formWithDateValidations,
};
