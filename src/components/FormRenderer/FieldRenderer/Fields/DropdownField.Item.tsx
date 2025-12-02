import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { Virtuoso } from 'react-virtuoso';
import MuiBox from '@mui/material/Box';

/** Height of each option in pixels */
const itemSize = 30;

export const DropdownListItem = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLElement>
>(({ children = [], ...other }, ref) => {
  const itemCount = Array.isArray(children) ? children.length : 0;
  const listHeight = itemSize * itemCount;

  return (
    <MuiBox
      ref={ref}
      {...other}
      sx={{
        padding: 0,
        maxHeight: 'none',
      }}
    >
      <Virtuoso
        style={{
          height: Math.min(listHeight, 250),
        }}
        totalCount={itemCount}
        itemContent={index => {
          if (!Array.isArray(children)) return null;
          return children[index] ?? null;
        }}
      />
    </MuiBox>
  );
});
