import { createContext, useContext } from 'react';

import type { FormStylesContextProps } from './FormStylesContext.types';

type ContextWithValues = Required<FormStylesContextProps>;
const iniValues: ContextWithValues = {
  innerLabel: false,
  inlineDisplay: false,
  sxFields: {},
  sxFieldsByType: {},
  sxFieldsByName: {},
};

const formStylesContext = createContext<FormStylesContextProps>(iniValues);

formStylesContext.displayName = 'FormStylesContext';

export const FormStylesProvider = formStylesContext.Provider;

export const useFormStylesContext = (): ContextWithValues => {
  const context = useContext(formStylesContext);

  if (!context) {
    throw new Error(
      'Form compound components cannot be rendered outside the FormStylesContext component',
    );
  }

  return context as ContextWithValues;
};
