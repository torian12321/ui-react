import MuiWarningIcon from '@mui/icons-material/Warning';
import { styled } from '@mui/material/styles';

export const Body = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'start',
  minHeight: '48px',
});

export const WarningIcon = styled(MuiWarningIcon)(({ theme }) => ({
  marginRight: '18px',
  color: theme.palette.warning.main,
}));

export const Text = styled('div')({
  flexGrow: 1,
});
