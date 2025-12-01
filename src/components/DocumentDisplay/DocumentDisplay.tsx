import type { JSX } from 'react';
import MuiBox from '@mui/material/Box';
import MuiPaper from '@mui/material/Paper';
import MuiTypography from '@mui/material/Typography';

import { useCombineSxStyles } from 'src/utils';

import { contentStyles, wrapperStyles } from './DocumentDisplay.styles';
import type { DocumentDisplayProps } from './DocumentDisplay.types';
import { isValidHtmlContent } from './utils';

export const DocumentDisplay = ({
  content = '',
  'data-testid': dataTestid,
  sx,
  sxContent,
}: DocumentDisplayProps): JSX.Element => {
  const sxStyles = useCombineSxStyles(wrapperStyles, sx);
  const sxContentStyles = useCombineSxStyles(contentStyles, sxContent);
  const isValidHtml = isValidHtmlContent(content);

  return (
    <MuiPaper data-testid={dataTestid} elevation={2} sx={sxStyles}>
      {isValidHtml ? (
        <MuiBox
          sx={sxContentStyles}
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      ) : (
        <MuiTypography sx={sxContentStyles} variant='body1'>
          {content}
        </MuiTypography>
      )}
    </MuiPaper>
  );
};
