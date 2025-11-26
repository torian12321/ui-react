import type { JSX } from 'react';
import MuiBox from '@mui/material/Box';
import { useAutoAnimate } from '@formkit/auto-animate/react';

import { useCombineSxStyles } from 'src/utils';

import { groupStyles } from './Accordion.styles';
import type { AccordionGroupProps } from './Accordion.types';

/**
 * Component that groups accordions together.
 * When adding/removing accordions, the group will animate the children.
 */
export const AccordionGroup = ({
  children,
  'data-testid': dataTestid,
  sx,
}: AccordionGroupProps): JSX.Element => {
  const [parentRef] = useAutoAnimate();
  const sxStyles = useCombineSxStyles(groupStyles, sx);

  return (
    <MuiBox data-testid={dataTestid} ref={parentRef} sx={sxStyles}>
      {children}
    </MuiBox>
  );
};
