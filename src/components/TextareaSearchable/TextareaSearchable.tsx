import type { JSX } from 'react';
import { useEffect, useState } from 'react';
import MuiBox from '@mui/material/Box';

import { IconButtonGroup } from 'src/components';
import { useCombineSxStyles } from 'src/utils';

import { SearchBar } from './SearchBar';
import { TextArea } from './TextArea';
import { headerStyles, wrapperStyles } from './TextareaSearchable.styles';
import type { TextareaSearchableProps } from './TextareaSearchable.types';
import { getPartsArray } from './TextareaSearchable.utils';

export const TextareaSearchable = ({
  'data-testid': dataTestid = 'text-area-searchable',
  text = '',
  defaultQuery = '',
  sx,
  actions = [],
  queryConfig,
  highlightConfig,
  loading = false,
}: TextareaSearchableProps): JSX.Element => {
  const [query, setQuery] = useState(defaultQuery);
  const [activeMatchIndex, setActiveMatchIndex] = useState<
    number | undefined
  >();
  const wrapperSxStyles = useCombineSxStyles(wrapperStyles, sx);

  const parts = getPartsArray(text, query, queryConfig);
  const matchingParts = parts.filter(part => part.highlight).length;

  // When query is updated, reset the active match index
  useEffect(() => {
    setActiveMatchIndex(undefined);
  }, [text, matchingParts]);

  const handeOnChangeActiveMatchIndex = (newIndex: number) => {
    if (newIndex < 0) {
      setActiveMatchIndex(matchingParts - 1);
    } else if (newIndex > matchingParts - 1) {
      setActiveMatchIndex(0);
    } else {
      setActiveMatchIndex(newIndex);
    }
  };

  return (
    <MuiBox data-testid={dataTestid} sx={wrapperSxStyles}>
      <MuiBox sx={headerStyles}>
        <SearchBar
          value={query}
          totalMatches={matchingParts}
          activeMatchIndex={activeMatchIndex}
          onChange={setQuery}
          onGoToMatch={handeOnChangeActiveMatchIndex}
        />
        <IconButtonGroup disabled={loading} actions={actions} />
      </MuiBox>

      <TextArea
        textParts={parts}
        activeMatchIndex={activeMatchIndex}
        highlightConfig={highlightConfig}
      />
    </MuiBox>
  );
};
