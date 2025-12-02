import type { ChangeEvent } from 'react';
import MuiTextField from '@mui/material/TextField';

import type { SharedTextFieldProps } from './SharedTextField.types';
import { commonTextFieldProps } from './';

export const SharedTextField = ({
  name,
  rows = 1,
  onChange,
  loading: _loading = false, // `loadign` added here to avoid to have it on `rest` and pass it down to `<MuiTextField />`
  ...rest
}: SharedTextFieldProps) => {
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;

    if (onChange) {
      onChange(val);
    }
  };

  return (
    <MuiTextField
      {...rest}
      {...commonTextFieldProps}
      id={name}
      name={name}
      rows={rows}
      multiline={Boolean(rows > 1)}
      onChange={handleOnChange}
      spellCheck
      lang='en'
    />
  );
};
