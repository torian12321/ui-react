import type { SxProps, Theme } from '@mui/material/styles';
import { keyframes } from '@mui/material/styles';

export const wrapperStyles: SxProps<Theme> = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'flex-end',
  minHeight: '40px',
  gap: theme => theme.spacing(2),
  minWidth: 430,
};

const fieldFadeIn = keyframes`
  from { opacity: 0; top: 20px; }
  to   { opacity: 1; top: 0; }
`;

export const fieldWrapperStyles: SxProps<Theme> = {
  flexGrow: 1,
  animation: `${fieldFadeIn} .4s linear 1`,
};

export const fieldStyles: SxProps<Theme> = {
  flexGrow: 1,
  display: 'flex',

  '& .MuiInputBase-root': {
    fontSize: 13,
    background: theme => theme.palette.background.paper,
  },
  '& .MuiInputLabel-root': {
    fontSize: 12,
  },
};

export const buttonSaveStyle: SxProps<Theme> = {
  color: theme => theme.palette.primary.main,
  transition: 'color .4s',

  '&:disabled': {
    color: theme => theme.palette.action.disabled,
  },
};
