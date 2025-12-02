import type { SxProps, Theme } from '@mui/material/styles';

export const menuStyles: SxProps<Theme> = {
  '& .MuiPaper-root': {
    borderRadius: 1,
    marginTop: theme => theme.spacing(1),
    minWidth: 180,
    boxShadow: theme => theme.shadows[2],
  },
};
