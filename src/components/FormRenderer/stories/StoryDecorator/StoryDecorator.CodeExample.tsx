import MuiBox from '@mui/material/Box';

import { codeStyles } from './StoryDecorator.styles';
import type { CodeExampleProps } from './StoryDecorator.types';

export const CodeExample = ({ obj }: CodeExampleProps) => (
  <MuiBox component='pre' sx={codeStyles}>
    {JSON.stringify(obj, null, 2)}
  </MuiBox>
);
