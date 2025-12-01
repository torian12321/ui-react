import type { JSX } from 'react';
import DefaultIcon from '@mui/icons-material/Search';
import MuiIconButton from '@mui/material/IconButton';

import { Tooltip } from 'src/components';

import { iconStyles } from './SearchBar.styles';
import type { IconProps } from './SearchBar.types';

export const Icon = ({
  icon,
  title,
  show = true,
  onClick,
}: IconProps): JSX.Element | null => {
  if (!show) return null;
  const IconComponent = icon ?? DefaultIcon;

  return (
    <Tooltip title={title}>
      <MuiIconButton sx={iconStyles} onClick={onClick} aria-label={title}>
        <IconComponent />
      </MuiIconButton>
    </Tooltip>
  );
};
