import aspectRatio from './aspectRatio';

interface LightboxDimentions {
  width: number;
  height: number;
}

const lightboxDimentions = (
  imageDimentions: LightboxDimentions,
  lightboxDimentions: LightboxDimentions
): LightboxDimentions => {
  const imageAspectRatio = aspectRatio(
    imageDimentions.width,
    imageDimentions.height
  );
  const lightboxAspectRatio = aspectRatio(
    lightboxDimentions.width,
    lightboxDimentions.height
  );
  const imageAspecRatioNumber = imageAspectRatio.x / imageAspectRatio.y;
  const lightboxAspecRatioNumber =
    lightboxAspectRatio.x === 0
      ? 0
      : lightboxAspectRatio.x / lightboxAspectRatio.y;
  // const lightboxAspectRatio = { x: 16, y: 9 };
  let dimentions: LightboxDimentions;
  if (imageAspecRatioNumber > lightboxAspecRatioNumber) {
    dimentions = {
      height:
        lightboxDimentions.width / (imageAspectRatio.x / imageAspectRatio.y),
      width: lightboxDimentions.width
    };
  } else if (imageAspecRatioNumber === lightboxAspecRatioNumber) {
    dimentions = {
      height: lightboxDimentions.height,
      width: lightboxDimentions.width
    };
  } else {
    // imageAspectRatio.y > lightboxAspectRatio.y
    dimentions = {
      height: lightboxDimentions.height,
      width:
        lightboxDimentions.height * (imageAspectRatio.x / imageAspectRatio.y)
    };
  }

  return dimentions;
};

export default lightboxDimentions;
