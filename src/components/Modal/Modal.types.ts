import type { Breakpoint } from '@mui/material';

import type { ComponentWithStyles, ComponentWithTestId } from 'src/types';

export type ModalProps = ComponentWithTestId &
  ComponentWithStyles & {
    title?: string;
    isOpen?: boolean;
    disableEscapeKeyDown?: boolean;
    /** The maximum width of the modal. If false, the modal will be full width */
    maxWidth?: Breakpoint | false;
    fullWidth?: boolean;
    onClose?: VoidFunction;
  };

export type ModalHeaderProps = {
  title?: string;
  onClose?: VoidFunction;
};

export type ModalBodyProps = ComponentWithStyles & {
  loadingContent?: boolean;
};

export type ModalFooterProps = ComponentWithStyles;
export type FooterHelperTextProps = {
  show?: boolean;
  message?: string;
};
