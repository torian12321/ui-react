import { useState } from 'react';

type Actions = {
  open: VoidFunction;
  close: VoidFunction;
  toggle: VoidFunction;
  setVisibility: (v: boolean) => void;
};

/**
 * Custom hook to manage modal visibility state.
 *
 * This hook provides an easy way to control the visibility of a modal component.
 * It returns the current visibility state and an object containing methods to manipulate this state.
 *
 * @param {boolean} defaultValue - The initial visibility state of the modal, defaults to `false`.
 * @returns {[boolean, Actions]} A tuple where the first element is the current visibility state (`isOpen`)
 *                                and the second element is an object with methods to control the state (`actions`).
 *
 * @example
 * const [isOpen, actions] = useModal();
 * actions.open(); // Opens the modal
 * actions.close(); // Closes the modal
 * actions.toggle(); // Toggles the modal's visibility
 * actions.setVisibility(true); // Explicitly sets the visibility to true
 */

export const useModal = (defaultValue = false): [boolean, Actions] => {
  const [isOpen, setIsOpen] = useState<boolean>(defaultValue);
  const actions: Actions = {
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    toggle: () => setIsOpen((v: boolean) => !v),
    setVisibility: (val: boolean) => setIsOpen(val),
  };

  return [isOpen, actions];
};
