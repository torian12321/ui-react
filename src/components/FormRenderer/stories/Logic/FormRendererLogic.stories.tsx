import type { Meta, StoryObj } from '@storybook/react-vite';

import { FormRenderer } from '../../';
import { formWithLogic } from '../../__mock__/withLogic/formWithLogic.base';
import { formLogicConditionalTypes } from '../../__mock__/withLogic/formWithLogic.conditionalType';
import { formWithLogicContains } from '../../__mock__/withLogic/formWithLogic.contains';
import { formExcludeChoices } from '../../__mock__/withLogic/formWithLogic.excludeChoices';
import type { FormRendererProps } from '../../FormRenderer.types';
import { StoryDecorator } from '../StoryDecorator';

const meta: Meta<FormRendererProps> = {
  title: 'components/FormRenderer/Logic',
  component: FormRenderer,
  decorators: [StoryDecorator],
  args: {
    id: 'form-renderer',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: formWithLogic,
};
export const ExcludeOptions: Story = {
  args: formExcludeChoices,
};
export const Contains: Story = {
  args: formWithLogicContains,
};
export const ConditionalTypes: Story = {
  args: formLogicConditionalTypes,
};
