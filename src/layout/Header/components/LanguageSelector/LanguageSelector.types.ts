import type { ComponentWithTestId } from 'src/types';
import type { AppLanguages } from 'src/types/app.types';

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
