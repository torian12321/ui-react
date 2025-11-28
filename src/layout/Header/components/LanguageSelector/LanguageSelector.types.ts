import type { AppLanguages, ComponentWithTestId } from 'src/types';

export type LanguageOptionDetails = {
  label: string;
  value: AppLanguages;
};

export type LanguageOptions = AppLanguages | LanguageOptionDetails;

export type LanguageSelectorProps = ComponentWithTestId & {
  show?: boolean;
  showIcon?: boolean;
  options?: LanguageOptions[];
  onChange?: (value: AppLanguages) => void;
};
