import { FIELD_TYPE, FIELDS_WITH_OPTIONS } from '../constants';
import type { Field, FormSchema } from '../FormRenderer.types';
import { mockOptions } from './mockFormUtils';

export const formWithAllFieldTypes: FormSchema = {
  fields: Object.values(FIELD_TYPE).map(type => ({
    type,
    name: type,
    label: `Field Type - ${type.replaceAll('_', ' ')}`,
    properties: FIELDS_WITH_OPTIONS.includes(type)
      ? {
          choices: mockOptions,
        }
      : {},
  })) as Field[],
};
