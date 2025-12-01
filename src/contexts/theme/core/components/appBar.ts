import type { Components, Theme } from '@mui/material/styles';

const MuiAppBar: Components<Theme>['MuiAppBar'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      background: theme.palette.background.paper,
    }),
  },
};

export const appBar = {
  MuiAppBar,
};
