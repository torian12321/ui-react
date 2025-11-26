import type { SxProps, Theme } from '@mui/material';

import type { ButtonGroupProps } from './Button.types';

export const buttonGroupStyles = ({
  direction,
  align,
}: ButtonGroupProps): SxProps<Theme> => ({
  padding: 0,

  display: 'flex',
  gap: 1,
  alignItems: 'center',
  flexDirection: direction,
  justifyContent: `flex-${align}`,
});
