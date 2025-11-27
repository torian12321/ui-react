import { describe, expect, it } from 'vitest';

import type { TabLabelDetails } from './Tabs.types';
import { getActiveTabIndex, getTabDetails } from './utils';

describe('Components/Tabs/utils', () => {
  describe('getTabDetails', () => {
    it('should convert string labels to TabLabelDetails', () => {
      const input = ['Tab 1', 'Tab 2', 'Tab 3'];
      const expected: TabLabelDetails[] = [
        { id: 'Tab 1', label: 'Tab 1', disabled: false },
        { id: 'Tab 2', label: 'Tab 2', disabled: false },
        { id: 'Tab 3', label: 'Tab 3', disabled: false },
      ];
      expect(getTabDetails(input)).toEqual(expected);
    });

    it('should pass through existing TabLabelDetails', () => {
      const input: (TabLabelDetails | string)[] = [
        { id: 'tab1', label: 'Tab 1', disabled: true },
        'Tab 2',
        { id: 'tab3', label: 'Tab 3', disabled: false },
      ];
      const expected: TabLabelDetails[] = [
        { id: 'tab1', label: 'Tab 1', disabled: true },
        { id: 'Tab 2', label: 'Tab 2', disabled: false },
        { id: 'tab3', label: 'Tab 3', disabled: false },
      ];
      expect(getTabDetails(input)).toEqual(expected);
    });
  });

  describe('getActiveTabIndex', () => {
    const tabsLabelDetails: TabLabelDetails[] = [
      { id: 'tab1', label: 'Tab 1', disabled: false },
      { id: 'tab2', label: 'Tab 2', disabled: true },
      { id: 'tab3', label: 'Tab 3', disabled: false },
    ];

    it('should return the index of the active tab', () => {
      expect(getActiveTabIndex(tabsLabelDetails, 'tab3')).toBe(2);
    });

    it('should return the first non-disabled tab index when activeTab is null', () => {
      expect(getActiveTabIndex(tabsLabelDetails, null)).toBe(0);
    });

    it('should return the first non-disabled tab index when activeTab is null, with first disabled', () => {
      const tabsLabelDetails2: TabLabelDetails[] = [
        { id: 'tab1', label: 'Tab 1', disabled: true },
        { id: 'tab2', label: 'Tab 2', disabled: false },
      ];
      expect(getActiveTabIndex(tabsLabelDetails2)).toBe(1);
    });

    it('should return the first non-disabled tab index when activeTab is undefined', () => {
      expect(getActiveTabIndex(tabsLabelDetails, undefined)).toBe(0);
    });

    it('should return the first non-disabled tab index when activeTab is not found', () => {
      expect(getActiveTabIndex(tabsLabelDetails, 'nonexistent')).toBe(0);
    });

    it('should handle all disabled tabs', () => {
      const allDisabledTabs: TabLabelDetails[] = [
        { id: 'tab1', label: 'Tab 1', disabled: true },
        { id: 'tab2', label: 'Tab 2', disabled: true },
      ];
      expect(getActiveTabIndex(allDisabledTabs, null)).toBe(0);
    });
  });
});
