import getImageUrl from '../getImageUrl';

describe('getImageUrl', () => {
  it('returns the data URL of the provided image file', async () => {
    const imageFile = new File(['dummy image data'], 'image.png', {
      type: 'image/png'
    });
    const expectedDataUrl = 'data:image/png;base64,ZHVtbXkgaW1hZ2UgZGF0YQ==';

    const actualDataUrl = await getImageUrl(imageFile);

    expect(actualDataUrl).toBe(expectedDataUrl);
  });
});
