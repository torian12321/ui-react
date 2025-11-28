import type { VariantType } from 'notistack';
import { enqueueSnackbar } from 'notistack';

import { isString } from '@torian12321/js-utils/typeChecker';

import { CopyButton } from 'src/components';

import { DismissButton, MessagesList } from './components';

export const DEFAULT_MESSAGE_DURATION = 3000;

type Message = string | string[];
export type MessageOptions = {
  /** Duration in milliseconds */
  duration?: number;
  /** If true, the message will not be closed automatically */
  persist?: boolean;
  /** If true, the message will show a dismiss button */
  isDisabled?: boolean;
  /** Text to copy to clipboard. If provided, a copy button will be shown */
  textToCopy?: string;
};

/**
 * Returns the message to be displayed in the snackbar.
 * If the message is a string, it returns the string.
 * If the message is an array of strings, it returns a `<MessagesList />` component.
 */
const snackbarBodyMessage = (message: Message) => {
  if (isString(message)) {
    return message;
  }
  return <MessagesList messages={message} />;
};

/**
 * Generic function to display a message in the snackbar.
 * All different types of messages are handled by this function,
 * only the variant is different.
 * do not export this function, use the specialized one instead.
 */
const showMessage = (
  variant: VariantType,
  message: Message = '',
  options: MessageOptions = {},
) => {
  const {
    duration = DEFAULT_MESSAGE_DURATION,
    persist = false,
    isDisabled = true,
    textToCopy,
  } = options;

  // prevent hiding the dismiss button if the message is not closable
  const showDismissBtn = !(!isDisabled && !persist);

  enqueueSnackbar(snackbarBodyMessage(message), {
    variant,
    persist,
    autoHideDuration: duration,
    preventDuplicate: true,
    action: key => (
      <>
        {textToCopy && <CopyButton text={textToCopy} />}
        <DismissButton id={key} show={showDismissBtn} />
      </>
    ),
  });
};

export const showMessageInfo = (
  message: Message,
  options: MessageOptions = {},
) => {
  showMessage('info', message, options);
};

export const showMessageSuccess = (
  message: Message,
  options: MessageOptions = {},
) => {
  showMessage('success', message, options);
};

export const showMessageWarning = (
  message: Message,
  options: MessageOptions = {},
) => {
  showMessage('warning', message, options);
};

/**
 * Show an error message in the snackbar.
 * If the message is an Error object, it will show the error message.
 * Otherwise, it will show the message as a string.
 *
 * An error message will persist by default.
 */
export const showMessageError = (
  message: Message | Error,
  options: MessageOptions = {},
) => {
  if (message instanceof Error) {
    message = message.message;
  }

  const { persist = true, ...restOptions } = options;

  showMessage('error', message, {
    ...restOptions,
    persist,
  });
};
