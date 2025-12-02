import type { JSX } from 'react';
import MuiBox from '@mui/material/Box';

import { combineSxStyles } from 'src/utils';

import { ContextWrapper } from './context/ContextWrapper';
import { Group } from './TransferList.Group';
import { wrapperStyles } from './TransferList.styles';
import type { TransferListProps } from './TransferList.types';

export const TransferList = ({
  'data-testid': dataTestid = 'transfer-list',
  label = '',
  choices = [],
  defaultValue = [],
  disabled = false,
  loading = false,
  searchable = true,
  sortable = true,
  sx,
  onChange,
}: TransferListProps): JSX.Element => (
  <ContextWrapper
    items={choices}
    defaultValue={defaultValue}
    disabled={disabled}
    loading={loading}
  >
    <MuiBox data-testid={dataTestid} sx={combineSxStyles(wrapperStyles, sx)}>
      <Group
        label={label}
        searchable={searchable}
        sortable={sortable}
        onChange={onChange}
      />
    </MuiBox>
  </ContextWrapper>
);
