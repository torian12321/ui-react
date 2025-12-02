import { useMemo } from 'react';

import type { ListType } from '../components/List/List.types';
import type { ItemValue, TransferListItem } from '../TransferList.types';
import { useState } from './context';

// ------------------ //
// - Base Selectors - //
// ------------------ //

export const useGetItems = (): TransferListItem[] => useState().items;
export const useGetActiveItems = (): ItemValue[] => useState().activeItems;
export const useGetIsLoading = (): boolean => useState().loading;

export const useGetIsDisabled = (): boolean => {
  const loading = useGetIsLoading();
  const disabled = useState().disabled;

  return disabled || loading;
};

export const useGetSelectedItems = (): ItemValue[] => useState().selectedItems;

// ----------------------- //
// - Item Data Selectors - //
// ----------------------- //
type ItemData = TransferListItem & {
  isActive: boolean;
  isSelected: boolean;
};

export const useGetItemsData = (): ItemData[] => {
  const items = useGetItems();
  const activeItems = useGetActiveItems();
  const selectedItems = useGetSelectedItems();

  return useMemo(
    () =>
      items.map(item => ({
        ...item,
        isActive: activeItems.includes(item.value),
        isSelected: selectedItems.includes(item.value),
      })),
    [items, activeItems, selectedItems],
  );
};

export const useGetItemsDataByColumn = (
  column: ListType = 'available',
): ItemData[] => {
  const itemsData = useGetItemsData();
  const selectedItems = useGetSelectedItems();

  if (column === 'available') {
    return itemsData.filter(item => !item.isSelected);
  }

  // For `selected` column, return selected items respecting the order the user has selected them in
  // also valid for drag and drop
  return selectedItems
    .map(item => itemsData.find(itemData => itemData.value === item))
    .filter((item): item is ItemData => !!item && item.isSelected);
};

export const useGetItemDataByValue = (
  value: ItemValue,
): ItemData | undefined => {
  const itemsData = useGetItemsData();

  return itemsData.find(item => item.value === value) ?? undefined;
};
