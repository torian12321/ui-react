import type { JSX, MouseEvent } from 'react';
import DefaultIcon from '@mui/icons-material/Add';
import MuiBox from '@mui/material/Box';

import { useCombineSxStyles } from 'src/utils';

import { Tooltip } from '../Tooltip';
import { btnStyles } from './Accordion.styles';
import type { IconButtonProps } from './Accordion.types';

export const AccordionIconButton = ({
  'data-testid': dataTestid,
  label,
  icon,
  sx,
  disabled = false,
  highlighted = false,
  onClick,
}: IconButtonProps): JSX.Element | null => {
  const sxBtn = useCombineSxStyles(btnStyles, sx);
  const IconComponent = icon ?? DefaultIcon;

  const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    // Prevent the event from bubbling up to the parent accordion and triggering the open/close state
    event.stopPropagation();
    onClick(event);
  };

  return (
    <Tooltip title={label}>
      <MuiBox
        data-testid={dataTestid}
        data-highlighted={highlighted}
        component='button'
        sx={sxBtn}
        aria-label={label}
        disabled={disabled}
        onClick={handleOnClick}
      >
        <IconComponent fontSize='small' />
      </MuiBox>
    </Tooltip>
  );
};
