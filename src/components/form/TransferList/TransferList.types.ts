import type { ComponentWithStyles, ComponentWithTestId } from 'src/types';

export type ItemValue = string | number;

export type TransferListItem = {
  value: ItemValue;
  label: string;
};

export type TransferListProps = ComponentWithTestId &
  ComponentWithStyles & {
    label?: string;
    choices: TransferListItem[];
    defaultValue?: ItemValue[];

    // State props
    disabled?: boolean;
    loading?: boolean;

    searchable?: boolean;
    sortable?: boolean;

    /** Called when the list of selected items changes: transfers and drags */
    onChange?: (items: ItemValue[]) => void;
  };

export type ListsGroupProps = Pick<
  TransferListProps,
  'label' | 'onChange' | 'searchable' | 'sortable'
>;
