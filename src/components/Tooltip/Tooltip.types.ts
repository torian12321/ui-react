import type { MuiStyles } from 'src/types';

export type TooltipTypes = 'default' | 'warning' | 'error';

type TooltipPlacement =
  | 'bottom-end'
  | 'bottom-start'
  | 'bottom'
  | 'left-end'
  | 'left-start'
  | 'left'
  | 'right-end'
  | 'right-start'
  | 'right'
  | 'top-end'
  | 'top-start'
  | 'top';

export type TooltipProps = {
  /** Tooltip title. If not set, the tooltip will not be displayed */
  title?: string;
  type?: TooltipTypes;
  /** Custom styles for the content */
  sxContent?: MuiStyles;
  placement?: TooltipPlacement;
};
