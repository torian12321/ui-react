import type {
  ComponentWithStyles,
  ComponentWithTestId,
  MuiStyles,
} from 'src/types';

export type LabeledContentProps = ComponentWithTestId &
  ComponentWithStyles & {
    label?: string;
    sxLabel?: MuiStyles;
    inlined?: boolean;
  };
