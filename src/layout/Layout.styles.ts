import { styled } from '@mui/material/styles';

export const LayoutWrapper = styled('div')({
  display: 'grid',
  gridTemplateAreas: `
    'header header header header header header'
    'menu main main main main main'
    'menu main main main main main'
  `,
  gridTemplateColumns: 'auto 1fr',
  gridTemplateRows: 'auto 1fr',
  height: '100vh',
  width: '100vw',
});

export const Content = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  flexGrow: 1,
  overflow: 'auto',

  display: 'inline-flex',
  flexDirection: 'column',
  gap: theme.spacing(2),

  padding: `${theme.spacing(1)} ${theme.spacing(3)}`,

  background: theme.palette.background.paper,
}));

/** Styles to use in Storybook only */
export const SbMockFiller = styled('div')({
  flexGrow: 1,
  padding: '6px',
  boxSizing: 'border-box',
  margin: '8px',
  border: '2px dashed',
  borderColor: 'yellow',
  background: '#ffa70057',
});
