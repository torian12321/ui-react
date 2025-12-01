import type { JSX } from 'react';
import MuiBox from '@mui/material/Box';

import { IconButton } from 'src/components';
import { useCombineSxStyles } from 'src/utils';

import { MoreOptions } from './components/MoreOptions';
import { wrapperStyles } from './IconButtonGroup.styles';
import type { IconButtonGroupProps } from './IconButtonGroup.types';
import { useSortActions } from './useSortActions';
import { getFormattedActions } from './utils';

export const IconButtonGroup = ({
  'data-testid': dataTestid,
  actions = [],
  sx,
  disabled = false,
  orientation = 'row',
  maxDisplayedActions = 3,
}: IconButtonGroupProps): JSX.Element | null => {
  const sxWrapper = useCombineSxStyles(wrapperStyles(orientation), sx);
  const formattedActions = getFormattedActions(actions, disabled);
  const { inlined: inlinedActions, inmenu: inmenuActions } = useSortActions(
    formattedActions,
    maxDisplayedActions,
  );

  if (!formattedActions.length) return null;

  return (
    <MuiBox data-testid={dataTestid} sx={sxWrapper}>
      {inlinedActions.map((action, index) => {
        const {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          inMenu,
          ...rest
        } = action;

        return <IconButton key={index} {...rest} />;
      })}

      <MoreOptions actions={inmenuActions} orientation={orientation} />
    </MuiBox>
  );
};
