import MuiBox from '@mui/material/Box';
import { StoryFn } from '@storybook/react-vite';

export const StoryDecorator = (
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Story: StoryFn,
) => (
  <MuiBox sx={{ minWidth: 800 }}>
    <Story />
  </MuiBox>
);
