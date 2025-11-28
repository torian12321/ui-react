import type { LoginCardProps } from './LoginCard';

export type LoginProps = LoginCardProps & {
  appName?: string;
  disabled?: boolean;
};
