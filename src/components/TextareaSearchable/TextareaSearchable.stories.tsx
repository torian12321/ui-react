import MuiIconLocation from '@mui/icons-material/AddLocationAlt';
import MuiIconCopyAll from '@mui/icons-material/CopyAll';
import MuiIconSearch from '@mui/icons-material/Search';
import MuiIconYouTube from '@mui/icons-material/YouTube';
import { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { docImport } from 'src/utils/storybook';

import { mockText } from './__mock__';
import { TextareaSearchable } from './TextareaSearchable';
import type { TextareaSearchableProps } from './TextareaSearchable.types';

const meta: Meta<TextareaSearchableProps> = {
  title: 'Components/TextareaSearchable',
  component: TextareaSearchable,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: docImport('components', 'TextareaSearchable'),
      },
    },
  },
  args: {
    text: mockText,
  },
};

export default meta;
type Story = StoryObj<typeof TextareaSearchable>;

export const Default: Story = {};
export const WithDefaultQuery: Story = {
  args: {
    defaultQuery: 'Lorem ipsum',
  },
};

export const WithCustomQueryConfig: Story = {
  args: {
    text: 'Hello, world! And hello universe! \n Search is case sensitive and ignores whitespaces',
    defaultQuery: 'hellouniver',
    queryConfig: {
      caseSensitive: true,
      ignoreWhitespaces: true,
    },
  },
};

export const WithCustomStyles: Story = {
  args: {
    defaultQuery: 'cu',
    highlightConfig: {
      component: 'strong',
      styles: {
        background: 'yellow',
        outline: '2px dashed orange',
        outlineOffset: '2px',
      },
      focusedStyles: {
        background: 'orange',
      },
    },
  },
};

export const WithActions: Story = {
  args: {
    actions: [
      {
        label: 'Copy',
        icon: MuiIconCopyAll,
        onClick: () => fn(),
      },
      {
        label: 'Search',
        icon: MuiIconSearch,
        onClick: () => fn(),
      },
      {
        label: 'Youtube',
        icon: MuiIconYouTube,
        sx: {
          color: 'red',
        },
        onClick: () => fn(),
      },
      {
        label: 'Location',
        icon: MuiIconLocation,
        disabled: true,
        onClick: () => fn(),
      },
    ],
  },
};
