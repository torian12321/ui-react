import type { JSX } from 'react';
import { useEffect, useRef, useState } from 'react';
import MuiIconAdd from '@mui/icons-material/Add';
import MuiIconInfo from '@mui/icons-material/InfoOutline';
import MuiDialog from '@mui/material/Dialog';
import MuiDialogActions from '@mui/material/DialogActions';
import MuiDialogContent from '@mui/material/DialogContent';
import MuiDialogContentText from '@mui/material/DialogContentText';
import MuiDialogTitle from '@mui/material/DialogTitle';

import { Button } from 'src/components';
import { useLocalization } from 'src/localization';

import { Field } from './DialogCreate.Field';
import { messageStyles } from './DialogCreate.styles';
import type { DialogCreateProps } from './DialogCreate.types';
import { useCalculateErrors } from './useCalculateErrors';

export const DialogCreate = ({
  open = false,
  loading = false,
  options = [],
  minNameLength,
  maxNameLength,
  onClose,
  onSubmit,
}: DialogCreateProps): JSX.Element => {
  const l10n = useLocalization();
  const [label, setLabel] = useState('');
  const fieldRef = useRef<HTMLInputElement>(
    null as unknown as HTMLInputElement,
  );
  const errors = useCalculateErrors(label, {
    options,
    minNameLength,
    maxNameLength,
  });

  const hasError = Boolean(errors.length);
  const showErrors =
    hasError &&
    // Do not show errors if the name is too short,
    // it will be shown when the user starts typing.
    minNameLength &&
    label.trim().length >= minNameLength;

  useEffect(() => {
    // Reset the label when the dialog is closed
    if (!open) {
      setLabel('');
      return;
    }

    // Focus the field when the dialog is opened
    const timeoutId = setTimeout(() => {
      fieldRef.current?.focus();
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [open]);

  const handleOnSubmit = async () => {
    if (hasError) return;

    const isSuccess = await onSubmit(label);

    if (isSuccess) {
      onClose();
      setLabel('');
    }
  };

  return (
    <MuiDialog
      maxWidth='xs'
      open={open}
      onClose={onClose}
      aria-labelledby='customization-create-dialog-title'
      aria-describedby='customization-create-dialog-description'
    >
      <MuiDialogTitle id='customization-create-dialog-title'>
        {l10n('components.buttonCustomizations.dialogCreate.title')}
      </MuiDialogTitle>

      <MuiDialogContent dividers>
        <Field
          value={label}
          fieldRef={fieldRef}
          disabled={loading}
          errors={showErrors ? errors : []}
          onChange={setLabel}
          onSubmit={handleOnSubmit}
        />
        <MuiDialogContentText
          id='customization-create-dialog-description'
          sx={messageStyles}
        >
          <MuiIconInfo />
          {l10n('components.buttonCustomizations.dialogCreate.tip')}
        </MuiDialogContentText>
      </MuiDialogContent>

      <MuiDialogActions>
        <Button
          primary
          disabled={hasError}
          loading={loading}
          startIcon={MuiIconAdd}
          onClick={handleOnSubmit}
        >
          {l10n('components.buttonCustomizations.dialogCreate.buttonSave')}
        </Button>
      </MuiDialogActions>
    </MuiDialog>
  );
};
