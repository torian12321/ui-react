import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')({
  flexGrow: 1,
});

export const ErrorMessage = styled('h1')(({ theme }) => ({
  textAlign: 'center',
  color: theme.palette.error.main,
}));

export const ErrorDetails = styled('details')({
  whiteSpace: 'pre-wrap',
});
