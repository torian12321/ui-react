import MuiButton from '@mui/material/Button';

import { LoadingSpinner } from 'src/components';

import type { ButtonProps } from './DialogActionProps.types';

export const DialogButton = ({
  label,
  dataTestId,
  autoFocus = false,
  disabled = false,
  loading = false,
  onClick = () => undefined,
}: ButtonProps) => (
  <MuiButton
    title={label}
    // eslint-disable-next-line jsx-a11y/no-autofocus
    autoFocus={autoFocus}
    disabled={disabled || loading}
    onClick={onClick}
    data-testid={dataTestId}
  >
    {loading ? <LoadingSpinner /> : label}
  </MuiButton>
);
