const pluralize = (word: string, count?: number): string => {
  if (!word) {
    return '';
  }
  if (count === 1) return word;

  const isPluralAlready =
    word.endsWith('ies') ||
    word.endsWith('es') ||
    (!word.endsWith('us') && word.endsWith('s'));
  if (isPluralAlready) {
    return word;
  }
  if (word.endsWith('y') && !word.endsWith('ay')) {
    return `${word.substring(0, word.length - 1)}ies`;
  }
  return word.endsWith('us') ? `${word}es` : `${word}s`;
};

export default pluralize;
