import type { TypeFromObject } from 'src/types/utils';

export type FieldWrapperProps = {
  name: string;
  showLabel?: boolean;
};

export type LabelProps = {
  name: string;
  label: string;
  infoMessage?: string;
  required?: boolean;
};

export const MESSAGE_SEVERITY = {
  DEFAULT: 'default',
  SUCCESS: 'success',
  INFO: 'info',
  ERROR: 'error',
  WARNING: 'warning',
} as const;
export type MessageSeverity = TypeFromObject<typeof MESSAGE_SEVERITY>;

export type Message = {
  message: string;
  severity?: MessageSeverity;
};

export type HelperTextProps = {
  messages?: Message[];
  showMessages?: boolean;
};
