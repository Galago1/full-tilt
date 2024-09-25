const titleize = (string: string, splitBy: '-' | ' ' = '-'): string => {
  if (!string) return '';

  return string
    .split(splitBy)
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(' ');
};

export default titleize;
