import type { Meta } from '@storybook/react-vite';

import { docImport } from 'src/utils/storybook';

import { items, itemsLongList } from './__mocks';
import type { ListProps } from './List.types';
import { List, ListItem, useList } from './';

const meta: Meta<ListProps> = {
  title: 'Components/List',
  component: List,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: docImport('components', 'List, ListItem'),
      },
    },
  },
};

export default meta;

export const Default = () => (
  <List>
    {items.map(item => (
      <ListItem key={item.id} id={item.id} title={item.title}>
        {item.title}
      </ListItem>
    ))}
  </List>
);

export const Loading = () => (
  <List loading>
    {items.map((item, i) => (
      <ListItem
        key={item.id}
        id={item.id}
        title={item.title}
        isActive={i % 3 === 0}
      >
        {item.title}
      </ListItem>
    ))}
  </List>
);

const itemsIds = items.map(item => item.id);
export const Draggable = () => {
  const [selectedItems, actions] = useList(items);

  return (
    <List draggable itemsIds={itemsIds} onChange={actions.sort}>
      {selectedItems.map(item => (
        <ListItem key={item.id} id={item.id} title={item.title}>
          {item.title}
        </ListItem>
      ))}
    </List>
  );
};

export const WithActiveItems = () => (
  <List>
    {items.map((item, i) => (
      <ListItem
        key={item.id}
        id={item.id}
        title={item.title}
        isActive={i % 3 === 0}
      >
        {item.title}
      </ListItem>
    ))}
  </List>
);

const longListIds = itemsLongList.map(item => item.id);
export const LongList = () => {
  const [selectedItems, actions] = useList(itemsLongList);

  return (
    <List draggable itemsIds={longListIds} onChange={actions.sort}>
      {selectedItems.map(item => (
        <ListItem key={item.id} id={item.id} title={item.title}>
          {item.title}
        </ListItem>
      ))}
    </List>
  );
};
