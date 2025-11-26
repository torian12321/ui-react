export type TypeFromObject<T extends object> = T[keyof T];

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export type NestedPaths<T extends object> = {
  [K in keyof T]: T[K] extends object
    ? `${K & string}` | `${K & string}.${NestedPaths<T[K]>}`
    : `${K & string}`;
}[keyof T];

/** Convert an object to a string path */
export type PathsToStringProps<T> = T extends string
  ? ''
  : {
      [K in keyof T]: T[K] extends object
        ? `${string & K}.${PathsToStringProps<T[K]>}`
        : string & K;
    }[keyof T];
