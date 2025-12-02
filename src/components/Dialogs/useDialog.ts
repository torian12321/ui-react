import { useState } from 'react';

type Actions = {
  open: VoidFunction;
  close: VoidFunction;
  toggle: VoidFunction;
  setVisibility: (v: boolean) => void;
};

export const useDialog = (defaultValue = false): [boolean, Actions] => {
  const [isOpen, setIsOpen] = useState<boolean>(defaultValue);

  const actions: Actions = {
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    toggle: () => setIsOpen((v: boolean) => !v),
    setVisibility: (val: boolean) => setIsOpen(val),
  };

  return [isOpen, actions];
};
