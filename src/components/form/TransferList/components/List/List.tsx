import { useMemo, useState } from 'react';
import MuiBox from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useLocalization } from 'src/localization';

import type { ItemId } from '../../../../List';
import { List as ListComponent, ListItem } from '../../../../List';
import { useSetSelectedItems, useToggleIsActive } from '../../context/actions';
import {
  useGetIsLoading,
  useGetItemsDataByColumn,
} from '../../context/selectors';
import { SearchBar } from '../SearchBar';
import {
  footerStyles,
  labelStyles,
  listStyles,
  wrapperStyles,
} from './List.styles';
import type { ListProps } from './List.types';

const l10nFooter = 'components.transferList.footer';

export const List = ({
  type = 'available',
  'data-testid': dataTestid,
  label,
  searchable,
  draggable,
}: ListProps) => {
  const l10n = useLocalization();
  const [query, setQuery] = useState('');
  const isLoading = useGetIsLoading();
  const itemsData = useGetItemsDataByColumn(type);
  const toggleIsActive = useToggleIsActive();
  const sortItems = useSetSelectedItems();

  const itemIds = useMemo(() => itemsData.map(item => item.value), [itemsData]);

  const filteredItems = useMemo(
    () =>
      itemsData.filter(item =>
        item.label.toLowerCase().includes(query.toLowerCase()),
      ),
    [itemsData, query],
  );

  const handleOnChange = (items: ItemId[]) => {
    sortItems(items);
  };

  const isOriginalList = itemIds.length === filteredItems.length;
  // If list of Items is not showing all items, then it is not draggable
  // DnD can only be used if all items are visible
  const isDraggable = draggable && isOriginalList;

  const footerText = isOriginalList
    ? l10n(`${l10nFooter}.totalElements`, { count: itemIds.length })
    : l10n(`${l10nFooter}.filteredElements`, {
        count: itemIds.length,
        filtered: filteredItems.length,
      });

  return (
    <MuiBox data-testid={dataTestid} sx={wrapperStyles}>
      <Typography variant='h6' sx={labelStyles}>
        {label}
      </Typography>
      {searchable && <SearchBar value={query} onChange={setQuery} />}

      <ListComponent
        data-testid={`${dataTestid}-list`}
        itemsIds={itemIds}
        draggable={isDraggable}
        loading={isLoading}
        sx={listStyles}
        onChange={handleOnChange}
      >
        {filteredItems.map(item => (
          <ListItem
            key={item.value}
            id={item.value}
            isActive={item.isActive}
            onClick={() => toggleIsActive(item.value)}
          >
            {item.label}
          </ListItem>
        ))}
      </ListComponent>

      <Typography variant='caption' sx={footerStyles}>
        {footerText}
      </Typography>
    </MuiBox>
  );
};
