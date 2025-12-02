import type { Meta, StoryObj } from '@storybook/react-vite';

import { formWithAllFieldTypes } from '../__mock__/formWithAllFieldTypes';
import type { FormRendererProps } from '../FormRenderer.types';
import { FormRenderer } from '../';
import { StoryDecorator } from './StoryDecorator';

const meta: Meta<FormRendererProps> = {
  title: 'components/FormRenderer',
  component: FormRenderer,
  decorators: [StoryDecorator],
  args: {
    id: 'form-renderer',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    fields: formWithAllFieldTypes.fields,
  },
};

export const WithStyles: Story = {
  args: {
    fields: formWithAllFieldTypes.fields,
    sxForm: {
      width: 'clamp(200px, 80%, 500px)',
      margin: '0 auto',
    },
    sxFields: {
      background: '#ffe0bf',
    },
    sxFieldsByType: {
      date: {
        width: '50%',
        display: 'inline-block',
        background: 'orange',
        border: '2px dashed purple',
      },
      date_time: {
        width: '50%',
        display: 'inline-block',
        background: 'orange',
        border: '2px dashed purple',
      },
    },
    sxFieldsByName: {
      long_text: {
        opacity: 0.8,
        backgroundImage:
          'linear-gradient(140deg, #EADEDB 0%, #BC70A4 50%, #BFD641 75%)',
      },
    },
  },
};
