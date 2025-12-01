import type { SxProps, Theme } from '@mui/material';

export const fieldsWrapperStyles: SxProps<Theme> = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  gap: 1,
  alignItems: 'center',
};

// line divider between inputs
export const dividerStyles: SxProps<Theme> = {
  display: 'inline-block',
  width: 0,
  padding: `0 4px`,
  borderTop: '2px solid',
  borderColor: theme => theme.palette.divider,
};
