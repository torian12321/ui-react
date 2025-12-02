import type {
  ChoicesCollection,
  CustomLabels,
} from '../../../../FieldRenderer/Fields/Fields.types';
import type {
  DefaultValues,
  Field,
  FormLogic,
} from '../../../../FormRenderer.types';

export type Props<
  FieldNames extends string = string,
  ChoicesRef extends string = string,
> = {
  store: {
    fields: Field<FieldNames, ChoicesRef>[];
    logic?: FormLogic<FieldNames>[];
    defaultValues?: DefaultValues<FieldNames>;
    validateAfterSubmit?: boolean;
    choicesCollection?: ChoicesCollection<ChoicesRef>;
    customLabels?: CustomLabels<FieldNames>;
  };
};
