import type { JSX, PropsWithChildren } from 'react';

import { useGetAppLayoutState } from 'src/contexts/appStore';
import { SIDEBAR_ID } from 'src/layout/constants';

import { SidebarFooter } from './components/Footer';
import { MenuList, SidebarItem } from './components/SidebarItem';
import { Wrapper } from './Sidebar.styles';
import type { SidebarProps } from './Sidebar.types';

export const Sidebar = ({
  children,
  appVersion,
}: PropsWithChildren<SidebarProps>): JSX.Element => {
  const { sidebarOpen } = useGetAppLayoutState();

  return (
    <Wrapper
      variant='permanent'
      open={sidebarOpen}
      aria-expanded={sidebarOpen}
      id={SIDEBAR_ID}
      data-testid='app-sideBar'
    >
      {children}
      <SidebarFooter appVersion={appVersion} />
    </Wrapper>
  );
};

Sidebar.Menu = MenuList;
Sidebar.MenuItem = SidebarItem;
