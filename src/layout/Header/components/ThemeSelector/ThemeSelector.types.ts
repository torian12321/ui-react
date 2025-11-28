import type { ComponentWithTestId } from 'src/types';
import type { AppThemeNames } from 'src/types/app.types';

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
