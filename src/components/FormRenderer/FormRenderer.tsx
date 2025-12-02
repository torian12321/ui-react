import type { RefObject } from 'react';
import { forwardRef } from 'react';

import type { FormRef } from './contexts/FormDataContext';
import { Form, FormDataContextWrapper } from './contexts/FormDataContext';
import { FormStylesProvider } from './contexts/FormStylesContext';
import { FieldRenderer } from './FieldRenderer';
import type { FormRendererProps } from './FormRenderer.types';

type ComponentProps<FieldNames extends string = string> = FormRendererProps & {
  ref: RefObject<FormRef<FieldNames>>;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const FormRenderer = forwardRef<FormRef<any>, ComponentProps>(
  (
    {
      id,
      fields = [],
      logic = [],
      disabled = false,
      defaultValues = {},
      validateAfterSubmit,
      sxForm,
      sxFields,
      sxFieldsByName,
      sxFieldsByType,
      innerLabel,
      inlineDisplay,
      choicesCollection = {},
      customLabels = {},
      onSubmit = () => undefined,
      onChange = () => undefined,
    }: FormRendererProps,
    ref,
  ) => (
    <FormDataContextWrapper
      store={{
        fields,
        logic,
        defaultValues,
        validateAfterSubmit,
        choicesCollection,
        customLabels,
      }}
    >
      <FormStylesProvider
        value={{
          innerLabel,
          inlineDisplay,
          sxFields,
          sxFieldsByType,
          sxFieldsByName,
        }}
      >
        <Form
          id={id}
          ref={ref}
          sx={sxForm}
          disabled={disabled}
          onSubmit={onSubmit}
          onChange={onChange}
        >
          {fields.map(({ name }) => (
            <FieldRenderer key={name} name={name} />
          ))}
        </Form>
      </FormStylesProvider>
    </FormDataContextWrapper>
  ),
);
