import type { JSX } from 'react';

import type { ComponentWithStyles, ComponentWithTestId } from 'src/types';

export const BUTTON_SIZES = ['small', 'medium', 'large'] as const;

export type ButtonProps = ComponentWithTestId &
  ComponentWithStyles & {
    size?: (typeof BUTTON_SIZES)[number];
    type?: 'submit' | 'reset' | 'button';
    primary?: boolean;
    outline?: boolean;
    fullWidth?: boolean;
    form?: string;
    disabled?: boolean;
    loading?: boolean;
    show?: boolean;
    onClick?: VoidFunction;
    startIcon?: JSX.Element;
  };

export type ButtonGroupProps = ComponentWithStyles & {
  'data-testid'?: string;
  direction?: 'row' | 'column';
  align?: 'start' | 'end';
};
