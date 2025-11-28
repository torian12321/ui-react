import type { AppThemeNames, ComponentWithTestId } from 'src/types';

export type ThemeOptionDetails = {
  label: string;
  value: AppThemeNames;
};

export type ThemeOptions = AppThemeNames | ThemeOptionDetails;

export type ThemeSelectorProps = ComponentWithTestId & {
  show?: boolean;
  showIcon?: boolean;
  options?: ThemeOptions[];
  onChange?: (value: AppThemeNames) => void;
};
