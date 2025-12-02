import type { ComponentWithStyles, ComponentWithTestId } from 'src/types';

export type OptionValue = string;
export type Option = {
  value: OptionValue;
  label: string;
  disabled?: boolean;
  canDelete?: boolean;
};

export type ButtonCustomizationsProps = ComponentWithTestId &
  ComponentWithStyles & {
    options: Option[];

    /** The value of the selected option */
    value?: OptionValue | null;
    /** The value of the favorite/default option */
    favorite?: OptionValue | null;

    /** Disable All actions */
    disabled?: boolean;
    /**
     * Disable the create action only.
     * Useful when customizations are not allowed because of no changes on view.
     */
    disableCreate?: boolean;
    loading?: boolean;
    minNameLength?: number;
    maxNameLength?: number;

    onCreate?: (customizationLabel: string) => Promise<boolean>;
    onDelete: (value: OptionValue) => void;
    onSelect: (value: OptionValue) => void;
    /**
     * Set or remove the favorite option.
     * If the value is null, the favorite option will be removed.
     * If the value is not null, the favorite option will be set to the value.
     */
    onSetFavorite?: (value: OptionValue | null) => void;
  };
