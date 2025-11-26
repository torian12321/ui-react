import type { JSX } from 'react';
import { forwardRef, useImperativeHandle, useState } from 'react';
import MuiAccordion from '@mui/material/Accordion';

import { useCombineSxStyles } from 'src/utils';

import { wrapperStyles } from './Accordion.styles';
import type { AccordionProps, AccordionRef } from './Accordion.types';

export const Accordion = forwardRef<AccordionRef, AccordionProps>(
  (
    {
      children,
      'data-testid': dataTestid,
      sx,
      disabled = false,
      highlighted = false,
      initialExpanded = false,
    }: AccordionProps,
    ref,
  ): JSX.Element => {
    const [expanded, setExpanded] = useState(initialExpanded);
    const sxStyles = useCombineSxStyles(wrapperStyles, sx);

    // Expose the form actions to the parent component
    useImperativeHandle(
      ref,
      (): AccordionRef => ({
        expand: () => setExpanded(true),
        collapse: () => setExpanded(false),
        toggle: () => setExpanded(!expanded),
        isOpen: expanded,
      }),
    );

    const handleChange = (
      _event: React.SyntheticEvent,
      newExpanded: boolean,
    ) => {
      setExpanded(newExpanded);
    };

    return (
      <MuiAccordion
        square
        data-testid={dataTestid}
        data-highlighted={highlighted}
        disableGutters
        elevation={0}
        sx={sxStyles}
        disabled={disabled}
        expanded={expanded}
        onChange={handleChange}
      >
        {children}
      </MuiAccordion>
    );
  },
);
