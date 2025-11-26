import type { MuiStyles } from '../types';

/**
 * Combines multiple style objects into a single style object. It can handle an arbitrary number of arguments,
 * and each argument can be a single style object, an array of style objects, or undefined. Style objects later
 * in the arguments list will override properties of those earlier in the list if they contain the same keys.
 *
 * @param {...(MuiStyles | MuiStyles[] | undefined)[]} args - A spread of style objects, arrays of style objects, or undefined.
 * @returns {MuiStyles} A single style object derived by combining all input style objects.
 */

export const combineSxStyles = (
  ...args: (MuiStyles | MuiStyles[] | undefined)[]
): MuiStyles =>
  args.reduce(
    (acc, arg = {}) => ({
      ...acc,
      ...(Array.isArray(arg) ? combineSxStyles(...arg) : arg),
    }),
    {},
  ) as MuiStyles;
