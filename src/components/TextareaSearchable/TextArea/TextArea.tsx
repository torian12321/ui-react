import type { ElementType, JSX } from 'react';
import { useEffect, useRef } from 'react';
import MuiBox from '@mui/material/Box';

import { useCombineSxStyles } from 'src/utils';

import {
  highlightFocusedStyles,
  highlightStyles,
  wrapperStyles,
} from './TextArea.styles';
import type { TextAreaProps, TextPart } from './TextArea.types';

export const TextArea = ({
  textParts = [],
  activeMatchIndex,
  highlightConfig,
}: TextAreaProps): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);
  const highlightSxStyles = useCombineSxStyles(
    highlightStyles,
    highlightConfig?.styles,
  );
  const highlightFocusedSxStyles = useCombineSxStyles(
    highlightSxStyles,
    highlightFocusedStyles,
    highlightConfig?.focusedStyles,
  );

  let matchingIndex = 0;
  const highlightComponent: ElementType = highlightConfig?.component ?? 'mark';

  // Scroll to the active match
  useEffect(() => {
    if (!ref.current || activeMatchIndex === undefined) return;

    const matchingChildren = Array.from(ref.current.children).filter(child => {
      const matching = (child as HTMLElement)?.dataset?.isMatching ?? '';

      return Boolean(matching === 'true');
    });

    if (
      0 <= activeMatchIndex &&
      activeMatchIndex + 1 <= matchingChildren.length
    ) {
      const targetElement = matchingChildren[activeMatchIndex];
      if (!targetElement) return;

      targetElement.scrollIntoView({
        behavior: 'smooth',
        // Scroll only if element is not in view
        block: 'nearest',
        inline: 'nearest',
      });
    }
  }, [activeMatchIndex]);

  return (
    <MuiBox
      ref={ref}
      data-testid='searchable-text'
      sx={wrapperStyles}
      component='span'
    >
      {textParts.map((part: TextPart, i: number) => {
        const isMatching = part.highlight;
        const isFocused = matchingIndex === activeMatchIndex;

        const key = isMatching
          ? `matching-${matchingIndex++}`
          : `non-matching-${i}`;

        const highlightSx = !isFocused
          ? highlightSxStyles
          : highlightFocusedSxStyles;

        if (!isMatching) return part.text;
        return (
          <MuiBox
            data-is-matching={isMatching}
            data-is-focused={isFocused}
            key={key}
            component={isMatching ? highlightComponent : 'span'}
            sx={isMatching ? highlightSx : null}
          >
            {part.text}
          </MuiBox>
        );
      })}
    </MuiBox>
  );
};
