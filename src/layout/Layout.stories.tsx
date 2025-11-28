import AssignmentIcon from '@mui/icons-material/Assignment';
import DescriptionIcon from '@mui/icons-material/Description';
import GavelIcon from '@mui/icons-material/Gavel';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import type { Meta } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Breadcrumbs, Button } from 'src/components';

// import { Button } from '../components/Button';
import { SbMockFiller } from './Layout.styles';
import {
  AccountManager,
  Content,
  ErrorPageBoundary,
  Footer,
  Header,
  InnerToolBar,
  LanguageSelector,
  LayoutWrapper,
  Main,
  Sidebar,
  ThemeSelector,
  useSidebar,
} from './';

const meta = {
  title: 'Layout/Demo',
  component: LayoutWrapper,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LayoutWrapper>;

export default meta;

export const Default = () => {
  const [isOpen, sidebarActions] = useSidebar();

  return (
    <LayoutWrapper>
      <Header onClickMenuOpener={sidebarActions.toggle} />
      <Sidebar isOpen={isOpen} />
      <Main>
        <ErrorPageBoundary>
          <Content />
        </ErrorPageBoundary>
        <Footer />
      </Main>
    </LayoutWrapper>
  );
};

export const ShowingAreas = () => {
  const [isOpen, sidebarActions] = useSidebar();

  return (
    <LayoutWrapper>
      <Header onClickMenuOpener={sidebarActions.toggle}>
        <SbMockFiller>Header Area</SbMockFiller>
      </Header>
      <Sidebar isOpen={isOpen}>
        <SbMockFiller>Sidebar Area</SbMockFiller>
      </Sidebar>
      <Main>
        <InnerToolBar>
          <SbMockFiller>InnerToolBar Area</SbMockFiller>
        </InnerToolBar>
        <Content>
          <SbMockFiller>Content Area</SbMockFiller>
        </Content>
        <Footer>
          <SbMockFiller>Footer Area</SbMockFiller>
        </Footer>
      </Main>
    </LayoutWrapper>
  );
};

export const Loading = () => {
  const [isOpen, sidebarActions] = useSidebar();

  return (
    <LayoutWrapper>
      <Header onClickMenuOpener={sidebarActions.toggle} />
      <Sidebar isOpen={isOpen} />
      <Main loading>Page content...</Main>
    </LayoutWrapper>
  );
};

export const WithContent = () => {
  const [isOpen, sidebarActions] = useSidebar();

  return (
    <LayoutWrapper>
      <Header onClickMenuOpener={sidebarActions.toggle} title='App title'>
        <LanguageSelector />
        <ThemeSelector />
        <AccountManager onLogout={fn()} userName='John Doe' />
      </Header>
      <Sidebar isOpen={isOpen} appVersion='1.2.3'>
        <Sidebar.Menu>
          <Sidebar.MenuItem label='Assignment' icon={<AssignmentIcon />} />
          <Sidebar.MenuItem
            isActive
            label='Description'
            icon={<DescriptionIcon />}
          />
          <Sidebar.MenuItem label='Gavel' icon={<GavelIcon />} />
          <Sidebar.MenuItem label='LibraryBooks' icon={<LibraryBooksIcon />} />
        </Sidebar.Menu>
      </Sidebar>
      <Main>
        <InnerToolBar>
          <InnerToolBar.Header>Header</InnerToolBar.Header>
          <InnerToolBar.Body>
            <Breadcrumbs steps={['Home', 'Dashboard']} />
          </InnerToolBar.Body>
        </InnerToolBar>
        <Content>Page content</Content>
        <Footer>Footer Content</Footer>
      </Main>
    </LayoutWrapper>
  );
};

export const WithError = () => {
  const [isOpen, sidebarActions] = useSidebar();
  const throwError = () => {
    throw new Error('Test error');
  };

  return (
    <LayoutWrapper>
      <Header onClickMenuOpener={sidebarActions.toggle} />
      <Sidebar isOpen={isOpen} />
      <Main>
        <ErrorPageBoundary>
          <Content
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Button primary onClick={throwError}>
              Throw error
            </Button>
          </Content>
        </ErrorPageBoundary>
        <Footer />
      </Main>
    </LayoutWrapper>
  );
};
