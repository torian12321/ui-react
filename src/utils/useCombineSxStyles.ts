import { useMemo } from 'react';

import type { MuiStyles } from '../types';
import { combineSxStyles } from './combineSxStyles';

/**
 * A custom hook that combines multiple MUI styles into a single style object.
 *
 * @param {...(MuiStyles | MuiStyles[] | undefined)} args - The style objects or arrays of style objects to combine.
 * @returns {MuiStyles} A memoized combined style object.
 */

export const useCombineSxStyles = (
  ...args: (MuiStyles | MuiStyles[] | undefined)[]
): MuiStyles => useMemo(() => combineSxStyles(...args), [args]);
