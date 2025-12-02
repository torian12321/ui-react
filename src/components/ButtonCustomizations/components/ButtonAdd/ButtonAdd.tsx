import type { JSX } from 'react';
import MuiIconAdd from '@mui/icons-material/Add';
import MuiButton from '@mui/material/Button';

import { Tooltip } from 'src/components';
import { useLocalization } from 'src/localization';

import { MODAL_ID } from '../../constants';
import { btnStyles } from './ButtonAdd.styles';
import type { ButtonAddProps } from './ButtonAdd.types';

export const ButtonAdd = ({
  open = false,
  disabled = false,
  onClick,
}: ButtonAddProps): JSX.Element => {
  const l10n = useLocalization();
  const tooltipText = !disabled
    ? l10n('components.buttonCustomizations.addLabel')
    : undefined;

  return (
    <Tooltip title={tooltipText}>
      <MuiButton
        data-testid='add-customization-button'
        aria-controls={open ? MODAL_ID : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        variant='contained'
        disableElevation
        size='small'
        sx={btnStyles}
        disabled={disabled}
        onClick={onClick}
      >
        <MuiIconAdd />
      </MuiButton>
    </Tooltip>
  );
};
