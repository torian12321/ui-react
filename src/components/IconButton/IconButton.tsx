import type { JSX } from 'react';
import DefaultIcon from '@mui/icons-material/PlaylistAdd';
import MuiBox from '@mui/material/Box';

import { LoadingSpinner, Tooltip } from 'src/components';
import { useCombineSxStyles } from 'src/utils';

import {
  btnStyles,
  spinnerStyles,
  tooltipContentStyles,
} from './IconButton.styles';
import type { IconButtonProps } from './IconButton.types';

export const IconButton = ({
  id,
  'data-testid': dataTestid,
  label,
  icon,
  sx,
  disabled = false,
  show = true,
  isLoading = false,
  onClick,
}: IconButtonProps): JSX.Element | null => {
  const sxBtn = useCombineSxStyles(btnStyles, sx);
  const isDisabled = disabled || isLoading;
  const IconComponent = icon ?? DefaultIcon;

  if (!show) return null;

  return (
    <Tooltip title={label} sxContent={tooltipContentStyles}>
      <MuiBox
        id={id}
        data-testid={dataTestid}
        component='button'
        sx={sxBtn}
        aria-label={label}
        disabled={isDisabled}
        onClick={onClick}
      >
        <IconComponent fontSize='small' />
        {isLoading && <LoadingSpinner sx={spinnerStyles} />}
      </MuiBox>
    </Tooltip>
  );
};
