import type { MouseEvent } from 'react';
import type { SvgIconComponent } from '@mui/icons-material';

import type { ComponentWithStyles, ComponentWithTestId } from 'src/types';

export type IconButtonProps = ComponentWithTestId &
  ComponentWithStyles & {
    id?: string;
    label: string;
    /** Icon from "@mui/icons-material" */
    icon?: SvgIconComponent;
    disabled?: boolean;
    show?: boolean;
    isLoading?: boolean;
    onClick: (event?: MouseEvent<HTMLButtonElement>) => void;
  };
