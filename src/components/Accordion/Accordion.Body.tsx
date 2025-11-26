import type { JSX, PropsWithChildren } from 'react';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

import { useCombineSxStyles } from 'src/utils';

import { bodyStyles } from './Accordion.styles';
import type { AccordionBodyProps } from './Accordion.types';

export const AccordionBody = ({
  children,
  sx,
}: PropsWithChildren<AccordionBodyProps>): JSX.Element => {
  const sxStyles = useCombineSxStyles(bodyStyles, sx);

  return <MuiAccordionDetails sx={sxStyles}>{children}</MuiAccordionDetails>;
};
