import type { ComponentWithStyles, ComponentWithTestId } from 'src/types';

export type BreadcrumbsProps = ComponentWithTestId &
  ComponentWithStyles & {
    steps?: string[];
    isLoading?: boolean;
  };
