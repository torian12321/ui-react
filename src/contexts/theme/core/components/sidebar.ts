import type { Components, Theme } from '@mui/material/styles';

export const MuiDrawer: Components<Theme>['MuiDrawer'] = {
  styleOverrides: {
    paper: ({ theme }) => ({
      overflow: 'hidden',
      background: theme.palette.primary.dark,
    }),
  },
};

export const sidebar = {
  MuiDrawer,
};
