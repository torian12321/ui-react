import type { SxProps, Theme } from '@mui/material';

import type { Size } from './CompanyLogo.types';

const widths: Record<Size, string> = {
  small: '64px',
  medium: '128px',
  large: '256px',
} as const;

export const getLogoStyles = (size: Size): SxProps<Theme> => ({
  width: widths[size],
});
