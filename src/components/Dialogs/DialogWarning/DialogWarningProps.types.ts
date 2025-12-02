export type DialogWarningProps = {
  open: boolean;
  loading?: boolean;
  maxWidth?: 'xs' | 'sm';
  message?: string;
  cancelText?: string;
  confirmText?: string;
  title?: string;
  additionalButtonText?: string;
  onConfirm: VoidFunction;
  onClose?: VoidFunction;
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
