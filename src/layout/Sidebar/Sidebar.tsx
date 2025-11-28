import type { JSX, PropsWithChildren } from 'react';

import { SIDEBAR_ID } from 'src/layout/constants';

import { SidebarFooter } from './components/Footer';
import { MenuList, SidebarItem } from './components/SidebarItem';
import { Wrapper } from './Sidebar.styles';
import type { SidebarProps } from './Sidebar.types';
import { SideBarContextProvider } from './SideBarContext';

export const Sidebar = ({
  children,
  isOpen = true,
  appVersion,
}: PropsWithChildren<SidebarProps>): JSX.Element => (
  <SideBarContextProvider value={{ isOpen }}>
    <Wrapper
      variant='permanent'
      open={isOpen}
      aria-expanded={isOpen}
      id={SIDEBAR_ID}
      data-testid='app-sideBar'
    >
      {children}
      <SidebarFooter appVersion={appVersion} />
    </Wrapper>
  </SideBarContextProvider>
);

Sidebar.Menu = MenuList;
Sidebar.MenuItem = SidebarItem;
