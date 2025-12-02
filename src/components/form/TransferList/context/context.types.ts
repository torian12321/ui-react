import type { ItemValue, TransferListItem } from '../TransferList.types';

export type Dispatch = (action: Action) => void;
export type Context = [State, Dispatch];

export type State = {
  items: TransferListItem[];
  activeItems: ItemValue[];
  selectedItems: ItemValue[];
  disabled: boolean;
  loading: boolean;
};

// ---------------- //
// - Action types - //
// ---------------- //
export type Action =
  | SetSelectedItemsAction
  | UnselectAllItemsAction
  | UnselectItemsAction
  | SelectAllItemsAction
  | SelectItemsAction
  | ToggleIsActiveAction
  | UpdateStateAction;

type BaseAction<T extends string, P = null> = {
  type: T;
  payload?: P;
};

type SetSelectedItemsAction = BaseAction<'setSelectedItems', ItemValue[]>;
type UnselectAllItemsAction = BaseAction<'unselectAllItems'>;
type UnselectItemsAction = BaseAction<'unselectItems', ItemValue[]>;
type SelectAllItemsAction = BaseAction<'selectAllItems'>;
type SelectItemsAction = BaseAction<'selectItems', ItemValue[]>;
type ToggleIsActiveAction = BaseAction<'toggleIsActive', ItemValue>;
type UpdateStateAction = BaseAction<'updateState', Partial<State>>;
