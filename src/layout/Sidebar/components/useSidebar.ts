import { useEffect, useState } from 'react';

type Actions = {
  toggle: VoidFunction;
  open: VoidFunction;
  close: VoidFunction;
};
type UseSidebar = [boolean, Actions];

/**
 * Custom hook to manage the state of a sidebar.
 *
 * @param {boolean} [value=true] - Initial state of the sidebar, true for open and false for closed.
 * @returns {[boolean, Actions]} - An array containing the current state of the sidebar and actions to manipulate it.
 */
export const useSidebar = (value: boolean = true): UseSidebar => {
  const [isOpen, setIsOpen] = useState(value);

  useEffect(() => {
    // Allows to externally control the sidebar.
    setIsOpen(value);
  }, [value]);

  const actions: Actions = {
    toggle: () => setIsOpen(!isOpen),
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  };

  return [isOpen, actions];
};
