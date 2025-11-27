import { useState } from 'react';
import type { Meta } from '@storybook/react-vite';

import { Button } from 'src/components';

import { Tabs } from './Tabs';
import type { TabsProps } from './Tabs.types';
import { useTab } from './useTab';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;

const Template = (args: TabsProps) => {
  const [tab, setTab] = useState<string | null>(null);

  return (
    <Tabs
      {...args}
      activeTab={tab}
      onChange={setTab}
      labels={['Recent', 'My documents', 'Favourites']}
    >
      <div>Content 1</div>
      <div>Content 2</div>
      <div>Content 3</div>
    </Tabs>
  );
};

export const Default = Template.bind({});
export const WithDisabledTabs = () => {
  const [tab, setTab] = useState<string | null>(null);

  return (
    <Tabs
      activeTab={tab}
      onChange={setTab}
      labels={[
        { id: '1', label: 'Recent', disabled: true },
        { id: '2', label: 'First tab is not visitable' },
        'Favourites',
      ]}
    >
      <div>Content 1</div>
      <div>First tab is not visitable</div>
      <div>By default, the first visitable tab is selected</div>
    </Tabs>
  );
};

export const UrlControlledTabs = () => {
  const TABS = {
    ONE: 'Tab 1',
    TWO: 'Tab 2',
    THREE: 'Tab 3',
  } as const;
  const { activeTab, setActiveTab } = useTab('storybook-tabs');

  return (
    <Tabs
      labels={[TABS.ONE, TABS.TWO, TABS.THREE]}
      activeTab={activeTab}
      onChange={setActiveTab}
    >
      <div>use `useTab` hook to control tabs</div>
      <div>Open Tabs story in new window to see URL change</div>
      <div>
        Ensure to call `clearActiveTab` when unmounting to keep url clean
      </div>
    </Tabs>
  );
};

export const ExternallyControlledTab = () => {
  const TABS = {
    ONE: 'Tab 1',
    TWO: 'Tab 2',
    THREE: 'Tab 3',
  } as const;

  const [activeTab, setActiveTab] = useState<string>(TABS.ONE);

  return (
    <>
      <Button.Group>
        <Button
          onClick={() => setActiveTab(TABS.ONE)}
          primary={activeTab === TABS.ONE}
        >
          Go to 1
        </Button>
        <Button
          onClick={() => setActiveTab(TABS.TWO)}
          primary={activeTab === TABS.TWO}
        >
          Go to 2
        </Button>
        <Button
          onClick={() => setActiveTab(TABS.THREE)}
          primary={activeTab === TABS.THREE}
        >
          Go to 3
        </Button>
      </Button.Group>
      <Tabs
        labels={[TABS.ONE, TABS.TWO, TABS.THREE]}
        activeTab={activeTab}
        onChange={setActiveTab}
      >
        <div>Content 1</div>
        <div>Content 2</div>
        <div>Content 3</div>
      </Tabs>
    </>
  );
};
