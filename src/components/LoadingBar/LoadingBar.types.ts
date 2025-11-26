import type { ComponentWithStyles, ComponentWithTestId } from 'src/types';

export type LoadingBarProps = ComponentWithTestId &
  ComponentWithStyles & {
    show?: boolean;
  };
