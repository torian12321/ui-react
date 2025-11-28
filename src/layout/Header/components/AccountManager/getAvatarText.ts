export const getAvatarText = (userName: string = ''): string => {
  const [firstName = '', lastName = ''] = userName.split(' ');
  const firstLetter = firstName[0] ?? '';
  const secondLetter = lastName[0] ?? '';

  return `${firstLetter}${secondLetter}`.trim().toUpperCase();
};
