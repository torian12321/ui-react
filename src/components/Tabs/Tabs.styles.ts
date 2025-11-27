import type { SxProps, Theme } from '@mui/material';

export const wrapperStyles: SxProps<Theme> = {
  width: '100%',
};

export const headerWrapperStyles: SxProps<Theme> = {
  borderBottom: 1,
  borderColor: 'divider',
  background: theme => theme.palette.background.default,
};

export const tabsStyles: SxProps<Theme> = {
  height: 40,
  displayPrint: 'none',
  minHeight: 40,
  background: theme => theme.palette.background.paper,

  [`@media print`]: {
    display: 'none',
    height: 0,
  },
};

export const tabsLabelStyles: SxProps<Theme> = {
  textTransform: 'none',
};

export const tabPanelWrapperStyles: SxProps<Theme> = {
  background: theme => theme.palette.background.paper,
};

export const tabPanelStyles: SxProps<Theme> = {
  display: 'flex',
  displayPrint: 'table',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
  gap: 1.5,

  justifyContent: 'flex-start',
  paddingTop: 2,
};
