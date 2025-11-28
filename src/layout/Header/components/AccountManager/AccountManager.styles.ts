import type { SxProps, Theme } from '@mui/material';

export const wrapperStyles: SxProps<Theme> = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 0.5,
  fontSize: 16,
  color: theme => theme.palette.text.secondary,
};

export const accountLabelStyles: SxProps<Theme> = {
  flex: '0 1 auto',
  textTransform: 'capitalize',
};

export const avatarStyles: SxProps<Theme> = {
  width: 32,
  height: 32,
  fontSize: 16,
};

export const menuItemStyles: SxProps<Theme> = {
  minWidth: 160,
};
