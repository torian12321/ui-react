import { isString } from '@torian12321/js-utils/typeChecker';

import type { TabLabelDetails } from './Tabs.types';

export const getTabDetails = (
  labels: (TabLabelDetails | string)[],
): TabLabelDetails[] =>
  labels.map(label => {
    if (!isString(label)) {
      return label;
    }

    return {
      id: label,
      label,
      disabled: false,
    };
  });

const getFirstActiveTab = (tabsLabelDetails: TabLabelDetails[]): number => {
  const firstVisitableTab = tabsLabelDetails.find(tab => !tab.disabled);

  return firstVisitableTab ? tabsLabelDetails.indexOf(firstVisitableTab) : 0;
};

export const getActiveTabIndex = <T>(
  tabsLabelDetails: TabLabelDetails[],
  activeTab?: T | null,
): number => {
  if (!activeTab) return getFirstActiveTab(tabsLabelDetails);

  const activeTabIndex = tabsLabelDetails.findIndex(
    tab => tab.id === activeTab,
  );

  if (activeTabIndex === -1) {
    return getFirstActiveTab(tabsLabelDetails);
  }

  return activeTabIndex;
};
