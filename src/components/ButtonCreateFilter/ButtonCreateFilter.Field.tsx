import type { ChangeEvent, JSX, KeyboardEvent } from 'react';
import MuiBox from '@mui/material/Box';
import MuiTextField from '@mui/material/TextField';

import { useLocalization } from 'src/localization';

import { ButtonSave } from './ButtonCreateFilter.ButtonSave';
import { fieldStyles, fieldWrapperStyles } from './ButtonCreateFilter.styles';
import type { FieldProps } from './ButtonCreateFilter.types';
import { DATA_TEST } from './dataTest';

export const Field = ({
  value,
  errors = [],
  inputRef,
  isLoading = false,
  onChange,
  onSave,
}: FieldProps): JSX.Element => {
  const l10n = useLocalization();
  const hasError = Boolean(errors.length);

  const handelOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onChange(value);
  };
  const handleEnterKey = (event: KeyboardEvent<HTMLInputElement>) => {
    // Allow users to press the enter key to save the custom filter
    if (event.key === 'Enter') onSave();
  };

  return (
    <MuiBox sx={fieldWrapperStyles}>
      <MuiTextField
        sx={fieldStyles}
        id='filterName'
        autoComplete='off'
        label={l10n('components.buttonCreateFilter.fieldLabel')}
        error={hasError}
        helperText={errors?.[0]}
        variant='outlined'
        value={value}
        onChange={handelOnChange}
        onKeyUp={handleEnterKey}
        disabled={isLoading}
        size='small'
        data-testid={DATA_TEST.FIELD}
        spellCheck
        lang='en'
        InputProps={{
          endAdornment: (
            <ButtonSave onClick={onSave} disabled={hasError || isLoading} />
          ),
        }}
        inputProps={{
          ref: inputRef,
        }}
      />
    </MuiBox>
  );
};
