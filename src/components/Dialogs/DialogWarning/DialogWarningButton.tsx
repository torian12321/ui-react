import type { JSX } from 'react';
import MuiButton from '@mui/material/Button';

import { LoadingSpinner } from 'src/components';

import type { ButtonProps } from './DialogWarningProps.types';

export const DialogButton = ({
  label,
  dataTestId,
  autoFocus = false,
  disabled = false,
  loading = false,
  onClick = () => undefined,
}: ButtonProps): JSX.Element => (
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
