import type { SvgIconComponent } from '@mui/icons-material';

import type { ComponentWithStyles, ComponentWithTestId } from 'src/types';

export type SearchBarProps = ComponentWithTestId &
  ComponentWithStyles & {
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    loading?: boolean;
    onChange: (value: string) => void;
    /** Action to be executed when the user presses the search button or the Enter key */
    onSearch: (value: string) => void;
    onClear?: VoidFunction;
    onSync?: VoidFunction;
  };

export type IconProps = {
  /** Icon from "@mui/icons-material" */
  icon: SvgIconComponent;
  title: string;
  show?: boolean;
  onClick?: VoidFunction;
};
