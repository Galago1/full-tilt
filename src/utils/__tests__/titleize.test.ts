import titleize from '../titleize';

describe('titleize', () => {
  it('capitalizes the first letter of each word in a hyphen-separated string', () => {
    const inputString = 'hello-world';
    const expectedOutputString = 'Hello World';

    const actualOutputString = titleize(inputString);

    expect(actualOutputString).toBe(expectedOutputString);
  });

  it('capitalizes the first letter of each word in a space-separated string', () => {
    const inputString = 'hello world';
    const expectedOutputString = 'Hello World';

    const actualOutputString = titleize(inputString, ' ');

    expect(actualOutputString).toBe(expectedOutputString);
  });

  it('returns an empty string if the input string is falsy', () => {
    const inputString = '';
    const expectedOutputString = '';

    const actualOutputString = titleize(inputString);

    expect(actualOutputString).toBe(expectedOutputString);
  });
});
