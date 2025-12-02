import type { JSX } from 'react';
import MuiDialogActions from '@mui/material/DialogActions';
import MuiDialogContent from '@mui/material/DialogContent';

import { Button, Modal } from 'src/components';
import { useLocalization } from 'src/localization';

import { DATA_TEST } from './dataTest';
import type { DialogInformationProps } from './DialogInformation.types';

export const DialogInformation = ({
  open,
  onConfirm,
  message,
  confirmText,
}: DialogInformationProps): JSX.Element => {
  const l10n = useLocalization();
  const txtConfirm = confirmText ?? l10n('common.actions.ok');

  return (
    <Modal maxWidth='xs' isOpen={open} data-testid={DATA_TEST.DIALOG}>
      <MuiDialogContent dividers>{message}</MuiDialogContent>
      <MuiDialogActions>
        <Button onClick={onConfirm} data-testid={DATA_TEST.CONFIRM_BUTTON}>
          {txtConfirm}
        </Button>
      </MuiDialogActions>
    </Modal>
  );
};
