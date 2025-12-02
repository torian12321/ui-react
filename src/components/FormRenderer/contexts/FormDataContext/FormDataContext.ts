import { createContext, useContext, useReducer } from 'react';

import { formDataReducer } from './reducer/reducer';
import type { ExternalData } from './reducer/reducer.types';
import type { Context, Dispatch, State } from './reducer';

const initialState: Required<State> = {
  values: {},
  fields: [],
  logic: [],
  touched: [],
  isSubmitted: false,
  isSubmitSuccessful: false,
  validateAfterSubmit: false,
  initialData: {
    values: {},
    fields: [],
  },
};
const initialExternalData: ExternalData = {
  choicesCollection: {},
  customLabels: {},
};

const FormDataContext = createContext<Context>([
  initialState,
  () => null,
  initialExternalData,
]);

FormDataContext.displayName = 'FormDataContext';

export const FormDataProvider = FormDataContext.Provider;

export const useFormDataContext = (): Context => {
  const context = useContext(FormDataContext);

  if (!context) {
    throw new Error(
      'useFormDataContext cannot be used outside FormDataContext component',
    );
  }

  return context;
};

export const useFormDataState = (): State => useFormDataContext()[0];
export const useFormDataDispatch = (): Dispatch => useFormDataContext()[1];
export const useExternalData = (): ExternalData => useFormDataContext()[2];

export const useSetState = (state: Partial<State>): [State, Dispatch] =>
  useReducer(formDataReducer, {
    ...initialState,
    ...state,
  });
