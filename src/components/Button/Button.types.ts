import type { ButtonHTMLAttributes } from 'react';

export type ButtonProps = {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** HTML button type */
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Click handler */
  onClick?: VoidFunction;
};
