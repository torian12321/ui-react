import { useEffect, useState } from 'react';

import { isEqual } from '@torian12321/js-utils/object';

type UseInputMultiple<InputName extends string = string> = [
  Record<InputName, string>,
  React.Dispatch<React.SetStateAction<Record<InputName, string>>>,
];

export const useInputMultiple = <InputName extends string = string>(
  initialValue: Record<string, string>,
): UseInputMultiple<InputName> => {
  const [value, setValue] = useState<Record<InputName, string>>(initialValue);

  useEffect(() => {
    // Check if the value is different from the initial value to avoid unnecessary re-renders
    if (!isEqual(value, initialValue)) {
      setValue(initialValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValue]);

  return [value, setValue];
};
