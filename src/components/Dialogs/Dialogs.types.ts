/** shared props for all dialogs */
export type DialogsProps = {
  open: boolean;
  title?: string;
  /** string content of the dialog. For more detailed content, use the children prop */
  message?: string;
  loading?: boolean;
  maxWidth?: 'xs' | 'sm';
  onClose?: VoidFunction;
};
