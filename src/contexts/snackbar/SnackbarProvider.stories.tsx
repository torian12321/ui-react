import type { Meta, StoryObj } from '@storybook/react-vite';
import { SnackbarProviderProps } from 'notistack';

import { Button } from 'src/components';
import { docImport } from 'src/utils/storybook';

import {
  showMessageError,
  showMessageInfo,
  showMessageSuccess,
  showMessageWarning,
} from './showMessage';
import { SnackbarProvider } from './SnackbarProvider';

const meta: Meta<SnackbarProviderProps> = {
  title: 'Contexts/SnackbarProvider',
  component: SnackbarProvider,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: docImport('contexts', 'SnackbarProvider'),
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ShowMessages: Story = {
  render: () => (
    <Button.Group>
      <Button onClick={() => showMessageInfo('Your info notification here')}>
        Message Info
      </Button>
      <Button
        onClick={() => showMessageSuccess('Your success notification here')}
      >
        Message Success
      </Button>
      <Button
        onClick={() => showMessageWarning('Your warning notification here')}
      >
        Message Warning
      </Button>
      <Button onClick={() => showMessageError('Your error notification here')}>
        Message Error
      </Button>
    </Button.Group>
  ),
};

export const WithMultipleMessages: Story = {
  render: () => (
    <Button.Group>
      <Button
        onClick={() =>
          showMessageSuccess('Message will not be closed automatically')
        }
      >
        Show single message
      </Button>
      <Button
        primary
        onClick={() =>
          showMessageSuccess([
            'List of multiple messages',
            'Message details 1',
            'Message details 2',
            'Message details 3',
          ])
        }
      >
        Show multiple messages
      </Button>
    </Button.Group>
  ),
};

export const WithCustomOptions: Story = {
  render: () => (
    <Button.Group>
      <Button
        onClick={() =>
          showMessageWarning('Message will not be closed automatically', {
            persist: true,
          })
        }
      >
        Persisting Messages
      </Button>
      <Button
        onClick={() =>
          showMessageSuccess('Your notification here', { duration: 500 })
        }
      >
        With custom time (0.5s)
      </Button>
      <Button
        onClick={() =>
          showMessageError('Your notification here', {
            textToCopy: 'lorem ipsum dolor sit amet',
          })
        }
      >
        With text to copy
      </Button>
    </Button.Group>
  ),
};
