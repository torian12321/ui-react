import type { JSX, PropsWithChildren } from 'react';
import MuiButton from '@mui/material/Button';

import type { ButtonProps } from './Button.types';
import { ButtonGroup } from './ButtonGroup';

export const Button = ({
  children,
  'data-testid': dataTestid,
  type = 'button',
  size = 'medium',
  form,
  sx,
  primary = false,
  outline = false,
  fullWidth = false,
  disabled = false,
  loading = false,
  show = true,
  onClick,
  startIcon,
}: PropsWithChildren<ButtonProps>): JSX.Element | null => {
  const isDisabled = loading || disabled;

  if (!show) return null;

  const handleOnClick = () => {
    if (!isDisabled && onClick) {
      onClick();
    }
  };

  return (
    <MuiButton
      data-testid={dataTestid}
      variant={outline ? 'outlined' : 'contained'}
      type={type}
      form={form}
      color={primary ? 'primary' : 'inherit'}
      size={size}
      disabled={isDisabled}
      loading={loading}
      onClick={handleOnClick}
      fullWidth={fullWidth}
      disableElevation
      sx={sx}
      startIcon={startIcon}
    >
      {children}
    </MuiButton>
  );
};

Button.Group = ButtonGroup;
