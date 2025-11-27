import { useState } from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Tabs } from './Tabs';

const TabsTest = ({ defaultTab }: { defaultTab?: string }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  return (
    <Tabs
      activeTab={activeTab}
      onChange={newTabIndex => setActiveTab(newTabIndex)}
      labels={['Tab 1', 'Tab 2', 'Tab 3']}
    >
      <div>Content 1</div>
      <div>Content 2</div>
      <div>Content 3</div>
    </Tabs>
  );
};

const checkPanelContent = (content: string) => {
  const { getByText } = within(screen.getByRole('tabpanel'));
  expect(getByText(content)).toBeInTheDocument();
};

const checkSelectedTabContent = (tabText: string) => {
  const activeTab = screen.getByRole('tab', { selected: true });
  expect(activeTab).toHaveTextContent(tabText);
};

describe('Components/Tabs', () => {
  it('Should render with 3 tabs and only 1 visible panel', () => {
    render(<TabsTest />);

    const TABS_BUTTONS = screen.getAllByRole('tab');
    const TABS_CONTENT = screen.getAllByRole('tabpanel');

    expect(TABS_BUTTONS).toHaveLength(3);
    expect(TABS_CONTENT).toHaveLength(1);
  });

  it('Should render first tab active by default', () => {
    render(<TabsTest />);

    // Check default content
    checkPanelContent('Content 1');
    checkSelectedTabContent('Tab 1');
  });

  it('Should render indicated tab open by default', () => {
    render(<TabsTest defaultTab='Tab 3' />);

    // Check default content
    checkPanelContent('Content 3');
    checkSelectedTabContent('Tab 3');
  });

  it('Should change visible content when clicking tabs', () => {
    render(<TabsTest />);
    const TABS_BUTTONS = screen.getAllByRole('tab');

    // Check content on tab 0
    fireEvent.click(TABS_BUTTONS[0]);
    checkPanelContent('Content 1');
    checkSelectedTabContent('Tab 1');

    // Check content on tab 1
    fireEvent.click(TABS_BUTTONS[1]);
    checkPanelContent('Content 2');
    checkSelectedTabContent('Tab 2');

    // Check content on tab 2
    fireEvent.click(TABS_BUTTONS[2]);
    checkPanelContent('Content 3');
    checkSelectedTabContent('Tab 3');
  });

  it('Should call a function when changed', () => {
    const handleChange = vi.fn();

    render(
      <Tabs onChange={handleChange} labels={['Tab 1', 'Tab 2', 'Tab 3']}>
        <div>Content 1</div>
        <div>Content 2</div>
        <div>Content 3</div>
      </Tabs>,
    );
    const TABS_BUTTONS = screen.getAllByRole('tab');

    // Click tab 0
    fireEvent.click(TABS_BUTTONS[0]);
    expect(handleChange).toHaveBeenCalledTimes(0);

    // Click tab 2
    fireEvent.click(TABS_BUTTONS[2]);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
