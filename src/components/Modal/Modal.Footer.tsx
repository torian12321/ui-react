import type { JSX, PropsWithChildren } from 'react';
import MuiDialogActions from '@mui/material/DialogActions';
import MuiDivider from '@mui/material/Divider';

import { useCombineSxStyles } from 'src/utils';

import { DATA_TEST } from './constants';
import { footerStyles } from './Modal.styles';
import { ModalFooterProps } from './Modal.types';

export const ModalFooter = ({
  children,
  sx = {},
}: PropsWithChildren<ModalFooterProps>): JSX.Element => {
  const sxStyles = useCombineSxStyles(footerStyles, sx);

  return (
    <>
      <MuiDivider />
      <MuiDialogActions data-testid={DATA_TEST.FOOTER} sx={sxStyles}>
        {children}
      </MuiDialogActions>
    </>
  );
};
