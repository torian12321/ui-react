import type { JSX, PropsWithChildren } from 'react';
import MuiAlert from '@mui/material/Alert';
import MuiDialogActions from '@mui/material/DialogActions';
import MuiDialogContent from '@mui/material/DialogContent';
import MuiDialogTitle from '@mui/material/DialogTitle';

import { Modal } from 'src/components';
import { useLocalization } from 'src/localization';

import { DATA_TEST } from './dataTest';
import { Body, Text, WarningIcon } from './DialogWarning.styles';
import { DialogButton } from './DialogWarningButton';
import type { DialogWarningProps } from './DialogWarningProps.types';

export const DialogWarning = ({
  children,
  open,
  loading = false,
  maxWidth = 'xs',
  message,
  cancelText,
  confirmText,
  title,
  additionalButtonText,
  additionalButtonConfirm,
  onConfirm,
  onClose,
}: PropsWithChildren<DialogWarningProps>): JSX.Element => {
  const l10n = useLocalization();
  const txtCancel = cancelText ?? l10n('common.actions.cancel');
  const txtConfirm = confirmText ?? l10n('common.actions.ok');

  return (
    <Modal maxWidth={maxWidth} isOpen={open} data-testid={DATA_TEST.DIALOG}>
      {title && <MuiDialogTitle>{title}</MuiDialogTitle>}
      <MuiDialogContent dividers>
        <Body>
          <Text>
            <MuiAlert color='warning' icon={<WarningIcon />}>
              {message}
              {children}
            </MuiAlert>
          </Text>
        </Body>
      </MuiDialogContent>
      <MuiDialogActions>
        {onClose && (
          <DialogButton
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            label={txtCancel}
            onClick={onClose}
            dataTestId={DATA_TEST.CANCEL_BUTTON}
          />
        )}
        <DialogButton
          label={txtConfirm}
          loading={loading}
          onClick={onConfirm}
          dataTestId={DATA_TEST.CONFIRM_BUTTON}
        />

        {additionalButtonText && additionalButtonConfirm && (
          <DialogButton
            label={additionalButtonText}
            onClick={additionalButtonConfirm}
          />
        )}
      </MuiDialogActions>
    </Modal>
  );
};
