const KB = 1024;
const decimals = 2;
const sizes = ['Bytes', 'KB', 'MB'];

export const formatFileSize = (size: number): string => {
  if (!size) return '0 Bytes';

  const sizeIndex = Math.floor(Math.log(size) / Math.log(KB));

  const convertedSize = parseFloat(
    (size / Math.pow(KB, sizeIndex)).toFixed(decimals),
  );

  return `${convertedSize} ${sizes[sizeIndex]}`;
};
