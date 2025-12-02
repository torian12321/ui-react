import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';

import { Button } from 'src/components';
import { docImport } from 'src/utils/storybook';

import { useDialog } from '../useDialog';
import { DialogAction } from './DialogAction';
import type { DialogActionProps } from './DialogActionProps.types';

const meta: Meta<DialogActionProps> = {
  title: 'Components/dialogs/DialogAction',
  component: DialogAction,
  parameters: {
    layout: 'centered',
    tags: ['autodocs'],
    docs: {
      description: {
        component: docImport('components', 'DialogAction, useDialog'),
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
      <DialogAction
        open={isOpen}
        title='Dialog Action'
        message='Lorem ipsum dolor sit amet, \n consectetur adipiscing elit. Donec ac elementum lorem. \n leo diam gravida nisi, non ultrices nunc augue nec est. \n Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        onConfirm={dialogActions.close}
        onClose={dialogActions.close}
        {...args}
      />
    </>
  );
};

export const Default = Template.bind({});
