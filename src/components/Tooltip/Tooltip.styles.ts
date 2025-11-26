import type { SxProps, Theme } from '@mui/material';

import type { TooltipTypes } from './Tooltip.types';

const tooltipStyles: SxProps<Theme> = {
  fontSize: (theme: Theme) => theme.typography.caption.fontSize,
  displayPrint: 'none',
};

const tooltipWarningStyles: SxProps<Theme> = {
  ...tooltipStyles,

  '.MuiTooltip-tooltip': {
    background: (theme: Theme) => theme.palette.warning.main,
    color: (theme: Theme) => theme.palette.warning.contrastText,
  },
  '.MuiTooltip-arrow': {
    color: (theme: Theme) => theme.palette.warning.main,
  },
};

const tooltipErrorStyles: SxProps<Theme> = {
  ...tooltipStyles,

  '.MuiTooltip-tooltip': {
    background: (theme: Theme) => theme.palette.error.main,
    color: (theme: Theme) => theme.palette.error.contrastText,
  },
  '.MuiTooltip-arrow': {
    color: (theme: Theme) => theme.palette.error.main,
  },
};

export const tooltipStylesByType: Record<TooltipTypes, SxProps<Theme>> = {
  default: tooltipStyles,
  warning: tooltipWarningStyles,
  error: tooltipErrorStyles,
};
