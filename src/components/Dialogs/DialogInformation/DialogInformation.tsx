import type { JSX, PropsWithChildren } from 'react';
import MuiDialogActions from '@mui/material/DialogActions';
import MuiDialogContent from '@mui/material/DialogContent';
import MuiDialogTitle from '@mui/material/DialogTitle';

import { Button, Modal } from 'src/components';
import { useLocalization } from 'src/localization';

import { DATA_TEST } from './dataTest';
import type { DialogInformationProps } from './DialogInformation.types';

export const DialogInformation = ({
  children,
  open,
  title,
  message,
  loading = false,
  confirmText,
  maxWidth = 'xs',
  onClose,
  onConfirm,
}: PropsWithChildren<DialogInformationProps>): JSX.Element => {
  const l10n = useLocalization();
  const txtConfirm = confirmText ?? l10n('common.actions.ok');

  const handleOnConfirm = () => {
    onClose?.();
    onConfirm?.();
  };

  return (
    <Modal maxWidth={maxWidth} isOpen={open} data-testid={DATA_TEST.DIALOG}>
      {title && <MuiDialogTitle>{title}</MuiDialogTitle>}
      <MuiDialogContent dividers>{message}</MuiDialogContent>
      {children}
      <MuiDialogActions>
        <Button
          data-testid={DATA_TEST.CONFIRM_BUTTON}
          loading={loading}
          onClick={handleOnConfirm}
        >
          {txtConfirm}
        </Button>
      </MuiDialogActions>
    </Modal>
  );
};
