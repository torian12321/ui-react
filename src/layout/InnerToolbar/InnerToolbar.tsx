import type { JSX } from 'react';
import MuiAppBar from '@mui/material/AppBar';
import MuiToolbar from '@mui/material/Toolbar';

import { useCombineSxStyles } from 'src/utils';

import { Dropdown } from './Dropdown';
import { Body } from './InnerToolbar.Body';
import { Header } from './InnerToolbar.Header';
import { toolbarStyles, wrapperStyles } from './InnerToolBar.styles';
import type { InnerToolBarProps } from './InnerToolbar.types';

export const InnerToolBar = ({
  children,
  'data-testid': dataTestid,
  sx,
}: InnerToolBarProps): JSX.Element => {
  const sxStyles = useCombineSxStyles(wrapperStyles, sx);

  return (
    <MuiAppBar data-testid={dataTestid} sx={sxStyles}>
      <MuiToolbar sx={toolbarStyles}>{children}</MuiToolbar>
    </MuiAppBar>
  );
};

InnerToolBar.Header = Header;
InnerToolBar.Body = Body;
InnerToolBar.Dropdown = Dropdown;
