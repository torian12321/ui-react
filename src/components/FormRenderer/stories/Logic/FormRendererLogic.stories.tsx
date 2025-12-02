import type { Meta, StoryObj } from '@storybook/react-vite';
import { formWithLogic } from 'formRenderer/__mock__/withLogic/formWithLogic.base';
import { formLogicConditionalTypes } from 'formRenderer/__mock__/withLogic/formWithLogic.conditionalType';
import { formWithLogicContains } from 'formRenderer/__mock__/withLogic/formWithLogic.contains';
import { formExcludeChoices } from 'formRenderer/__mock__/withLogic/formWithLogic.excludeChoices';
import { FormRenderer } from 'formRenderer/FormRenderer';
import type { FormRendererProps } from 'formRenderer/FormRenderer.types';

import { StoryDecorator } from '../StoryDecorator';

const meta: Meta<FormRendererProps> = {
  title: 'FormRenderer/Logic',
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
