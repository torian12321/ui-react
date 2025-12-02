import type { JSX, MouseEvent, PropsWithChildren } from 'react';
import { useState } from 'react';
import MuiButton from '@mui/material/Button';
import MuiMenu from '@mui/material/Menu';
import MuiMenuItem from '@mui/material/MenuItem';

import { Tooltip } from 'src/components';

import { btnStyles } from './OptionsSelector.styles';
import type { OptionsSelectorProps } from './OptionsSelector.types';

/**
 * Reusable component to display a list of options and allow the user to select one.
 * It is used in `<Header />` to allow the user to select a language or a theme.
 */
export const OptionsSelector = <T,>({
  children,
  menuId,
  'data-testid': dataTestid,
  label = '',
  show = true,
  options = [],
  value,
  onChange = () => {},
}: PropsWithChildren<OptionsSelectorProps<T>>): JSX.Element | null => {
  /**
   * Menu to switch to a different theme using local storage.
   * This is a hidden button, visible only to superusers on hover
   * and located left of login button in the header
   */
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClickOpen = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickOption = (val: T) => {
    onChange(val);
    handleClose();
  };

  if (!show) return null;
  return (
    <>
      <Tooltip title={label}>
        <MuiButton
          id={dataTestid}
          data-testid={dataTestid}
          aria-label={label}
          onClick={handleClickOpen}
          sx={btnStyles}
        >
          {children}
        </MuiButton>
      </Tooltip>
      {open && (
        <MuiMenu
          id={menuId}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          slotProps={{
            list: {
              'aria-labelledby': dataTestid,
            },
          }}
        >
          {options.map(op => (
            <MuiMenuItem
              key={op.value?.toString()}
              selected={op.value === value}
              onClick={() => handleClickOption(op.value)}
            >
              {op.label}
            </MuiMenuItem>
          ))}
        </MuiMenu>
      )}
    </>
  );
};
