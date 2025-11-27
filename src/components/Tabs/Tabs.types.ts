import type SvgIcon from '@mui/material/SvgIcon';

import type { ComponentWithStyles, MuiStyles } from 'src/types';

export type TabLabelDetails = {
  id: string;
  label: string;
  /** Icon from "@mui/icons-material" */
  icon?: typeof SvgIcon;
  disabled?: boolean;
};

export type TabsProps<T = string> = {
  id?: string;
  /** ID of the active tab */
  activeTab?: T | null;
  /** Custom styles for the content of the tab panel */
  sxContent?: MuiStyles;
  labels?: (TabLabelDetails | string)[];
  onChange: (tabId: T) => void;
};

export type TabPanelProps = ComponentWithStyles & {
  tabsId: string;
  index: number;
  hidden?: boolean;
};
