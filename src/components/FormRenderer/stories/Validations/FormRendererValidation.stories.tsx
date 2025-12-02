import type { Meta, StoryObj } from '@storybook/react-vite';
import { formWithCustomMessageValidations } from 'formRenderer/__mock__/withValidations/formWithValidations.customMessages';
import { formWithMultipleValidations } from 'formRenderer/__mock__/withValidations/formWithValidations.multiple';
import { FormRenderer } from 'formRenderer/FormRenderer';
import type { FormRendererProps } from 'formRenderer/FormRenderer.types';

import { formWithRequiredValidations } from '../../__mock__/withValidations/formWithValidations';
import { StoryDecorator } from '../StoryDecorator';

const meta: Meta<FormRendererProps> = {
  title: 'FormRenderer/Validations',
  component: FormRenderer,
  decorators: [StoryDecorator],
  args: {
    id: 'form-renderer',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Required: Story = {
  args: formWithRequiredValidations,
};
export const WithMultiple: Story = {
  args: formWithMultipleValidations,
};
export const WithCustomMessages: Story = {
  args: formWithCustomMessageValidations,
};
