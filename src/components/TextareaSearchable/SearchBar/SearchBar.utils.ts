export const getMatchesPagination = (
  total: number = 0,
  currentIndex: number | undefined = undefined,
): string => {
  const indexToDisplay =
    currentIndex === undefined ? '0' : `${currentIndex + 1}`;

  return `${indexToDisplay}/${total}`;
};
