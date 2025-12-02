import { useMemo } from 'react';

import type { MuiStyles } from '../../../../types';
import { useCombineSxStyles } from '../../../../utils/useCombineSxStyles';
import { FieldType } from '../../FormRenderer.constants';
import { useGetFields } from '../FormDataContext';
import { useFormStylesContext } from './FormStylesContext';

type UseGetFieldStyles = {
  innerLabel: boolean;
  inlineDisplay: boolean;
  sxStyles: MuiStyles;
};

export const useGetFieldStyles = (fieldName: string): UseGetFieldStyles => {
  const fields = useGetFields();
  const field = fields.find(field => field.name === fieldName);
  const fieldType = field?.type;

  const {
    inlineDisplay = false,
    innerLabel = false,
    sxFields = {},
    sxFieldsByName = {},
    sxFieldsByType = {},
  } = useFormStylesContext();

  const stylesByName = useMemo(
    () => sxFieldsByName[fieldName] ?? {},
    [fieldName, sxFieldsByName],
  );
  const stylesByType = useMemo(
    () => sxFieldsByType[fieldType as FieldType] ?? {},
    [fieldType, sxFieldsByType],
  );

  const sxStyles = useCombineSxStyles(sxFields, stylesByType, stylesByName);

  return {
    inlineDisplay,
    innerLabel,
    sxStyles,
  };
};
