import type { SetStateAction } from 'react';

import type { FieldValue, FormRendererProps } from '../../FormRenderer.types';

export type FormExampleProps = FormRendererProps & {
  onUpdateValues?: SetStateAction<FieldValue>;
};

export type CodeExampleProps = {
  obj: { [fieldName: string]: unknown };
};

export type SubmitButtonProps = {
  formId: string;
};
