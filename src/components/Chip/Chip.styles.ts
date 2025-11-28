import type { SxProps, Theme } from '@mui/material';

import type { ChipProps } from './Chip.types';

export const listStyles: SxProps<Theme> = {
  display: 'inline-flex',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
  listStyle: 'none',
  padding: 0,
  margin: 0,
  boxShadow: '0',
};

export const listItemStyles: SxProps<Theme> = {
  margin: theme => theme.spacing(0.5),
  lineHeight: 1,
};

export const chipStyles = ({
  color = '',
  bgColor = '',
}: Pick<ChipProps, 'color' | 'bgColor'>): SxProps<Theme> => ({
  fontWeight: 600,
  borderRadius: 1,
  height: 'auto',
  padding: 0.3,

  // Color styles
  backgroundColor: bgColor,
  color,
  '& .MuiChip-deleteIcon': {
    color: 'currentColor',
  },
  '& .MuiChip-deleteIcon:hover': {
    color: 'currentColor',
    opacity: 0.8,
  },
});
