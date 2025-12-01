/**
 * Declare the types for the icons from @mui/icons-material to be used in the project
 * This is necessary to avoid type errors when using the icons in the project
 */
declare module '@mui/icons-material/*' {
  import { ComponentType } from 'react';
  import { SvgIconProps } from '@mui/material/SvgIcon';

  const Icon: ComponentType<SvgIconProps> & { muiName: string };
  export default Icon;
}
