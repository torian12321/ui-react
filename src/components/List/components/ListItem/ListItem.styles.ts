import type { SxProps, Theme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';

export const wrapperStyles: SxProps<Theme> = {
  position: 'relative',
  minWidth: 100,
  width: '100%',
  zIndex: 0,
  listStyle: 'none',
  background: theme => theme.palette.background.paper,
  borderBottom: theme => `1px solid ${theme.palette.divider}`,
};

export const bodyStyles: SxProps<Theme> = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: '100%',

  '&:hover': {
    background: theme => theme.palette.action.hover,
  },
};

export const isDraggingStyles: SxProps<Theme> = {
  zIndex: 1,
  boxShadow: theme => theme.shadows[10],
};
export const isActiveStyles: SxProps<Theme> = {
  background: theme => alpha(theme.palette.primary.main, 0.1),

  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: 4,
    background: theme => theme.palette.primary.main,
  },
};

export const contentStyles: SxProps<Theme> = {
  width: '100%',
  height: '100%',
  p: 1,
};

export const handlerStyles: SxProps<Theme> = {
  display: 'flex',
  height: 36,
  paddingY: 1,
  paddingX: 0.5,
  alignItems: 'center',
  opacity: 0.5,
  cursor: 'grab',
  borderRadius: 1,
  transition: 'all 0.2s ease-in-out',
  alignSelf: 'center',

  svg: {
    fontSize: 16,
  },

  '&:hover': {
    opacity: 1,
    background: theme => theme.palette.action.hover,
  },
};
