import type { SxProps, Theme } from '@mui/material/styles';

export type AppLanguages = 'en' | 'es';
export type AppThemeNames =
  | 'light'
  | 'dark'
  | 'pink'
  | 'green'
  | 'blue'
  | 'sc'
  | 'propylon';

export type ComponentWithTestId = {
  'data-testid'?: string;
};

export type MuiStyles = SxProps<Theme> | SxProps;

/** The component should be ready for external styling attributes */
export type ComponentWithStyles = {
  sx?: MuiStyles;
};
