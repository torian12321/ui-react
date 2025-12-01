import type { IconButtonAction } from 'src/components';
import type { ComponentWithStyles, ComponentWithTestId } from 'src/types';

import type { HighlightConfig } from './TextArea';

export type QueryConfig = {
  /** Case sensitive search */
  caseSensitive?: boolean;
  /** Ignore whitespaces on search */
  ignoreWhitespaces?: boolean;
};

export type TextareaSearchableProps = ComponentWithTestId &
  ComponentWithStyles & {
    /** Text to be searched */
    text?: string;
    /** Default query use in search */
    defaultQuery?: string;
    /** Config to override default highlight component */
    highlightConfig?: HighlightConfig;
    queryConfig?: QueryConfig;
    /** Actions to be displayed in the actions bar */
    actions?: IconButtonAction[];
    loading?: boolean;
  };
