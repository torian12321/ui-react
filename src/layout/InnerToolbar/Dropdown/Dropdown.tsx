import type { ChangeEvent, JSX } from 'react';
import MuiBox from '@mui/material/Box';
import MuiMenuItem from '@mui/material/MenuItem';
import MuiSkeleton from '@mui/material/Skeleton';
import MuiTextField from '@mui/material/TextField';

import { useCombineSxStyles } from 'src/utils';

import { dropdownStyles, wrapperStyles } from './Dropdown.styles';
import type { DropdownProps } from './Dropdown.types';

export const Dropdown = ({
  'data-testid': dataTestid,
  label,
  value,
  options = [],
  isLoading = false,
  sx,
  onChange,
}: DropdownProps): JSX.Element => {
  const sxStyles = useCombineSxStyles(wrapperStyles, sx);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  if (isLoading) {
    return (
      <MuiBox sx={sxStyles}>
        <MuiSkeleton variant='text' width={300} height={40} />
      </MuiBox>
    );
  }

  return (
    <MuiBox sx={wrapperStyles}>
      <MuiTextField
        select
        data-testid={dataTestid}
        size='small'
        value={value}
        onChange={handleOnChange}
        label={label}
        sx={dropdownStyles}
      >
        {options?.map(({ value, label }) => (
          <MuiMenuItem key={value} value={value}>
            {label}
          </MuiMenuItem>
        ))}
      </MuiTextField>
    </MuiBox>
  );
};
