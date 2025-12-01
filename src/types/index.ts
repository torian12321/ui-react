import type { SxProps, Theme } from '@mui/material/styles';

export type AppLanguages = 'en' | 'es';
export type AppThemeNames =
  // 360Base themes (legacy)
  | 'light'
  | 'dark'
  // RWS themes (new)
  | 'rws'
  | 'rwsDark'
  // Color themes
  | 'pink'
  | 'green'
  | 'blue'
  // Client themes
  | 'propylon'
  | 'sc'
  | 'ny';

export type ComponentWithTestId = {
  'data-testid'?: string;
};

export type MuiStyles = SxProps<Theme> | SxProps;

/** The component should be ready for external styling attributes */
export type ComponentWithStyles = {
  sx?: MuiStyles;
};
