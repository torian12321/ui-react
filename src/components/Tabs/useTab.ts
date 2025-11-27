import { useCallback, useEffect, useMemo, useState } from 'react';

import { clearUrlParam, getUrlParam, setUrlParam } from '@torian12321/js-utils';

type UseTabParams<TabPanelId extends string> = {
  activeTab: TabPanelId | null;
  setActiveTab: (val: TabPanelId) => void;
  clearActiveTab: VoidFunction;
};

/**
 * A custom hook for managing tab state using URL parameters.
 *
 * This hook provides functionality to control tabs and synchronize their state
 * with URL parameters. It allows for persistent tab selection across page reloads
 * and enables sharing specific tab states via URLs.
 *
 * @param tabId - A unique identifier for the tab group, used as the URL parameter key
 * @returns An object containing the active tab state and functions to manipulate it
 *
 * @example
 * const { activeTab, setActiveTab, clearActiveTab } = useTab('myTabs');
 */

export const useTab = <TabPanelId extends string>(
  tabId: string,
): UseTabParams<TabPanelId> => {
  const paramValue = useMemo(() => getUrlParam<TabPanelId>(tabId), [tabId]);
  const [activeTab, setActiveTab] = useState<TabPanelId | null>(paramValue);

  /*
   * Effect to monitor changes in the URL parameter and update the active tab accordingly.
   *
   * This effect sets up an interval that regularly checks the URL parameter value.
   * If the parameter value changes, it updates the activeTab state.
   *
   */
  useEffect(() => {
    const checkUrlParam = () => {
      const newParamValue = getUrlParam<TabPanelId>(tabId);
      if (newParamValue !== activeTab) {
        setActiveTab(newParamValue);
      }
    };

    const intervalId = setInterval(checkUrlParam, 100);
    return () => clearInterval(intervalId);
  }, [tabId, activeTab]);

  const setValue = useCallback(
    (val: TabPanelId) => setUrlParam(tabId, val),
    [tabId],
  );

  return {
    activeTab,
    setActiveTab: setValue,
    clearActiveTab: () => clearUrlParam(tabId),
  };
};
