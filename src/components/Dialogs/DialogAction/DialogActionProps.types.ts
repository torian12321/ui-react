import type { DialogsProps } from '../Dialogs.types';

export type DialogActionProps = DialogsProps & {
  cancelText?: string;
  confirmText?: string;
  additionalButtonText?: string;
  onConfirm: VoidFunction;
  additionalButtonConfirm?: VoidFunction;
};

export type ButtonProps = {
  label: string;
  autoFocus?: boolean;
  disabled?: boolean;
  loading?: boolean;
  dataTestId?: string;
  onClick: VoidFunction;
};
