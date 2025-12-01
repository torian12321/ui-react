/**
 * Declare the types for the icons from @mui/icons-material to be used in the project
 * This is necessary to avoid type errors when using the icons in the project
 */
declare module '@mui/icons-material/*' {
  import type { ComponentType } from 'react';
  import type { SvgIconProps } from '@mui/material/SvgIcon';

  const Icon: ComponentType<SvgIconProps> & { muiName: string };
  export default Icon;
}

declare module '@mui/icons-material' {
  import type { ComponentType } from 'react';
  import type { SvgIconProps } from '@mui/material/SvgIcon';

  export type SvgIconComponent = ComponentType<SvgIconProps>;
}
