import type { TextPart } from './TextArea';
import type { QueryConfig } from './TextareaSearchable.types';

export const getPartsArray = (
  text: string,
  query: string,
  options?: QueryConfig,
): TextPart[] => {
  if (!query.length) return [{ text, highlight: false }];

  const { caseSensitive = false, ignoreWhitespaces = false } = options ?? {};
  const regexFlags = caseSensitive ? 'g' : 'gi';
  const pattern = ignoreWhitespaces ? query.split('').join('\\s*') : query;

  const regex: RegExp = new RegExp(`(${pattern})`, regexFlags);

  return text
    .split(regex)
    .filter((part: string) => part.length)
    .map((part: string) => ({
      text: part,
      highlight: regex.test(part),
    }));
};
