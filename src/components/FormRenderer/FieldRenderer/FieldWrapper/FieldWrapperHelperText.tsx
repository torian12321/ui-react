import type { JSX } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

import { HelperMessage, HelperTextWrapper } from './FieldWrapper.styles';
import type { HelperTextProps } from './FieldWrapper.types';

export const HelperText = ({
  messages = [],
  showMessages = true,
}: HelperTextProps): JSX.Element => {
  const [parentRef] = useAutoAnimate();
  const hidden = !showMessages || !messages.length;

  return (
    <HelperTextWrapper ref={parentRef} aria-hidden={hidden}>
      {!hidden &&
        messages.map(({ message, severity }, index) => (
          <HelperMessage key={index} severity={severity}>
            {message}
          </HelperMessage>
        ))}
    </HelperTextWrapper>
  );
};
