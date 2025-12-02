import {
  useGetIsDisabled,
  useGetItemsDataByColumn,
} from '../../context/selectors';

type UseGetDisabledActions = {
  isDisabledAddAll: boolean;
  isDisabledAdd: boolean;
  isDisabledRemove: boolean;
  isDisabledRemoveAll: boolean;
};

export const useGetDisabledActions = (): UseGetDisabledActions => {
  const disabled = useGetIsDisabled();
  const availableItems = useGetItemsDataByColumn('available');
  const selectedItems = useGetItemsDataByColumn('selected');

  const isDisabled = disabled;
  const isDisabledAddAll = isDisabled || !availableItems.length;
  const isDisabledAdd =
    isDisabled || !availableItems.some(item => item.isActive);
  const isDisabledRemove =
    isDisabled || !selectedItems.some(item => item.isActive);
  const isDisabledRemoveAll = isDisabled || !selectedItems.length;

  return {
    isDisabledAddAll,
    isDisabledAdd,
    isDisabledRemove,
    isDisabledRemoveAll,
  };
};
