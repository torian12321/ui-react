import RemoveIcon from '@mui/icons-material/KeyboardArrowLeft';
import AddIcon from '@mui/icons-material/KeyboardArrowRight';
import RemoveAllIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import AddAllIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import MuiBox from '@mui/material/Box';

import { IconButton } from 'src/components';
import { useLocalization } from 'src/localization';

import {
  useSelectAllItems,
  useSelectItems,
  useUnselectAllItems,
  useUnselectItems,
} from '../../context/actions';
import { btnStyles, wrapperStyles } from './ActionsBar.styles';
import { useGetDisabledActions } from './useGetDisabledActions';

export const ActionsBar = () => {
  const l10n = useLocalization();
  const {
    isDisabledAddAll,
    isDisabledAdd,
    isDisabledRemove,
    isDisabledRemoveAll,
  } = useGetDisabledActions();

  const addAll = useSelectAllItems();
  const addItems = useSelectItems();
  const removeItems = useUnselectItems();
  const removeAll = useUnselectAllItems();

  return (
    <MuiBox data-testid='transfer-actions' sx={wrapperStyles}>
      <IconButton
        icon={AddAllIcon}
        label={l10n('common.actions.addAll')}
        sx={btnStyles}
        disabled={isDisabledAddAll}
        onClick={addAll}
      />
      <IconButton
        icon={AddIcon}
        label={l10n('common.actions.add')}
        sx={btnStyles}
        disabled={isDisabledAdd}
        onClick={addItems}
      />
      <IconButton
        icon={RemoveIcon}
        label={l10n('common.actions.remove')}
        sx={btnStyles}
        disabled={isDisabledRemove}
        onClick={removeItems}
      />
      <IconButton
        icon={RemoveAllIcon}
        label={l10n('common.actions.removeAll')}
        sx={btnStyles}
        disabled={isDisabledRemoveAll}
        onClick={removeAll}
      />
    </MuiBox>
  );
};
