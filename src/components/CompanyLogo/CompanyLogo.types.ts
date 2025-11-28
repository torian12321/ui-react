import type { ComponentWithStyles } from 'src/types';

export type Size = 'small' | 'medium' | 'large';

export type CompanyLogoProps = ComponentWithStyles & {
  /** Set of preset sizes, for a custom size use the `sx` prop */
  size?: Size;
};
