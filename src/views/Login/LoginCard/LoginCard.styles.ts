import type { SxProps, Theme } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

export const Card = styled('div')(({ theme }) => ({
  width: '600px',
  padding: '3rem',
  background: theme.palette.background.paper,
  border: '1px solid',
  borderColor: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 6px 8px rgb(0 0 0 / 25%)',
  textAlign: 'center',
}));

export const logoStyles: SxProps<Theme> = {
  width: '400px',
  margin: '2.5rem auto auto auto',
  display: 'block',
};

export const Title = styled('h3')(({ theme }) => ({
  color: alpha(theme.palette.text.primary, 0.6),
  marginBottom: '2rem !important',
  fontWeight: 500,
  fontSize: '1.25rem',

  '&::after': {
    background: `radial-gradient(${alpha(theme.palette.text.primary, 0.6)} 30%, transparent 80%)`,
    content: '" "',
    display: 'block',
    height: '2px',
    margin: ' 0 auto',
    width: '70%',
  },
}));
