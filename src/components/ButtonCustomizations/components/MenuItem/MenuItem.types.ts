import type { Option, OptionValue } from '../../ButtonCustomizations.types';

export type MenuItemProps = Option & {
  selected?: boolean;
  favorite?: boolean;
  onClick: (value: OptionValue) => void;
  onDelete: (value: OptionValue) => void;
  onSetFavorite?: (value: OptionValue | null) => void;
};

export type BtnVariant = 'delete' | 'favorite' | 'setAsFavorite';

export type BtnProps = {
  show?: boolean;
  variant?: BtnVariant;
  onClick: VoidFunction;
};
