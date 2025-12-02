import { applyFieldLogic } from '../logic';
import { getEmptyFormValues } from '../utils/getInitialValues';
import type { Action, State } from './reducer.types';

export const formDataReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'setValue': {
      if (!action.payload) return state;

      const { fieldName, value } = action.payload;

      // Pervent `setState` updating non-existing fields
      const fieldNames = Object.values(state.fields).map(f => f.name);
      if (!fieldNames.includes(fieldName)) return state;

      // If the value is the same, don't update the state
      // This is to avoid unnecessary updates caused byre-renders
      if (state.values[fieldName] === value) return state;

      const newValues = { ...state.values, [fieldName]: value };
      const newFields = applyFieldLogic(state.fields, state.logic, newValues);

      return { ...state, values: newValues, fields: newFields };
    }
    case 'touchField': {
      if (!action.payload) return state;

      const fieldName = action.payload;

      if (state.touched.includes(fieldName)) {
        return state;
      }
      return {
        ...state,
        touched: [...state.touched, fieldName],
      };
    }
    case 'submitForm': {
      return {
        ...state,
        isSubmitted: true,
        isSubmitSuccessful: Boolean(action?.payload),
      };
    }
    case 'resetForm': {
      const { initialData } = state;

      return {
        ...state,
        fields: initialData.fields,
        values: initialData.values,
        touched: [],
        isSubmitted: false,
        isSubmitSuccessful: false,
      };
    }
    case 'clearForm': {
      return {
        ...state,
        fields: state.initialData.fields,
        values: getEmptyFormValues(state.initialData.fields),
        touched: [],
        isSubmitted: false,
        isSubmitSuccessful: false,
      };
    }
    default:
      return state;
  }
};
