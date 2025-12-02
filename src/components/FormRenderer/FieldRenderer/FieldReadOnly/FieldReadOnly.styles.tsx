import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap-reverse',
  justifyContent: 'space-evenly',
  lineHeight: 1.5,
  minHeight: 28,
  color: 'rgba(0, 0, 0, 0.6);',
});

export const Content = styled('div')({
  whiteSpace: 'pre-line',
  overflow: 'auto',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  maxHeight: 80,
});
