import { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  mockOptions,
  mockOptionsTwo,
} from 'formRenderer/__mock__/mockFormUtils';
import { formWithChoices } from 'formRenderer/__mock__/withChocies/formWithChocies.base';
import { FormRenderer } from 'formRenderer/FormRenderer';
import type { FormRendererProps } from 'formRenderer/FormRenderer.types';

import { Button } from 'src/components';

import { StoryDecorator } from '../StoryDecorator';

const meta: Meta<FormRendererProps> = {
  title: 'FormRenderer/Options',
  component: FormRenderer,
  decorators: [StoryDecorator],
  args: {
    id: 'form-renderer',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const StoryWithApiSimulation = (args: FormRendererProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [toggle, setToggle] = useState(false);

  const dynamicChoices = toggle ? mockOptions : mockOptionsTwo;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleToggle = async () => {
    setIsLoading(true);

    // Simulate a delay in the API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsLoading(false);
    setToggle(!toggle);
  };

  return (
    <>
      <Button primary loading={isLoading} onClick={handleToggle}>
        Toggle Options
      </Button>

      <FormRenderer
        {...args}
        choicesCollection={{
          optionsList: {
            isLoading,
            choices: dynamicChoices,
          },
        }}
      />
    </>
  );
};

export const Required: Story = {
  render: StoryWithApiSimulation,
  args: formWithChoices,
};

export const WithDefaultValues: Story = {
  render: StoryWithApiSimulation,
  args: {
    ...formWithChoices,
    defaultValues: {
      dropdown_one: 'chamber_senate',
      dropdown_two: 'option_two',
      radio_one: 'chamber_both',
      radio_two: 'chamber_house',
    },
  },
};
