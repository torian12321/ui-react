import type { PropsWithChildren } from 'react';
import { useEffect } from 'react';

import type { ItemValue, TransferListItem } from '../TransferList.types';
import { ContextProvider, useSetState } from './context';

type Props = {
  items: TransferListItem[];
  defaultValue: ItemValue[];
  disabled: boolean;
  loading: boolean;
};

/**
 * Wrapper component that provides the form data context to the form renderer.
 * Format the data to be used in the form renderer before saving it in the context.
 * It also applies an initial logic to fields before render on screen to avoid initial flickers.
 */
export const ContextWrapper = ({
  children,
  items = [],
  defaultValue = [],
  disabled = false,
  loading = false,
}: PropsWithChildren<Props>) => {
  const [state, dispatch] = useSetState({
    items,
    selectedItems: defaultValue,
    disabled,
    loading,
  });

  // Update state when props change
  useEffect(() => {
    dispatch({ type: 'updateState', payload: { items, disabled, loading } });
  }, [items, disabled, loading, dispatch]);

  return (
    <ContextProvider value={[state, dispatch]}>{children}</ContextProvider>
  );
};
