const minMaxLengthRequired = (
  value: string,
  minLength = 10,
  maxLength = 500,
  prependText = ''
) => {
  if ((value?.length || 0) < minLength) return requiredText(value, minLength);
  return [maxLengthText(value, maxLength), prependText].join(' ');
};

const requiredText = (value: string, minLength: number) => {
  if (minLength - (value?.length || 0) === 0) return '';
  return `${minLength - (value?.length || 0)} more required`;
};
const maxLengthText = (value: string, maxLength: number) => {
  return `${value?.length || 0}/${maxLength}`;
};

export default minMaxLengthRequired;
