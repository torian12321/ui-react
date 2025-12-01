import { useMemo } from 'react';

import type { IconButtonAction } from './IconButtonGroup.types';

type UseSortActions = {
  inmenu: IconButtonAction[];
  inlined: IconButtonAction[];
};

const checkIsInMenu = ({ inMenu = false }: IconButtonAction): boolean => inMenu;

export const useSortActions = (
  actions: IconButtonAction[],
  maxInlined: number,
): UseSortActions => {
  return useMemo(() => {
    const inlinedActions = actions.filter(action => !checkIsInMenu(action));
    const inmenuActions = actions.filter(checkIsInMenu);

    return {
      inlined: inlinedActions.slice(0, maxInlined),
      inmenu: [...inmenuActions, ...inlinedActions.slice(maxInlined)],
    };
  }, [actions, maxInlined]);
};
