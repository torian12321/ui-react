import type { ChangeEvent, JSX, KeyboardEvent } from 'react';
import MuiTextField from '@mui/material/TextField';

import { useLocalization } from 'src/localization';

import { fieldStyles } from './DialogCreate.styles';
import type { FieldProps } from './DialogCreate.types';

export const Field = ({
  value,
  errors = [],
  fieldRef,
  disabled = false,
  onChange,
  onSubmit,
}: FieldProps): JSX.Element => {
  const l10n = useLocalization();
  const hasError = Boolean(errors.length);

  const handelOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onChange(value);
  };

  const handleEnterKey = (event: KeyboardEvent<HTMLInputElement>) => {
    // Allow users to press the enter key to save the custom filter
    if (event.key === 'Enter') onSubmit();
  };

  return (
    <MuiTextField
      sx={fieldStyles}
      data-testid='customization-label-field'
      autoComplete='off'
      label={l10n('components.buttonCustomizations.dialogCreate.fieldLabel')}
      error={hasError}
      helperText={errors?.[0]}
      variant='outlined'
      value={value}
      onChange={handelOnChange}
      onKeyUp={handleEnterKey}
      disabled={disabled}
      size='small'
      spellCheck
      lang='en'
      inputRef={fieldRef}
    />
  );
};
