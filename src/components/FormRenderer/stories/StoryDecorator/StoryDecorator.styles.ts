import type { SxProps, Theme } from '@mui/material/styles';

export const codeStyles: SxProps<Theme> = {
  fontSize: theme => theme.typography.pxToRem(12),
  lineHeight: 1.2,
  background: '#1d1e22',
  color: '#f1ffff',
  borderRadius: '8px',
  padding: '16px',
  overflow: 'auto',
  maxHeight: '500px',
};

export const tabBodyStyles: SxProps<Theme> = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  gap: theme => theme.spacing(3.5),

  '& > *': {
    margin: '0 auto',
    minWidth: '200px',
    maxWidth: '840px',
    flexGrow: 1,
  },
};
