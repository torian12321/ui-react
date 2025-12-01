import type { JSX, SyntheticEvent } from 'react';
import { useState } from 'react';
import MuiAutocomplete from '@mui/material/Autocomplete';
import MuiBox from '@mui/material/Box';
import MuiCircularProgress from '@mui/material/CircularProgress';
import MuiTextField from '@mui/material/TextField';

import { combineSxStyles } from 'src/utils';

import {
  dropdownStyles,
  inputStyles,
  loaderStyles,
  wrapperStyles,
} from './Dropdown.styles';
import type { DropdownProps, Option } from './Dropdown.types';

export const Dropdown = ({
  name,
  'data-testid': dataTestid,
  value,
  label,
  sx,
  loading = false,
  disabled = false,
  required = true,
  options = [],
  error,
  onChange = () => {},
  onBlur,
}: DropdownProps): JSX.Element | null => {
  const [query, setQuery] = useState('');
  const sxStyles = combineSxStyles(wrapperStyles, sx);
  const dropdownValue = options.find(option => option.value === value) ?? null;

  const handleOnChange = (_: SyntheticEvent, newValue: Option | null) => {
    if (newValue?.value) {
      onChange(newValue.value);
    } else {
      onChange(null);
    }
  };

  const handleOnOnInputChange = (_: SyntheticEvent, newValue: string) => {
    setQuery(newValue);
  };

  const isOptionEqualToValue = (option: Option, val: Option): boolean =>
    option.value === val.value;

  return (
    <MuiBox sx={sxStyles}>
      {loading && <MuiCircularProgress size={12} sx={loaderStyles} />}
      <MuiAutocomplete
        data-testid={dataTestid}
        size='small'
        value={dropdownValue}
        options={options}
        disabled={disabled || loading}
        disableClearable={required}
        onBlur={onBlur}
        inputValue={query}
        isOptionEqualToValue={isOptionEqualToValue}
        onChange={handleOnChange}
        onInputChange={handleOnOnInputChange}
        sx={dropdownStyles}
        getOptionDisabled={option =>
          options.find(o => o.value === option.value)?.disabled ?? false
        }
        renderInput={params => (
          <MuiTextField
            {...params}
            name={name}
            label={label}
            error={error}
            sx={inputStyles}
          />
        )}
      />
    </MuiBox>
  );
};
