import type { JSX } from 'react';
import MuiCloseIcon from '@mui/icons-material/Close';
import MuiButton from '@mui/material/Button';
import MuiDialogTitle from '@mui/material/DialogTitle';
import MuiGrid from '@mui/material/Grid';

import { Tooltip } from 'src/components';
import { useLocalization } from 'src/localization';

import { DATA_TEST } from './constants';
import {
  headerCloseIconStyles,
  headerStyles,
  headerTitleStyles,
} from './Modal.styles';
import type { ModalHeaderProps } from './Modal.types';

export const ModalHeader = ({
  title,
  onClose,
}: ModalHeaderProps): JSX.Element => {
  const l10n = useLocalization();

  return (
    <MuiGrid container sx={headerStyles} data-testid={DATA_TEST.HEADER}>
      <MuiDialogTitle sx={headerTitleStyles}>{title}</MuiDialogTitle>
      {onClose && (
        <Tooltip title={l10n('common.actions.close')}>
          <MuiButton
            sx={headerCloseIconStyles}
            onClick={onClose}
            data-testid={DATA_TEST.CLOSE_BUTTON}
          >
            <MuiCloseIcon />
          </MuiButton>
        </Tooltip>
      )}
    </MuiGrid>
  );
};
