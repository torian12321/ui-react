import type { ItemValue } from '../TransferList.types';

export const isItemsArrayUpdated = (
  originalItems: ItemValue[],
  newItems: ItemValue[],
): boolean => {
  if (originalItems.length !== newItems.length) {
    return false;
  }

  return !originalItems.every((item, index) => item === newItems[index]);
};
