import type {
  ChoicesCollection,
  CustomLabels,
} from 'formRenderer/FieldRenderer/Fields/Fields.types';
import type {
  DefaultValues,
  Field,
  FormLogic,
} from 'formRenderer/FormRenderer.types';

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
