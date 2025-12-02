import {
  useGetAppLayoutState,
  useSetAppSidebarOpen,
  useToggleAppSidebar,
} from 'src/contexts/appStore';

type Actions = {
  toggle: VoidFunction;
  open: VoidFunction;
  close: VoidFunction;
};
type UseSidebar = Actions & { isOpen: boolean };

/**
 * Custom hook to manage the state of a sidebar.
 *
 * @param {boolean} [value=true] - Initial state of the sidebar, true for open and false for closed.
 * @returns {[boolean, Actions]} - An array containing the current state of the sidebar and actions to manipulate it.
 */
export const useSidebar = (): UseSidebar => {
  const { sidebarOpen } = useGetAppLayoutState();
  const setSidebarOpen = useSetAppSidebarOpen();
  const toggle = useToggleAppSidebar();

  return {
    isOpen: sidebarOpen,
    toggle,
    open: () => setSidebarOpen(true),
    close: () => setSidebarOpen(false),
  };
};
