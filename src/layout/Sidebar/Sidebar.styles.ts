import MuiDrawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';

type WrapperProps = {
  open: boolean;
};
export const Wrapper = styled(MuiDrawer)<WrapperProps>(({ theme, open }) => ({
  gridArea: 'menu',
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',

  width: open ? 240 : theme.spacing(7),
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),

  '& > div': {
    position: 'initial',
  },
}));
