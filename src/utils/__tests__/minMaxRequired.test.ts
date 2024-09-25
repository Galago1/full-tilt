import minMaxLengthRequired from '../minMaxRequired';

describe('minMaxLengthRequired', () => {
  it('returns the correct error message when the value is too short', () => {
    const value = 'short';
    const minLength = 10;
    const expectedErrorMessage = '5 more required';

    const actualErrorMessage = minMaxLengthRequired(value, minLength);

    expect(actualErrorMessage).toBe(expectedErrorMessage);
  });

  it('returns the correct error message when the value is too long', () => {
    const value =
      'this value is too long and should trigger the max length error message';
    const maxLength = 50;
    const prependText = 'Input length:';
    const expectedErrorMessage = '70/50 Input length:';

    const actualErrorMessage = minMaxLengthRequired(
      value,
      undefined,
      maxLength,
      prependText
    );

    expect(actualErrorMessage).toBe(expectedErrorMessage);
  });

  it('returns an empty string when the value is within the length limits', () => {
    const value = 'within limits';
    const minLength = 5;
    const maxLength = 15;
    const expectedErrorMessage = '13/15 ';

    const actualErrorMessage = minMaxLengthRequired(
      value,
      minLength,
      maxLength
    );

    expect(actualErrorMessage).toBe(expectedErrorMessage);
  });
});
