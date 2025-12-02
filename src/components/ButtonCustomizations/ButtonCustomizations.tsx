import type { JSX } from 'react';
import MuiBox from '@mui/material/Box';
import MuiDivider from '@mui/material/Divider';

import { useDialog } from 'src/components/Dialogs/useDialog';
import { useCombineSxStyles } from 'src/utils';

import { ButtonAdd } from './components/ButtonAdd';
import { ButtonSelector } from './components/ButtonSelector';
import { DialogCreate } from './components/DialogCreate';
import { Menu } from './components/Menu';
import { MenuItem } from './components/MenuItem';
import { wrapperStyles } from './ButtonCustomizations.styles';
import type {
  ButtonCustomizationsProps,
  Option,
  OptionValue,
} from './ButtonCustomizations.types';
import {
  DEFAULT_CUSTOMIZATION_NAME_MAX_LENGHT,
  DEFAULT_CUSTOMIZATION_NAME_MIN_LENGHT,
} from './constants';
import { useAnchor } from './useAnchor';

export const ButtonCustomizations = ({
  'data-testid': dataTestid = 'customizations-selector',
  value,
  favorite,
  options = [],
  sx = {},
  minNameLength = DEFAULT_CUSTOMIZATION_NAME_MIN_LENGHT,
  maxNameLength = DEFAULT_CUSTOMIZATION_NAME_MAX_LENGHT,
  disabled = false,
  disableCreate = false,
  loading = false,

  onSelect,
  onCreate,
  onDelete,
  onSetFavorite,
}: ButtonCustomizationsProps): JSX.Element => {
  const sxStyles = useCombineSxStyles(wrapperStyles, sx);
  const [menuAnchor, menuActions] = useAnchor();
  const [dialogIsOpen, dialogActions] = useDialog();

  const open = Boolean(menuAnchor);
  const isDisabled = disabled || loading;
  const disableSelector = isDisabled || !options.length;
  const optionsDefault = options.filter(option => !option.canDelete);
  const optionsDeletable = options.filter(option => option.canDelete);

  const handleOnClickSelector = (target: HTMLElement) => {
    menuActions.open(target);
  };

  const handleMenuItemClick = (value: OptionValue) => {
    onSelect(value);
    menuActions.close();
  };

  const handleOnCreateCustomization = async (label: string) => {
    if (!onCreate) return false;

    const isSuccess = await onCreate(label);

    if (isSuccess) {
      menuActions.close();
    }

    return isSuccess;
  };

  const renderOptions = (ops: Option[] = []) =>
    ops.map(op => (
      <MenuItem
        key={op.value}
        value={op.value}
        label={op.label}
        favorite={op.value === favorite}
        selected={op.value === value}
        canDelete={op.canDelete}
        disabled={op.disabled ?? isDisabled}
        onClick={handleMenuItemClick}
        onDelete={onDelete}
        onSetFavorite={onSetFavorite}
      />
    ));

  return (
    <MuiBox data-testid={dataTestid} sx={sxStyles}>
      <ButtonSelector
        open={open}
        loading={loading}
        disabled={disableSelector}
        onClick={handleOnClickSelector}
      />

      <Menu anchorEl={menuAnchor} open={open} onClose={menuActions.close}>
        {renderOptions(optionsDefault)}

        {!!optionsDeletable.length && <MuiDivider sx={{ my: 0.5 }} />}
        {renderOptions(optionsDeletable)}
      </Menu>

      {!!onCreate && (
        <>
          <ButtonAdd
            disabled={isDisabled || disableCreate}
            onClick={dialogActions.open}
          />
          <DialogCreate
            open={dialogIsOpen}
            loading={loading}
            options={options}
            minNameLength={minNameLength}
            maxNameLength={maxNameLength}
            onClose={dialogActions.close}
            onSubmit={handleOnCreateCustomization}
          />
        </>
      )}
    </MuiBox>
  );
};
