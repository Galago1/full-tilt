const isSubmitDisabled = (
  {
    isSubmitting,
    dirty,
    isValid,
    errors
  }: { isSubmitting: boolean; dirty: boolean; isValid: boolean; errors?: any },
  { allowPristine } = { allowPristine: false }
) => {
  return isSubmitting || (!allowPristine && !dirty) || !isValid;
};

export default isSubmitDisabled;
