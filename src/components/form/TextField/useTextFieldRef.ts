import type { RefObject } from 'react';
import { useEffect, useRef } from 'react';

export const useTextFieldRef = (
  focus: boolean,
): RefObject<HTMLInputElement> => {
  const textFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (focus && textFieldRef.current) {
      // When starting to edit, focus the textarea and set the caret to the end
      textFieldRef.current.focus();
      const length = textFieldRef.current.value.length;
      textFieldRef.current.setSelectionRange(length, length);
    }
  }, [focus]);

  return textFieldRef as RefObject<HTMLInputElement>;
};
