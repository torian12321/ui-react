import type { JSX } from 'react';
import MuiChip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';

import { chipStyles } from './Chip.styles';
import type { ChipProps } from './Chip.types';
import { ChipsList } from './ChipsList';
import { useGetLabelText } from './useGetLabelText';

export const Chip = ({
  'data-testid': dataTestid,
  label,
  onDelete,
  color,
  bgColor,
}: ChipProps): JSX.Element => {
  const theme = useTheme();
  const labelTxt = useGetLabelText(label);

  const textColor = color ?? theme.palette.primary.main;
  const backgrColor = bgColor ?? '#F0F3F8';

  return (
    <MuiChip
      data-testid={dataTestid}
      size='small'
      label={labelTxt}
      onDelete={onDelete}
      variant='outlined'
      sx={chipStyles({ color: textColor, bgColor: backgrColor })}
    />
  );
};

Chip.List = ChipsList;
