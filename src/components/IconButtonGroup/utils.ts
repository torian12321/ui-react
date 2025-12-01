import { camelToSnakeCase } from '@torian12321/js-utils/string';

import type { IconButtonAction } from './IconButtonGroup.types';

export const getFormattedActions = (
  actions: IconButtonAction[] = [],
  isGroupDisabled: boolean = false,
): IconButtonAction[] =>
  actions
    .filter(({ show = true }) => show)
    .map(action => {
      const { disabled = false, isLoading = false } = action;
      const dataTestid =
        action['data-testid'] ?? `option-${camelToSnakeCase(action.label)}`;

      return {
        ...action,
        'data-testid': dataTestid,
        disabled: disabled || isLoading || isGroupDisabled,
      };
    });
