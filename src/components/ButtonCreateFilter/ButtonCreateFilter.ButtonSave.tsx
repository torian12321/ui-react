import type { JSX } from 'react';
import MuiSaveIcon from '@mui/icons-material/Save';
import MuiIconButton from '@mui/material/IconButton';
import MuiInputAdornment from '@mui/material/InputAdornment';

import { Tooltip } from 'src/components';
import { useLocalization } from 'src/localization';

import { buttonSaveStyle } from './ButtonCreateFilter.styles';
import type { ButtonSaveProps } from './ButtonCreateFilter.types';
import { DATA_TEST } from './dataTest';

export const ButtonSave = ({
  disabled = false,
  onClick,
}: ButtonSaveProps): JSX.Element => {
  const l10n = useLocalization();
  const helperText = l10n('common.actions.save');

  return (
    <MuiInputAdornment position='end'>
      <Tooltip title={helperText}>
        <MuiIconButton
          aria-label={helperText}
          onClick={onClick}
          disabled={disabled}
          sx={buttonSaveStyle}
          data-testid={DATA_TEST.BUTTON_SAVE}
        >
          <MuiSaveIcon />
        </MuiIconButton>
      </Tooltip>
    </MuiInputAdornment>
  );
};
