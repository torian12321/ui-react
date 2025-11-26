import type { MouseEvent, ReactElement } from 'react';
import type SvgIcon from '@mui/material/SvgIcon';

import type { ComponentWithStyles, ComponentWithTestId } from '../../types';

export type AccordionGroupProps = ComponentWithStyles &
  ComponentWithTestId & {
    children: ReactElement<AccordionProps> | ReactElement<AccordionProps>[];
  };

type AccordionChildrenElement = ReactElement<
  AccordionHeaderProps | AccordionBodyProps
>;
export type AccordionProps = ComponentWithStyles &
  ComponentWithTestId & {
    children: AccordionChildrenElement | AccordionChildrenElement[];
    /** Whether the accordion is disabled */
    disabled?: boolean;
    highlighted?: boolean;
    initialExpanded?: boolean;
  };

export type AccordionHeaderProps = ComponentWithStyles & {
  title?: string;
};

export type AccordionBodyProps = ComponentWithStyles;

export type IconButtonProps = ComponentWithTestId &
  ComponentWithStyles & {
    label: string;
    /** Icon from "@mui/icons-material" */
    icon?: typeof SvgIcon;
    disabled?: boolean;
    highlighted?: boolean;
    onClick: (event?: MouseEvent<HTMLButtonElement>) => void;
  };

/** Use the `ref` prop to access internal <Accordion /> actions. */
export type AccordionRef = {
  expand: () => void;
  collapse: () => void;
  toggle: () => void;
  isOpen: boolean;
};
