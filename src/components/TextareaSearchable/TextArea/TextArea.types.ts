import type { ElementType } from 'react';
import type { SxProps, Theme } from '@mui/material';

/** Config to override default highlight component */
export type HighlightConfig = {
  /** Component to override default HTML highlight component */
  component?: ElementType;
  /** Styles to override default highlight component */
  styles?: SxProps<Theme>;
  /** Styles to override default highlight component when focused */
  focusedStyles?: SxProps<Theme>;
};

export type TextPart = {
  text: string;
  highlight?: boolean;
};

export type TextAreaProps = {
  /** Text to be searched */
  textParts?: TextPart[];
  activeMatchIndex?: number;
  /** Default query use in search */
  caseSensitive?: boolean;
  highlightConfig?: HighlightConfig;
};
