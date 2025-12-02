import type { Meta, StoryObj } from '@storybook/react-vite';

import { FormRenderer } from '../../';
import {
  formWithDateValidations,
  formWithNumericalValidations,
} from '../../__mock__/withValidations/formWithValidations.refValidations';
import type { FormRendererProps } from '../../FormRenderer.types';
import { StoryDecorator } from '../StoryDecorator';

const meta: Meta<FormRendererProps> = {
  title: 'components/FormRenderer/Validations/Type Specific/Ref',
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
