import type { ItemValue } from '../TransferList.types';
import { useDispatch } from './context';
import { useGetItemsData } from './selectors';

export const useToggleIsActive = (): ((v: ItemValue) => void) => {
  const dispatch = useDispatch();

  return (v: ItemValue) => {
    dispatch({ type: 'toggleIsActive', payload: v });
  };
};

export const useUnselectAllItems = (): VoidFunction => {
  const dispatch = useDispatch();

  return () => {
    dispatch({ type: 'unselectAllItems' });
  };
};

export const useSelectAllItems = (): VoidFunction => {
  const dispatch = useDispatch();

  return () => {
    dispatch({ type: 'selectAllItems' });
  };
};

export const useUnselectItems = (): VoidFunction => {
  const dispatch = useDispatch();
  const itemsData = useGetItemsData();

  const unselectedItems = itemsData
    .filter(item => item.isActive && item.isSelected)
    .map(item => item.value);

  return () => {
    dispatch({
      type: 'unselectItems',
      payload: unselectedItems,
    });
  };
};

export const useSelectItems = (): VoidFunction => {
  const dispatch = useDispatch();
  const itemsData = useGetItemsData();

  const selectedItems = itemsData
    .filter(item => item.isActive && !item.isSelected)
    .map(item => item.value);

  return () => {
    dispatch({
      type: 'selectItems',
      payload: selectedItems,
    });
  };
};

/**
 * A function that sets the selected items to the new items
 * used when sorting items
 */
export const useSetSelectedItems = (): ((newItems: ItemValue[]) => void) => {
  const dispatch = useDispatch();

  return (newItems: ItemValue[]) => {
    dispatch({
      type: 'setSelectedItems',
      payload: newItems,
    });
  };
};
