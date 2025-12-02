import { useEffect } from 'react';

import { useLocalization } from 'src/localization';

import { ActionsBar } from './components/ActionsBar';
import { List } from './components/List';
import { useGetSelectedItems } from './context/selectors';
import type { ListsGroupProps } from './TransferList.types';

const l10nLabel = 'components.transferList.label';

export const Group = ({
  label = '',
  searchable,
  sortable,
  onChange,
}: ListsGroupProps) => {
  const selectedItems = useGetSelectedItems();
  const l10n = useLocalization();

  useEffect(() => {
    onChange?.(selectedItems);
  }, [selectedItems, onChange]);

  return (
    <>
      <List
        type='available'
        data-testid='available-items-section'
        label={l10n(`${l10nLabel}.available`, { label })}
        searchable={searchable}
      />
      <ActionsBar />
      <List
        type='selected'
        data-testid='selected-items-section'
        label={l10n(`${l10nLabel}.selected`, { label })}
        searchable={searchable}
        draggable={sortable}
      />
    </>
  );
};
