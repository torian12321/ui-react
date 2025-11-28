import type { SxProps, Theme } from '@mui/material';
import { keyframes } from '@mui/material/styles';

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;

export const wrapperStyles: SxProps<Theme> = {
  display: 'block',
  fontSize: '12px',
};

export const circleStyles: SxProps<Theme> = {
  width: '1em',
  height: '1em',
  border: theme => `5px solid ${theme.palette.grey[200]}`,
  borderTopColor: theme => theme.palette.primary.main,
  borderRadius: '50%',
  animation: `${rotate} 1.5s linear infinite`,
};
