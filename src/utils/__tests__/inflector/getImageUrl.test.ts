import pluralize from 'src/utils/inflector/pluralize';

describe('pluralize', () => {
  it('returns the data URL of the provided image file', async () => {
    expect(pluralize('')).toBe('');
    expect(pluralize('images')).toBe('images');
    expect(pluralize('image')).toBe('images');
    expect(pluralize('reply')).toBe('replies');
    expect(pluralize('plus')).toBe('pluses');
    expect(pluralize('plus', 1)).toBe('plus');
  });
});
