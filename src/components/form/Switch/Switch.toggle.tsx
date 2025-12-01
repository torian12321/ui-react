import { ChangeEvent } from 'react';
import MuiBox from '@mui/material/Box';

import { combineSxStyles } from 'src/utils';

import { inputStyles, knobStyles, sliderStyles } from './Switch.styles';
import type { SwitchToggleProps } from './Switch.types';

export const Toggle = ({
  'data-testid': dataTestid,
  inputId,
  sx,
  name,
  checked = false,
  disabled = false,
  onChange = undefined,
}: SwitchToggleProps) => {
  const sxStyles = combineSxStyles(sliderStyles, sx);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!disabled && onChange) {
      onChange(e.target.checked, e);
    }
  };

  return (
    <MuiBox sx={sxStyles} data-is-disabled={disabled} data-is-checked={checked}>
      <MuiBox
        id={inputId}
        name={name}
        data-testid={dataTestid}
        component='input'
        type='checkbox'
        role='switch'
        aria-checked={checked}
        aria-disabled={disabled}
        autoComplete='off'
        sx={inputStyles}
        checked={checked}
        disabled={disabled}
        onChange={handleOnChange}
      />
      <MuiBox sx={knobStyles} data-is-checked={checked} />
    </MuiBox>
  );
};
