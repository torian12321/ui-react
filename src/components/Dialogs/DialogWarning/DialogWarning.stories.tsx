import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';

import { Button } from 'src/components';
import { docImport } from 'src/utils/storybook';

import { useDialog } from '../useDialog';
import { DialogWarning } from './DialogWarning';
import type { DialogWarningProps } from './DialogWarningProps.types';

const meta: Meta<DialogWarningProps> = {
  title: 'Components/dialogs/DialogWarning',
  component: DialogWarning,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: docImport('components', 'DialogWarning, useDialog'),
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<Story> = args => {
  const [isOpen, dialogActions] = useDialog();

  return (
    <>
      <Button onClick={dialogActions.open}>Open Dialog</Button>
      <DialogWarning
        open={isOpen}
        message='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac elementum lorem. Duis vitae lorem in purus eleifend sollicitudin eget eu massa. Donec sagittis, lorem vitae tempor semper, leo diam gravida nisi, non ultrices nunc sapien ut risus. Nulla tristique eu arcu efficitur mollis. Vivamus sed lacus feugiat, semper arcu quis, dictum ex'
        onConfirm={dialogActions.close}
        onClose={dialogActions.close}
        {...args}
      />
    </>
  );
};

export const Default = Template.bind({});
