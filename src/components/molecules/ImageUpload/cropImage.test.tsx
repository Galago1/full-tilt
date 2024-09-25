import getCroppedImg from './cropImage';

// A helper function to create a mock image
const createMockImage = (width: number, height: number) => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx: any = canvas.getContext('2d');
  ctx.fillStyle = 'rgb(255, 0, 0)';
  ctx.fillRect(0, 0, width, height);
  return canvas.toDataURL('image/png');
};

xdescribe('getCroppedImg', () => {
  it('should return cropped image data URL', async () => {
    const imageSrc = createMockImage(100, 100);
    const pixelCrop = { x: 25, y: 25, width: 50, height: 50 };
    const flip = { horizontal: false, vertical: false };

    const croppedImgDataURL = await getCroppedImg(imageSrc, pixelCrop, flip);

    expect(croppedImgDataURL).toBeTruthy();
    expect(croppedImgDataURL).toContain('data:image/jpeg;base64');
  });

  it('should handle flip options correctly', async () => {
    const imageSrc = createMockImage(100, 100);
    const pixelCrop = { x: 25, y: 25, width: 50, height: 50 };
    const flipHorizontal = { horizontal: true, vertical: false };
    const flipVertical = { horizontal: false, vertical: true };
    const flipBoth = { horizontal: true, vertical: true };

    const croppedImgDataURLHorizontal = await getCroppedImg(
      imageSrc,
      pixelCrop,
      flipHorizontal
    );
    const croppedImgDataURLVertical = await getCroppedImg(
      imageSrc,
      pixelCrop,
      flipVertical
    );
    const croppedImgDataURLBoth = await getCroppedImg(
      imageSrc,
      pixelCrop,
      flipBoth
    );

    expect(croppedImgDataURLHorizontal).toBeTruthy();
    expect(croppedImgDataURLHorizontal).toContain('data:image/jpeg;base64');

    expect(croppedImgDataURLVertical).toBeTruthy();
    expect(croppedImgDataURLVertical).toContain('data:image/jpeg;base64');

    expect(croppedImgDataURLBoth).toBeTruthy();
    expect(croppedImgDataURLBoth).toContain('data:image/jpeg;base64');
  });

  it('should return undefined on error', async () => {
    const imageSrc = 'invalid_url';
    const pixelCrop = { x: 25, y: 25, width: 50, height: 50 };
    const flip = { horizontal: false, vertical: false };

    const croppedImgDataURL = await getCroppedImg(imageSrc, pixelCrop, flip);

    expect(croppedImgDataURL).toBeUndefined();
  });
});
