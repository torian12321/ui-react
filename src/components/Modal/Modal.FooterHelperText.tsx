import MuiBox from '@mui/material/Box';

import { useLocalization } from 'src/localization';

import { DATA_TEST } from './constants';
import { footerHelperTextStyles } from './Modal.styles';
import { FooterHelperTextProps } from './Modal.types';

export const FooterHelperText = ({
  show = false,
  message,
}: FooterHelperTextProps) => {
  const l10n = useLocalization();
  const caption = message ?? l10n('components.modal.footer.reviewForm');

  return show ? (
    <MuiBox
      sx={footerHelperTextStyles}
      component='span'
      data-testid={DATA_TEST.FOOTER_ERROR_MESSAGE}
    >
      {caption}
    </MuiBox>
  ) : null;
};
