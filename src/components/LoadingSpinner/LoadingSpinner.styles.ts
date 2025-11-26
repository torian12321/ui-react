import { keyframes, styled } from '@mui/material/styles';

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;

export const Wrapper = styled('div')({
  display: 'block',
  fontSize: '12px',
});

export const Circle = styled('div')(({ theme }) => ({
  width: '1em',
  height: '1em',
  border: `5px solid ${theme.palette.grey[200]}`,
  borderTopColor: theme.palette.primary.main,
  borderRadius: '50%',
  animation: `${rotate} 1.5s linear infinite`,
}));
