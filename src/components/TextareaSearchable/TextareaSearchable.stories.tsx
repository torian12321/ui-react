import {
  AddLocationAlt as AddLocationAltIcon,
  CopyAll as CopyAllIcon,
  Search as SearchIcon,
  YouTube as YouTubeIcon,
} from '@mui/icons-material';
import { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { mockText } from './__mock__';
import { TextareaSearchable } from './TextareaSearchable';
import { docImport } from 'src/utils/storybook';

const meta = {
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
} satisfies Meta<typeof TextareaSearchable>;

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
        icon: CopyAllIcon,
        onClick: () => fn(),
      },
      {
        label: 'Search',
        icon: SearchIcon,
        onClick: () => fn(),
      },
      {
        label: 'Youtube',
        icon: YouTubeIcon,
        sx: {
          color: 'red',
        },
        onClick: () => fn(),
      },
      {
        label: 'Location',
        icon: AddLocationAltIcon,
        disabled: true,
        onClick: () => fn(),
      },
    ],
  },
};
