import type { JSX, MouseEvent } from 'react';
import MuiIconArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MuiIconArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MuiButton from '@mui/material/Button';

import { useLocalization } from 'src/localization';

import { MENU_ID, SELECTOR_BUTTON_ID } from '../../constants';
import { buttonStyles } from './ButtonSelector.styles';
import type { ButtonSelectorProps } from './ButtonSelector.types';

export const ButtonSelector = ({
  open = false,
  loading = false,
  disabled = false,
  onClick,
}: ButtonSelectorProps): JSX.Element => {
  const l10n = useLocalization();

  const handleOnClick = (event: MouseEvent<HTMLElement>) => {
    onClick(event.currentTarget);
  };

  return (
    <MuiButton
      id={SELECTOR_BUTTON_ID}
      data-testid='customizations-selector-button'
      aria-haspopup='true'
      aria-controls={open ? MENU_ID : undefined}
      aria-expanded={open ? 'true' : undefined}
      variant='contained'
      disableElevation
      size='small'
      sx={buttonStyles}
      loading={loading}
      disabled={disabled}
      onClick={handleOnClick}
      endIcon={open ? <MuiIconArrowUpIcon /> : <MuiIconArrowDownIcon />}
    >
      {l10n('components.buttonCustomizations.selectorLabel')}
    </MuiButton>
  );
};
