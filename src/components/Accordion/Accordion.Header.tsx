import type { JSX, PropsWithChildren } from 'react';
import MuiExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiBox from '@mui/material/Box';
import MuiTypography from '@mui/material/Typography';

import { useCombineSxStyles } from '../../utils/useCombineSxStyles';
import {
  headerActionsStyles,
  headerStyles,
  headerTitleStyles,
  headerWrapperStyles,
} from './Accordion.styles';
import type { AccordionHeaderProps } from './Accordion.types';
import { AccordionIconButton } from './IconButton';

export const AccordionHeader = ({
  children,
  title,
  sx,
}: PropsWithChildren<AccordionHeaderProps>): JSX.Element => {
  const sxStyles = useCombineSxStyles(headerWrapperStyles, sx);

  return (
    <MuiAccordionSummary expandIcon={<MuiExpandMoreIcon />} sx={sxStyles}>
      <MuiBox sx={headerStyles}>
        <MuiTypography component='span' sx={headerTitleStyles}>
          {title}
        </MuiTypography>
        <MuiBox sx={headerActionsStyles}>{children}</MuiBox>
      </MuiBox>
    </MuiAccordionSummary>
  );
};

AccordionHeader.Button = AccordionIconButton;
