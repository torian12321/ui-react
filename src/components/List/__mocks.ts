import type { ListItemProps } from './components/ListItem';

export const items: ListItemProps[] = [
  { id: 'item_1', title: 'Item 1' },
  { id: 'item_2', title: 'Item 2' },
  { id: 'item_3', title: 'Item 3' },
  { id: 'item_4', title: 'Item 4' },
  { id: 'item_5', title: 'Item 5' },
  { id: 'item_6', title: 'Item 6' },
  { id: 'item_7', title: 'Item 7' },
  { id: 'item_8', title: 'Item 8' },
  { id: 'item_9', title: 'Item 9' },
  { id: 'item_10', title: 'Item 10' },
];

export const itemsLongList: ListItemProps[] = [...Array(500).keys()].map(
  item => ({
    id: `item_${item}`,
    title: `Item - ${item}`,
  }),
);
