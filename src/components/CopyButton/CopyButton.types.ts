import type { ComponentWithStyles, ComponentWithTestId } from 'src/types';

export type CopyButtonProps = ComponentWithTestId &
  ComponentWithStyles & {
    /** The text to be copied to the clipboard */
    text: string;
    disabled?: boolean;
  };
