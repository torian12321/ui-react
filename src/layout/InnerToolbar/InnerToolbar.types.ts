import type { PropsWithChildren } from 'react';

import type { ComponentWithStyles, ComponentWithTestId } from 'src/types';

export type InnerToolBarProps = ComponentWithTestId &
  ComponentWithStyles &
  PropsWithChildren;

export type InnerToolBarHeaderProps = ComponentWithTestId &
  ComponentWithStyles &
  PropsWithChildren & {
    isLoading?: boolean;
  };

export type InnerToolBarBodyProps = ComponentWithTestId &
  ComponentWithStyles &
  PropsWithChildren;
