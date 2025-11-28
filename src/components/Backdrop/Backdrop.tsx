import MuiBackdrop from '@mui/material/Backdrop';
import MuiCircularProgress from '@mui/material/CircularProgress';
import MuiTypography from '@mui/material/Typography';

import { backdropStyle, messageStyle } from './Backdrop.styles';
import type { BackdropProps } from './Backdrop.types';

export const Backdrop = ({ show = false, message }: BackdropProps) => (
  <MuiBackdrop sx={backdropStyle} open={show}>
    <MuiCircularProgress color='inherit' />

    {message && <MuiTypography sx={messageStyle}>{message}</MuiTypography>}
  </MuiBackdrop>
);
