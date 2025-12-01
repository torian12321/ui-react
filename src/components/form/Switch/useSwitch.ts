import { useState } from 'react';

type Actions = {
  setValue: (value: boolean) => void;
  toggle: () => void;
  reset: () => void;
};
type ReturnType = [boolean, Actions];

export const useSwitch = (defaultValue: boolean = false): ReturnType => {
  const [checked, setChecked] = useState(defaultValue);

  const actions: Actions = {
    setValue: (value: boolean) => setChecked(value),
    toggle: () => setChecked((v: boolean) => !v),
    reset: () => setChecked(defaultValue),
  };

  return [checked, actions];
};
