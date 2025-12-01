import type { JSX, PropsWithChildren } from 'react';
import MuiDialogContent from '@mui/material/DialogContent';

import { LoadingBar } from 'src/components';
import { combineSxStyles } from 'src/utils';

import { DATA_TEST } from './constants';
import { bodyStyles } from './Modal.styles';
import type { ModalBodyProps } from './Modal.types';

export const ModalBody = ({
  children,
  loadingContent = false,
  sx = {},
}: PropsWithChildren<ModalBodyProps>): JSX.Element => (
  <MuiDialogContent
    data-testid={DATA_TEST.BODY}
    sx={combineSxStyles(bodyStyles, sx)}
  >
    {loadingContent ? <LoadingBar /> : children}
  </MuiDialogContent>
);
