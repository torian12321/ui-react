import type { Breakpoint } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from 'src/components';
import { docImport } from 'src/utils/storybook';

import { Modal, useModal } from './';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: docImport('components', 'Modal'),
      },
    },
  },
  tags: ['autodocs'],
  args: {
    title: 'Modal title',
    maxWidth: 'md',
  },
  argTypes: {
    maxWidth: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'] satisfies Breakpoint[],
      table: {
        defaultValue: { summary: 'sm' },
      },
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => {
    const [isOpen, modalAction] = useModal();

    return (
      <>
        <Button onClick={modalAction.open}>Open Modal</Button>

        <Modal isOpen={isOpen} {...args} onClose={modalAction.close}>
          <Modal.Body>Modal Content</Modal.Body>
          <Modal.Footer>
            <Button onClick={modalAction.close}>Cancel</Button>
            <Button onClick={modalAction.close} primary>
              Accept
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  },
};
