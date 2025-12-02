import type { JSX } from 'react';
import MuiIconDelete from '@mui/icons-material/Delete';
import MuiIconFavorite from '@mui/icons-material/Star';
import MuiIconMakeFavorite from '@mui/icons-material/StarBorder';
import MuiIconButton from '@mui/material/IconButton';

import { useLocalization } from 'src/localization';
import type { LocalizationKey } from 'src/localization/localization.types';

import type { BtnProps, BtnVariant } from './MenuItem.types';

type IconDetails = {
  component: React.ElementType;
  label: LocalizationKey;
};

const iconsDictionary: Record<BtnVariant, IconDetails> = {
  delete: {
    component: MuiIconDelete,
    label: 'components.buttonCustomizations.menuItemButton.delete',
  },
  favorite: {
    component: MuiIconFavorite,
    label: 'components.buttonCustomizations.menuItemButton.favorite',
  },
  setAsFavorite: {
    component: MuiIconMakeFavorite,
    label: 'components.buttonCustomizations.menuItemButton.setAsFavorite',
  },
};

export const Btn = ({
  show = true,
  variant = 'delete',
  onClick,
}: BtnProps): JSX.Element | null => {
  const l10n = useLocalization();
  if (!show) return null;

  const { component: IconComponent, label } = iconsDictionary[variant];

  return (
    <MuiIconButton
      onClick={onClick}
      aria-label={l10n(label)}
      title={l10n(label)}
    >
      <IconComponent fontSize='small' />
    </MuiIconButton>
  );
};
