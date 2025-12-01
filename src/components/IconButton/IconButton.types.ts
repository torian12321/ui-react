import type { MouseEvent } from 'react';
import type SvgIcon from '@mui/material/SvgIcon';

import type { ComponentWithStyles, ComponentWithTestId } from 'src/types';

export type IconButtonProps = ComponentWithTestId &
  ComponentWithStyles & {
    id?: string;
    label: string;
    /** Icon from "@mui/icons-material" */
    icon?: typeof SvgIcon;
    disabled?: boolean;
    show?: boolean;
    isLoading?: boolean;
    onClick: (event?: MouseEvent<HTMLButtonElement>) => void;
  };
