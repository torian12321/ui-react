import type { PropsWithChildren } from 'react';
import { useEffect, useState } from 'react';

import {
  ErrorDetails,
  ErrorMessage,
  Wrapper,
} from './ErrorPageBoundary.styles';
import type { Props } from './ErrorPageBoundary.types';

/**
 * ErrorPageBoundary component
 *
 * This component catches and handles uncaught errors in its child components.
 * It displays an error message when an error occurs and calls the provided error handler.
 *
 * @param {React.ReactNode} children - The child components to be wrapped by the ErrorPageBoundary
 * @param {(message: string) => void} errorHandler - A function to handle errors with a custom message
 * @returns {React.ReactElement} The wrapped children or an error message
 */
export const ErrorPageBoundary = ({
  children,
  errorHandler,
}: PropsWithChildren<Props>): React.ReactNode => {
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const errorListener = (event: ErrorEvent) => {
      console.error('Uncaught error:', event.error);
      setError(event.error);

      if (errorHandler) {
        errorHandler('Something went wrong!');
      }
    };

    window.addEventListener('error', errorListener);

    return () => {
      window.removeEventListener('error', errorListener);
    };
  }, [errorHandler]);

  if (error) {
    return (
      <Wrapper>
        <ErrorMessage>Something went wrong.</ErrorMessage>
        <ErrorDetails>
          {error?.toString()}
          <br />
        </ErrorDetails>
      </Wrapper>
    );
  }

  return children;
};
