import type { JSX } from 'react';
import { Children, useEffect, useRef, useState } from 'react';
import type { VirtuosoHandle } from 'react-virtuoso';
import { Virtuoso as VirtualizedList } from 'react-virtuoso';
import MuiBox from '@mui/material/Box';
import type { DragEndEvent } from '@dnd-kit/core';
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  restrictToFirstScrollableAncestor,
  restrictToVerticalAxis,
  restrictToWindowEdges,
} from '@dnd-kit/modifiers';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import { combineSxStyles } from 'src/utils';

import type { ItemId } from './components/ListItem';
import { ListSkeleton } from './components/Skeleton';
import { ListProvider } from './List.context';
import { bodyStyles, listStyles, wrapperStyles } from './List.styles';
import type { ListProps } from './List.types';

export const List = ({
  children,
  'data-testid': dataTestid,
  sx,
  itemsIds = [],
  draggable = false,
  loading = false,
  onChange,
}: ListProps): JSX.Element => {
  const listRef = useRef<VirtuosoHandle>(null);
  const [items, setItems] = useState<ItemId[]>(itemsIds);
  const isDraggable = draggable && itemsIds.length > 1;
  const sxStyles = combineSxStyles(wrapperStyles, sx);
  const renderedChildren = Children.toArray(children);

  // Sync items state with itemsIds prop
  useEffect(() => {
    if (itemsIds) {
      setItems(itemsIds);
    }
  }, [itemsIds]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setItems(items => {
        const oldIndex = items.indexOf(active?.id);
        const newIndex = items.indexOf(over?.id as ItemId);
        const newItems = arrayMove(items, oldIndex, newIndex);

        onChange?.(newItems);
        return newItems;
      });
    }
  };

  return (
    <ListProvider value={{ draggable: isDraggable }}>
      <MuiBox sx={sxStyles}>
        {loading ? (
          <ListSkeleton />
        ) : (
          <MuiBox sx={bodyStyles}>
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
              modifiers={[
                restrictToVerticalAxis,
                restrictToWindowEdges,
                restrictToFirstScrollableAncestor,
              ]}
            >
              <SortableContext
                items={draggable ? items : []}
                strategy={verticalListSortingStrategy}
                disabled={!draggable}
              >
                <VirtualizedList
                  ref={listRef}
                  totalCount={renderedChildren.length}
                  style={listStyles}
                  data-testid={dataTestid}
                  itemContent={index => renderedChildren[index]}
                />
              </SortableContext>
            </DndContext>
          </MuiBox>
        )}
      </MuiBox>
    </ListProvider>
  );
};
