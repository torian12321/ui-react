import type { JSX, PropsWithChildren } from 'react';
import MuiDialog from '@mui/material/Dialog';

import { DATA_TEST } from './constants';
import { ModalBody } from './Modal.Body';
import { ModalFooter } from './Modal.Footer';
import { ModalHeader } from './Modal.Header';
import type { ModalProps } from './Modal.types';

const Modal = ({
  children,
  'data-testid': dataTestid = DATA_TEST.MODAL,
  title,
  isOpen = false,
  maxWidth = false,
  disableEscapeKeyDown = true,
  fullWidth = true,
  sx,
  onClose,
}: PropsWithChildren<ModalProps>): JSX.Element => {
  const showHeader = Boolean(title ?? onClose);

  return (
    <MuiDialog
      disableEnforceFocus
      data-testid={dataTestid}
      open={isOpen}
      onClose={(_: Event, reason: string) =>
        reason !== 'backdropClick' && onClose?.()
      }
      fullWidth={fullWidth}
      scroll='paper'
      maxWidth={maxWidth}
      disableEscapeKeyDown={disableEscapeKeyDown}
      sx={sx}
    >
      {showHeader && <ModalHeader title={title} onClose={onClose} />}
      {children}
    </MuiDialog>
  );
};

Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export { Modal };
