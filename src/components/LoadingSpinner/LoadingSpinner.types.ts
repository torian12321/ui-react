import type { ComponentWithStyles, ComponentWithTestId } from '../../types';

export type LoadingSpinnerProps = ComponentWithTestId &
  ComponentWithStyles & {
    show?: boolean;
  };
