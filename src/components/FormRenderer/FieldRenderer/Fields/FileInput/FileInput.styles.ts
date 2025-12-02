import type { SxProps, Theme } from '@mui/material';

export const fileInputStyles: SxProps<Theme> = {
  width: '100%',
  padding: '1rem',
  boxSizing: 'border-box',
  border: '2px dashed  #ccc',
  textAlign: 'center',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  '& .MuiButton-root, & .MuiIconButton-root': {
    position: 'absolute',
    top: '0.5rem',
    right: '0.5rem',
  },
  '& .MuiLinearProgress-root': {
    position: 'absolute',
    bottom: 0,
    width: 'calc(100% - 2rem)',
  },
  '& .MuiFormHelperText-root': {
    position: 'absolute',
    bottom: '-1.3rem',
    textAlign: 'center',
    width: 'calc(100% - 2rem)',
    color: theme => theme.palette.error.main,
  },
};

export const filesToUploadStyles: SxProps<Theme> = {
  display: 'flex',
  width: 'calc(100% - 40px)',
  fontSize: '14px',
  mt: '4px',
  '&.error': {
    color: theme => theme.palette.error.main,
  },
  '& .iconwrap': {
    display: 'flex',
    height: '100%',
    cursor: 'pointer',
    '&:hover': {
      color: theme => theme.palette.action.disabled,
    },
  },
};

// DataGridFilter Styles
export const placeholderStyles = (error?: boolean): SxProps<Theme> => ({
  fontSize: theme => theme.typography.body2,
  width: 'calc(100% - 40px)',
  textAlign: 'left',
  color: theme => (error ? theme.palette.error.main : 'initial'),
});
