import type { JSX, PropsWithChildren } from 'react';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import MuiBox from '@mui/material/Box';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { combineSxStyles } from 'src/utils';

import { useListContext } from '../../List.context';
import {
  bodyStyles,
  contentStyles,
  handlerStyles,
  isActiveStyles,
  isDraggingStyles,
  wrapperStyles,
} from './ListItem.styles';
import type { ListItemProps } from './ListItem.types';

export const ListItem = ({
  children,
  id,
  title,
  isActive = false,
  sx,
  onClick,
}: PropsWithChildren<ListItemProps>): JSX.Element => {
  const { draggable } = useListContext();
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const sxWrapper = combineSxStyles(wrapperStyles, sx);
  const sxBody = combineSxStyles(
    bodyStyles,
    isActive ? isActiveStyles : {},
    isDragging ? isDraggingStyles : {},
  );

  return (
    <MuiBox
      {...attributes}
      ref={setNodeRef}
      style={style}
      sx={sxWrapper}
      component='li'
      role='listitem'
      title={title}
      onClick={onClick}
    >
      <MuiBox sx={sxBody}>
        <MuiBox sx={contentStyles}>{children}</MuiBox>
        {draggable && (
          <MuiBox {...listeners} sx={handlerStyles}>
            <DragIndicatorIcon />
          </MuiBox>
        )}
      </MuiBox>
    </MuiBox>
  );
};
