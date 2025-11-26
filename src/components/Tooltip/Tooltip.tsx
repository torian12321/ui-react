import type { JSX, PropsWithChildren } from 'react';
import MuiBox from '@mui/material/Box';
import MuiTooltip from '@mui/material/Tooltip';

import { tooltipStylesByType } from './Tooltip.styles';
import type { TooltipProps } from './Tooltip.types';

export const Tooltip = ({
  children,
  title = '',
  type = 'default',
  placement,
  sxContent,
}: PropsWithChildren<TooltipProps>): JSX.Element => (
  <MuiTooltip
    arrow
    title={title}
    placement={placement}
    PopperProps={{
      sx: tooltipStylesByType[type],
    }}
  >
    <MuiBox sx={sxContent}>{children}</MuiBox>
  </MuiTooltip>
);
