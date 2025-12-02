import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';

import { Button } from 'src/components';
import { docImport } from 'src/utils/storybook';

import { useDialog } from '../useDialog';
import { DialogInformation } from './DialogInformation';
import type { DialogInformationProps } from './DialogInformation.types';

const meta: Meta<DialogInformationProps> = {
  title: 'Components/dialogs/DialogInformation',
  component: DialogInformation,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: docImport('components', 'DialogInformation, useDialog'),
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
      <DialogInformation
        open={isOpen}
        message='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac elementum lorem. Duis vitae lorem in purus eleifend sollicitudin eget eu massa. Donec sagittis, lorem vitae tempor semper, leo diam gravida nisi, non ultrices nunc sapien ut risus. Nulla tristique eu arcu efficitur mollis. Vivamus sed lacus feugiat, semper arcu quis, dictum ex'
        onConfirm={dialogActions.close}
        {...args}
      />
    </>
  );
};

export const Default = Template.bind({});
