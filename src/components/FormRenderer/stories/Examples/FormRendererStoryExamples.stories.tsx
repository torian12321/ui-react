import type { Meta, StoryObj } from '@storybook/react-vite';

import { FormRenderer } from '../..';
import { formExampleCreateRequest } from '../../__mock__/formExampleCreateRequest';
import { formExampleWorkflow } from '../../__mock__/formExampleWorkflow';
import { formExampleWorkflowAttachment } from '../../__mock__/formExampleWorkflowAttachment';
import { FIELD_TYPE } from '../../FormRenderer.constants';
import type { FormRendererProps } from '../../FormRenderer.types';
import {
  stylesHalfRow,
  stylesInlined,
  stylesLastRow,
} from '../FormRendererStory.styles';
import { StoryDecorator } from '../StoryDecorator';

const meta: Meta<FormRendererProps> = {
  title: 'components/FormRenderer/Examples',
  component: FormRenderer,
  decorators: [StoryDecorator],
  args: {
    id: 'form-renderer',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WorkflowStep: Story = {
  args: {
    innerLabel: true,
    ...formExampleWorkflow,
  },
};
export const WorkflowAttachments: Story = {
  args: {
    innerLabel: true,
    ...formExampleWorkflowAttachment,
  },
};
export const CreateRequest: Story = {
  args: {
    validateAfterSubmit: false,
    sxFieldsByType: {
      [FIELD_TYPE.DROPDOWN]: stylesHalfRow,
      [FIELD_TYPE.DATE]: stylesHalfRow,
      [FIELD_TYPE.DATE_TIME]: stylesHalfRow,
    },
    sxFieldsByName: {
      session: stylesInlined,
      bill_number: stylesInlined,

      // Last row fields
      active: stylesLastRow,
      create_another: stylesLastRow,
      bulk_create: stylesLastRow,
      bulk_create_number: stylesLastRow,
    },
    ...formExampleCreateRequest,
  },
};
