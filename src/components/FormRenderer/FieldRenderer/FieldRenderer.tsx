import type { JSX } from 'react';
import { useMemo } from 'react';
import {
  useGetFieldData,
  useSetValue,
  useTouchField,
} from 'formRenderer/contexts/FormDataContext';
import { useGetFieldStyles } from 'formRenderer/contexts/FormStylesContext';
import type { FieldValue } from 'formRenderer/FormRenderer.types';

import type { FieldType } from 'src/components/FormRenderer/constants';
import { FIELD_TYPE } from 'src/components/FormRenderer/constants';

import { FieldReadOnly } from './FieldReadOnly';
import type { FieldRendererProps } from './FieldRenderer.types';
import { isFieldWithLabel, isInfoField } from './FieldRenderer.utils';
import type { FieldProps } from './Fields';
import {
  BooleanField,
  DateField,
  DateTimeField,
  DropdownField,
  DropdownMultiField,
  FileInput,
  InfoList,
  InfoMessage,
  LabelField,
  LongTextField,
  NumericField,
  OptionsListField,
  RadioGroup,
  TextField,
  TransferListField,
} from './Fields';
import { FieldWrapper } from './FieldWrapper';

export const FieldRenderer = ({
  name,
}: FieldRendererProps): JSX.Element | null => {
  const fieldData = useGetFieldData(name);
  const { innerLabel, inlineDisplay } = useGetFieldStyles(name);

  const setValue = useSetValue(name);
  const touchField = useTouchField(name);

  const {
    type = 'text',
    value,
    defaultValue,
    label,
    placeholder,
    // @ts-expect-error - TODO: check correct type
    multi = false,
    isRequired,
    visible = true,
    disabled = false,
    readOnly = false,
    isValid,
    isLoading,
    showErrors,
    properties = {},
    choices = {
      choices: [],
    },
  } = fieldData ?? {};

  const showInlineLabel = useMemo(
    () =>
      isInfoField(type) ||
      type === FIELD_TYPE.TRANSFER_LIST ||
      (!inlineDisplay && innerLabel && !isFieldWithLabel(type)),
    [inlineDisplay, innerLabel, type],
  );

  if (!visible) return null;

  // @ts-expect-error - TODO: check correct type
  const commonFieldprops: FieldProps = {
    type,
    name,
    value: value as FieldValue,
    iniValue: defaultValue,
    placeholder,
    label: showInlineLabel ? label : undefined,
    loading: isLoading,
    disabled,
    error: showErrors && !isValid,
    required: isRequired,
    properties: {
      choices: choices?.choices,
      customLabel: label,
    },
    onBlur: touchField,
    onChange: setValue,
  };

  const renderField = () => {
    if (readOnly) {
      return <FieldReadOnly {...commonFieldprops} />;
    }

    switch (type as FieldType) {
      case 'file_upload':
        return <FileInput {...commonFieldprops} />;
      case 'boolean':
        return <BooleanField {...commonFieldprops} />;
      case 'date':
        return <DateField {...commonFieldprops} />;
      case 'date_time':
        return <DateTimeField {...commonFieldprops} />;
      case 'number':
        return <NumericField {...commonFieldprops} />;
      case 'radio_button':
        return <RadioGroup {...commonFieldprops} />;
      case 'long_text':
        return <LongTextField {...commonFieldprops} />;
      case 'dropdown':
        return multi ? (
          <DropdownMultiField {...commonFieldprops} />
        ) : (
          <DropdownField {...commonFieldprops} />
        );
      case 'options_list':
        return <OptionsListField {...commonFieldprops} />;
      case 'transfer_list':
        return <TransferListField {...commonFieldprops} />;
      case 'info_message':
        return (
          <InfoMessage {...commonFieldprops} severity={properties?.severity} />
        );
      case 'info_list':
        return <InfoList {...commonFieldprops} />;
      case 'label':
        return <LabelField {...commonFieldprops} />;
      case 'text':
      default:
        return <TextField {...commonFieldprops} />;
    }
  };

  return (
    <FieldWrapper name={name} showLabel={!showInlineLabel}>
      {renderField()}
    </FieldWrapper>
  );
};
