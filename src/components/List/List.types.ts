import type { ReactElement } from 'react';

import type { ComponentWithStyles, ComponentWithTestId } from 'src/types';

import type { ItemId, ListItemProps } from './components/ListItem';

type ListItemElement = ReactElement<ListItemProps>;

type BaseListProps = ComponentWithTestId &
  ComponentWithStyles & {
    /** For TypeScript to understand that the children of the List component are ListItem components */
    children: ListItemElement | ListItemElement[];
    loading?: boolean;

    // draggable?: boolean;
    /** Informative callback that is called when the list items are changed */
    onChange?: (items: ItemId[]) => void;
  };

type DraggableListProps = BaseListProps & {
  draggable: true;
  /** Items IDs to be used for the draggable list and to reorder the items */
  itemsIds: ItemId[];
};

type NonDraggableListProps = BaseListProps & {
  draggable?: false;
  itemsIds?: ItemId[];
};

export type ListProps = DraggableListProps | NonDraggableListProps;
