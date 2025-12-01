export type SearchBarProps = {
  value?: string;
  totalMatches?: number;
  activeMatchIndex?: number;
  onChange: (value: string) => void;
  onGoToMatch: (index: number) => void;
};
