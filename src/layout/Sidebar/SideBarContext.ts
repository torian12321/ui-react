import { createContext, useContext } from 'react';

import type { SidebarContextProps } from './Sidebar.types';

const iniValues: SidebarContextProps = {
  isOpen: true,
};

const sideBarContext = createContext<SidebarContextProps>(iniValues);

sideBarContext.displayName = 'SideBarContext';

export const SideBarContextProvider = sideBarContext.Provider;

export const useSideBarContext = (): SidebarContextProps => {
  const context = useContext(sideBarContext);

  if (!context) {
    throw new Error(
      'Form compound components cannot be rendered outside the SideBarContext component',
    );
  }

  return context as SidebarContextProps;
};
