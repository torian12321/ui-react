import type { DialogsProps } from '../Dialogs.types';

export type DialogInformationProps = DialogsProps & {
  confirmText?: string;
  onConfirm: VoidFunction;
};
