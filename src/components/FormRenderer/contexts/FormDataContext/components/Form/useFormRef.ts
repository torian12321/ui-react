import { useRef } from 'react';

import type { FormRef } from './Form.types';

export const useFormRef = <FieldNames extends string = string>() =>
  useRef<FormRef<FieldNames>>(null);
