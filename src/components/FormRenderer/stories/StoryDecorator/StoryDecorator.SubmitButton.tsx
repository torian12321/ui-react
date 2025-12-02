import { Button } from 'src/components';

import type { SubmitButtonProps } from './StoryDecorator.types';

export const SubmitButton = ({ formId }: SubmitButtonProps) => (
  <Button primary type='submit' form={formId}>
    Submit
  </Button>
);
