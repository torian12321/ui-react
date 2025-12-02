import type { MuiStyles } from '../../../../types';
import type { FieldType } from '../../constants';

export type SxFieldsByType = { [key in FieldType]?: MuiStyles | MuiStyles[] };
export type SxFieldsByName<FieldNames extends string = string> = {
  [key in FieldNames]?: MuiStyles | MuiStyles[];
};

export type FormStylesContextProps = {
  /** only applies  if `inlineDisplay` is `false` */
  innerLabel?: boolean;
  inlineDisplay?: boolean;

  /** Styles to apply to ALL fields */
  sxFields?: MuiStyles | MuiStyles[];
  /** Styles to apply to fields based on field type. It will apply on top of sxFields */
  sxFieldsByType?: SxFieldsByType;
  /** Styles to apply to fields based on field name. It will apply on top of sxFieldsByType */
  sxFieldsByName?: SxFieldsByName;
};
