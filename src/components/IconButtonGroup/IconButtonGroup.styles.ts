import type { SxProps, Theme } from '@mui/material/styles';

import type { Orientation } from './IconButtonGroup.types';

export const wrapperStyles = (
  orientation: Orientation = 'row',
): SxProps<Theme> => ({
  display: 'flex',
  flexDirection: orientation,
  flexWrap: 'nowrap',
  alignItems: 'flex-start',
  gap: 1,
  padding: 0,
});
