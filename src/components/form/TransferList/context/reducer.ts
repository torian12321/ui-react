import type { Action, State } from './context.types';
import { isItemsArrayUpdated } from './utils';

export const transferListReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'updateState': {
      const { payload: updates = {} } = action;

      return {
        ...state,
        ...updates,
      };
    }
    case 'setSelectedItems': {
      const { payload: values = [] } = action;

      const isUpdated = isItemsArrayUpdated(state.selectedItems, values);
      if (!isUpdated) return state;

      return {
        ...state,
        selectedItems: values,
      };
    }
    case 'unselectAllItems': {
      return {
        ...state,
        activeItems: [],
        selectedItems: [],
      };
    }
    case 'unselectItems': {
      const { payload: values = [] } = action;

      return {
        ...state,
        activeItems: [],
        selectedItems: state.selectedItems.filter(
          item => !values.includes(item),
        ),
      };
    }
    case 'selectAllItems': {
      return {
        ...state,
        activeItems: [],
        selectedItems: [...state.items.map(item => item.value)],
      };
    }
    case 'selectItems': {
      const { payload: values = [] } = action;

      return {
        ...state,
        activeItems: [],
        selectedItems: [...new Set([...state.selectedItems, ...values])],
      };
    }
    case 'toggleIsActive': {
      const { payload: itemValue } = action;
      if (!itemValue) return state;

      const isActive = state.activeItems.includes(itemValue);

      if (isActive) {
        return {
          ...state,
          activeItems: state.activeItems.filter(item => item !== itemValue),
        };
      }

      return {
        ...state,
        activeItems: isActive
          ? state.activeItems.filter(item => item !== itemValue)
          : [...state.activeItems, itemValue],
      };
    }

    default:
      return state;
  }
};
