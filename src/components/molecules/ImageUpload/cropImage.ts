const createImage = (url: string) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => {
      resolve(image);
    });
    image.addEventListener('error', (error) => reject(error));
    image.setAttribute('crossOrigin', 'anonymous'); // needed to avoid cross-origin issues on CodeSandbox
    image.src = url;
  });

const getCroppedImg = async (
  imageSrc: string,
  pixelCrop: any,
  flip = { horizontal: false, vertical: false }
): Promise<string | undefined> => {
  try {
    const image = (await createImage(imageSrc)) as HTMLImageElement;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      return '';
    }
    // const rotRad = 0; //getRadianAngle(rotation)

    // calculate bounding box of the rotated image
    // const { width: bBoxWidth, height: bBoxHeight } = rotateSize(image.width, image.height, rotation);
    const { width: bBoxWidth, height: bBoxHeight } = {
      width: image.width,
      height: image.height
    };

    // set canvas size to match the bounding box
    canvas.width = bBoxWidth;
    canvas.height = bBoxHeight;

    // set canvas size to match the image
    canvas.width = image.width;
    canvas.height = image.height;

    // translate canvas context to a central location to allow rotating and flipping around the center
    ctx.translate(bBoxWidth / 2, bBoxHeight / 2);
    // ctx.rotate(rotRad);
    ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1);
    ctx.translate(-image.width / 2, -image.height / 2);

    // draw rotated image
    ctx.drawImage(image, 0, 0);

    // croppedAreaPixels values are bounding box relative
    // extract the cropped image using these values
    const data = ctx.getImageData(
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height
    );

    // set canvas width to final desired crop size - this will clear existing context
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;

    // paste generated rotate image at the top left corner
    ctx.putImageData(data, 0, 0);

    // // As Base64 string
    return canvas.toDataURL('image/jpeg');
  } catch (error) {
    console.error(error);
  }
};

export default getCroppedImg;

// export function getRadianAngle(degreeValue) {
//   return (degreeValue * Math.PI) / 180
// }

/**
 * Returns the new bounding area of a rotated rectangle.
 */
// export function rotateSize(width, height, rotation) {
//   const rotRad = getRadianAngle(rotation)

//   return {
//     width:
//       Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
//     height:
//       Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height),
//   }
// }
