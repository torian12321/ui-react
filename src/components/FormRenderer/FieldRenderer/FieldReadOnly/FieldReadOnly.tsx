import type { JSX } from 'react';

import { formatDate, formatDateTime, isString } from '@torian12321/js-utils';

import { useLocalization } from 'src/localization';

import { FieldProps, InfoList, InfoMessage } from '../Fields';
import { Content, Wrapper } from './FieldReadOnly.styles';

const forceToBeArray = <T,>(value: T | T[]): T[] =>
  Array.isArray(value) ? value : [value];

export const FieldReadOnly = (props: FieldProps): JSX.Element | null => {
  const l10n = useLocalization();
  const { type, value = '', properties = {} } = props;

  // INFO_MESSAGE and INFO_LIST types are non-editable fields by default
  // Do not apply any customization
  if (type === 'info_message') {
    return <InfoMessage {...props} />;
  }
  if (type === 'info_list') {
    return <InfoList {...props} />;
  }

  const getPrintableValues = (): string | string[] => {
    switch (type) {
      case 'file_upload':
        return 'FIELD_TYPE.FILE_UPLOAD'; // TODO
      case 'boolean':
        return value
          ? l10n('common.booleanOptions.yes')
          : l10n('common.booleanOptions.no');

      case 'date':
        return formatDate(value as string);
      case 'date_time':
        return formatDateTime(value as string);

      case 'number':
        return value ? value.toString() : '';

      case 'options_list':
      case 'radio_button':
      case 'dropdown': {
        const { choices = [] } = properties;
        const selectedValues = forceToBeArray(value);

        return choices
          .filter(choice => choice.value)
          .filter(choice => selectedValues.includes(choice.value))
          .map(choice => choice.label ?? choice.value?.toString() ?? '');
      }

      case 'long_text':
      case 'text':
      default:
        return isString(value) ? value : '';
    }
  };

  const printableValues = forceToBeArray(getPrintableValues());

  return (
    <Wrapper>
      {printableValues.map((value, key) => (
        <Content key={key} title={value}>
          {value}
        </Content>
      ))}
    </Wrapper>
  );
};
