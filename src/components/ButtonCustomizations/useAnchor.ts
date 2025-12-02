import { useState } from 'react';

type Actions = {
  open: (event: HTMLElement) => void;
  close: VoidFunction;
};

type ReturnType = [HTMLElement | null, Actions];

export const useAnchor = (): ReturnType => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const openMenu = (currentTarget: HTMLElement) => {
    setAnchorEl(currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const actions: Actions = {
    open: openMenu,
    close: closeMenu,
  };

  return [anchorEl, actions];
};
