import { ComponentWithTestId } from 'src/types';

export type HeaderProps = ComponentWithTestId & {
  title?: string;
  onClickMenuOpener?: VoidFunction;
};
