import type { JSX, PropsWithChildren } from 'react';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

import type { AccordionBodyProps } from './Accordion.types';

export const AccordionBody = ({
  children,
  sx,
}: PropsWithChildren<AccordionBodyProps>): JSX.Element => (
  <MuiAccordionDetails sx={sx}>{children}</MuiAccordionDetails>
);
