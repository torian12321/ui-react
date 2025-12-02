import { useEffect, useState } from 'react';

import type { ItemId, ListItemProps } from './components/ListItem';

type Actions = {
  sort: (items: ItemId[]) => void;
  reset: VoidFunction;
};

/** Helper hook to manage list items positions when the list is draggable. */
export const useList = (
  defaultItems: ListItemProps[] = [],
  onChange: (items: ItemId[]) => void = () => undefined,
): [ListItemProps[], Actions] => {
  const initialItemsPositions = defaultItems.map(item => item.id);
  const [itemsPositions, setItemsPositions] = useState<ItemId[]>(
    initialItemsPositions,
  );

  const updatedItems = itemsPositions.map(itemId =>
    defaultItems.find(i => i.id === itemId),
  );

  const handleReset = () => {
    setItemsPositions(initialItemsPositions);
  };

  useEffect(() => {
    if (onChange) {
      onChange(itemsPositions);
    }
  }, [itemsPositions, onChange]);

  return [
    updatedItems as ListItemProps[],
    { sort: setItemsPositions, reset: handleReset },
  ];
};
