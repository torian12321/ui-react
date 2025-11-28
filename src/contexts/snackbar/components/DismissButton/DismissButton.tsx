import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { closeSnackbar } from 'notistack';

import type { DismissButtonProps } from './DismissButton.types';

export const DismissButton = ({ id, show = true }: DismissButtonProps) => {
  if (!show) return null;

  return (
    <IconButton
      size='small'
      onClick={() => closeSnackbar(id)}
      aria-label='close'
    >
      <CloseIcon fontSize='small' />
    </IconButton>
  );
};
