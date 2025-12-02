import type { Meta, StoryObj } from '@storybook/react-vite';

import { FormRenderer } from '../../';
import { formWithRequiredValidations } from '../../__mock__/withValidations/formWithValidations';
import { formWithCustomMessageValidations } from '../../__mock__/withValidations/formWithValidations.customMessages';
import { formWithMultipleValidations } from '../../__mock__/withValidations/formWithValidations.multiple';
import type { FormRendererProps } from '../../FormRenderer.types';
import { StoryDecorator } from '../StoryDecorator';

const meta: Meta<FormRendererProps> = {
  title: 'components/FormRenderer/Validations',
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
