import { useState } from 'react';
import type { Decorator, StoryContext } from '@storybook/react-vite';
import { action } from 'storybook/actions';

import { Tabs } from 'src/components';
import type {
  OnChangeArgs,
  OnSubmitArgs,
} from 'src/components/FormRenderer/contexts/FormDataContext';

import type { FieldValue, FormRendererProps } from '../../FormRenderer.types';
import { DEFAULT_FORM_ID, TABS } from './constants';
import { CodeExample } from './StoryDecorator.CodeExample';
import { SubmitButton } from './StoryDecorator.SubmitButton';
import { TabBody } from './StoryDecorator.TabBody';

export const StoryDecorator: Decorator<FormRendererProps> = (
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Story,
  context: StoryContext<FormRendererProps>,
) => {
  const { args } = context;
  const {
    id = DEFAULT_FORM_ID,
    fields = [],
    logic = [],
  } = args as FormRendererProps;

  const [activeTab, setActiveTab] = useState<string>(TABS[0]);
  const [formValues, setFormValues] = useState<FieldValue>({});

  const handleUpdateValues = ({ values }: OnChangeArgs) => {
    setFormValues(values);
  };
  const handleOnSubmit = ({ values, formDetails }: OnSubmitArgs) => {
    action('Field Values')(values);
    action('Form Details')({
      isValid: formDetails?.isValid,
      invalidFields: formDetails?.invalidFields,
      isPristine: formDetails?.isPristine,
    });
  };

  const formArgs = {
    ...args,
    id,
    fields,
    logic,
    onChange: handleUpdateValues,
    onSubmit: handleOnSubmit,
  };

  return (
    <Tabs labels={TABS} activeTab={activeTab} onChange={setActiveTab}>
      <TabBody>
        <div>
          <Story {...context} args={formArgs} />
          <SubmitButton formId={id} />
        </div>
      </TabBody>
      <TabBody>
        <div>
          <Story {...formArgs} />
          <SubmitButton formId={id} />
        </div>
        <CodeExample obj={{ fields, logic }} />
      </TabBody>
      <TabBody>
        <div>
          <Story {...formArgs} />
          <SubmitButton formId={id} />
        </div>
        <CodeExample obj={formValues} />
      </TabBody>
      <TabBody>
        <div>
          <Story {...formArgs} />
          <SubmitButton formId={id} />
        </div>
        <CodeExample obj={formValues} />
        <CodeExample obj={{ fields, logic }} />
      </TabBody>
    </Tabs>
  );
};
