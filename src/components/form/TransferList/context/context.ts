import { createContext, useContext, useReducer } from 'react';

import type { Context, Dispatch, State } from './context.types';
import { transferListReducer } from './reducer';

const initialState: Required<State> = {
  items: [],
  activeItems: [],
  selectedItems: [],
  disabled: false,
  loading: false,
};

const Context = createContext<Context>([initialState, () => null]);

Context.displayName = 'TransferListContext';

export const ContextProvider = Context.Provider;

const useTransferListContext = (): Context => {
  const context = useContext(Context);

  if (!context) {
    throw new Error(
      'useTransferListContext cannot be used outside TransferListContext component',
    );
  }

  return context;
};

export const useState = (): State => useTransferListContext()[0];
export const useDispatch = (): Dispatch => useTransferListContext()[1];

export const useSetState = (state: Partial<State>): [State, Dispatch] =>
  useReducer(transferListReducer, {
    ...initialState,
    ...state,
  });
