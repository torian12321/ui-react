import type { JSX, PropsWithChildren } from 'react';
import { useId } from 'react';
import MuiBox from '@mui/material/Box';
import MuiTypography from '@mui/material/Typography';

import { isString } from '@torian12321/js-utils/typeChecker';

import { useCombineSxStyles } from 'src/utils';

import {
  labelStyles,
  valueStyles,
  wrapperStyles,
} from './LabeledContent.styles';
import type { LabeledContentProps } from './LabeledContent.types';

export const LabeledContent = ({
  children,
  'data-testid': dataTestid,
  label,
  sx,
  sxLabel,
  inlined = false,
}: PropsWithChildren<LabeledContentProps>): JSX.Element => {
  const labelId = useId();
  const wrapperSx = useCombineSxStyles(wrapperStyles({ inlined }), sx);
  const labelSx = useCombineSxStyles(labelStyles, sxLabel);

  const content = isString(children) ? (
    <MuiTypography sx={valueStyles}>{children}</MuiTypography>
  ) : (
    children
  );

  return (
    <MuiBox
      sx={wrapperSx}
      data-testid={dataTestid}
      role='region'
      aria-labelledby={labelId}
    >
      <MuiTypography id={labelId} sx={labelSx}>
        {label}
      </MuiTypography>
      {content}
    </MuiBox>
  );
};
