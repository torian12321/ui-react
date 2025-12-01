import type {
  ComponentWithStyles,
  ComponentWithTestId,
  MuiStyles,
} from 'src/types';

export type DocumentDisplayProps = ComponentWithTestId &
  ComponentWithStyles & {
    content?: string | TrustedHTML;
    /** Additional styles for the content container */
    sxContent?: MuiStyles;
  };
