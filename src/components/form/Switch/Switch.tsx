import { useId } from 'react';
import MuiBox from '@mui/material/Box';
import MuiTypography from '@mui/material/Typography';

import { combineSxStyles } from 'src/utils';

import { wrapperStyles } from './Switch.styles';
import { Toggle } from './Switch.toggle';
import type { SwitchProps } from './Switch.types';

export const Switch = ({
  'data-testid': dataTestid,
  sx,
  sxToggle,
  name,
  label,
  checked = false,
  disabled = false,
  onChange = undefined,
}: SwitchProps) => {
  const inputId = useId();
  const sxStyles = combineSxStyles(wrapperStyles, sx);

  return (
    <MuiBox
      component='label'
      data-testid={dataTestid}
      sx={sxStyles}
      htmlFor={inputId}
    >
      <Toggle
        inputId={inputId}
        name={name}
        data-testid={`${dataTestid}-input`}
        sx={sxToggle}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      {label && <MuiTypography variant='body1'>{label}</MuiTypography>}
    </MuiBox>
  );
};
