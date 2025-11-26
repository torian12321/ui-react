import { useRef } from 'react';

import type { AccordionRef } from './Accordion.types';

export const useAccordionRef = () => useRef<AccordionRef>(null);
