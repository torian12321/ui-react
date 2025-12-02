import MuiBox from '@mui/material/Box';
import type { Decorator, StoryContext } from '@storybook/react-vite';

import type { TransferListProps } from '../TransferList.types';

export const StoryDecorator: Decorator<TransferListProps> = (
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Story,
  props: StoryContext<TransferListProps>,
) => (
  <MuiBox sx={{ minWidth: 800 }}>
    <Story {...props} />
  </MuiBox>
);
