import { useLocalization } from 'src/localization';

import type {
  FieldError,
  UseCalculateErrorsArguments,
} from './DialogCreate.types';

const l10nMessages =
  'components.buttonCustomizations.dialogCreate.errorMessages';

export const useCalculateErrors = (
  label: string,
  args: UseCalculateErrorsArguments,
): FieldError[] => {
  const l10n = useLocalization();
  const { options, minNameLength, maxNameLength } = args;
  const errorsList = [];

  const optionsLabels = options.map(option =>
    option.label.trim().toLowerCase(),
  );

  if (minNameLength && label.trim().length < minNameLength) {
    errorsList.push(l10n(`${l10nMessages}.tooShort`, { min: minNameLength }));
  }
  if (maxNameLength && label.length > maxNameLength) {
    errorsList.push(l10n(`${l10nMessages}.tooLong`, { max: maxNameLength }));
  }
  if (optionsLabels.includes(label.trim().toLowerCase())) {
    errorsList.push(l10n(`${l10nMessages}.alreadyInUse`));
  }

  return errorsList;
};
