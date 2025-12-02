import type { KeyboardEvent } from 'react';
import { forwardRef } from 'react';
import MuiBox from '@mui/material/Box';
import MuiMenuItem from '@mui/material/MenuItem';

import { Btn } from './MenuItem.Button';
import { textStyles, wrapperStyles } from './MenuItem.styles';
import type { MenuItemProps } from './MenuItem.types';

export const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(
  (
    {
      value,
      label,
      selected = false,
      favorite = false,
      disabled = false,
      canDelete = false,
      onClick,
      onDelete,
      onSetFavorite,
      ...rest
    }: MenuItemProps,
    // Use ref to forward the ref to the MuiMenuItem and allow keyboard navigation
    ref,
  ) => {
    const handleOnClick = () => {
      if (disabled) return;

      onClick(value);
    };
    const handleOnKeyDown = (e: KeyboardEvent<HTMLLIElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        handleOnClick();
      }
    };

    const handleOnDelete = () => {
      if (disabled) return;

      onDelete?.(value);
    };

    const handleOnSetFavorite = () => {
      if (disabled || !onSetFavorite) return;

      if (favorite) {
        onSetFavorite(null);
      } else {
        onSetFavorite?.(value);
      }
    };

    return (
      <MuiMenuItem
        ref={ref}
        {...rest}
        disableRipple
        sx={wrapperStyles}
        selected={selected}
        disabled={disabled}
        onKeyDown={handleOnKeyDown}
      >
        <MuiBox sx={textStyles} component='span' onClick={handleOnClick}>
          {label}
        </MuiBox>

        <Btn show={canDelete} variant='delete' onClick={handleOnDelete} />

        <Btn
          show={!!onSetFavorite}
          variant={favorite ? 'favorite' : 'setAsFavorite'}
          onClick={handleOnSetFavorite}
        />
      </MuiMenuItem>
    );
  },
);
