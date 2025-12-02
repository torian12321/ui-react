import type { PropsWithChildren } from 'react';

import { FormDataProvider, useSetState } from '../../FormDataContext';
import { applyFieldLogic } from '../../logic/applyLogic';
import { getInitialFormValues } from '../../utils/getInitialValues';
import type { Props } from './FormDataContextWrapper.types';

/**
 * Wrapper component that provides the form data context to the form renderer.
 * Format the data to be used in the form renderer before saving it in the context.
 * It also applies an initial logic to fields before render on screen to avoid initial flickers.
 */
export const FormDataContextWrapper = ({
  children,
  store,
}: PropsWithChildren<Props>) => {
  const {
    fields,
    logic = [],
    choicesCollection = {},
    customLabels = {},
    defaultValues,
    validateAfterSubmit,
  } = store;

  // Get initial default fields
  const initialValues = getInitialFormValues(fields, defaultValues);

  // Apply an initial logic to fields before render on screen to avoid initial flickers
  const logicFields = applyFieldLogic(fields, logic, initialValues);

  const [state, dispatch] = useSetState({
    values: initialValues,
    fields: logicFields,
    logic,
    validateAfterSubmit,
    initialData: {
      values: initialValues,
      fields: logicFields,
    },
  });

  const externalData = {
    choicesCollection,
    customLabels,
  };

  return (
    <FormDataProvider value={[state, dispatch, externalData]}>
      {children}
    </FormDataProvider>
  );
};
