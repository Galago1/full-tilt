import { Box, SxProps, Theme } from '@mui/material';
import { useMemo, useState } from 'react';
import { useElementSize } from 'usehooks-ts';
import useIsSize from 'src/hooks/useIsSize';
import lightboxDimentions from 'src/utils/math/lightboxDimentions';
import SwipeableImage from '../SwipeableImage/SwipeableImage';
import TaggableImage from '../TaggableImage/TaggableImage';
import { UploadedImg } from '../UploadImages/UploadImages';
import { SkeletonImageProps } from 'src/components/molecules/SkeletonImage/SkeletonImage';

export interface SwipeableListProps {
  /**
   * Image list
   */
  images: UploadedImg[];
  /**
   * Starting index
   * @default
   * 0
   */
  index?: number;
  /**
   * skeleton image props
   */
  skeletonImageProps?: SkeletonImageProps;
  /**
   * sx props
   */
  swipeableImageSx?: SxProps<Theme>;
  /**
   * width override
   */
  widthOverride?: number;
  /**
   * height override
   */
  heightOverride?: number;
  /**
   * allow controls
   */
  allowControls?: boolean;
}

const SwipeableList = ({
  images,
  index = 0,
  skeletonImageProps,
  swipeableImageSx,
  widthOverride,
  heightOverride,
  allowControls = true,
  ...props
}: SwipeableListProps) => {
  const { isXSmall } = useIsSize();
  const [squareRef, { width, height }] = useElementSize();
  const [currentIndex, setCurrentIndex] = useState(index);
  const onNext = () => {
    setCurrentIndex(
      currentIndex + 1 > images.length - 1 ? 0 : currentIndex + 1
    );
  };
  const onPrevious = () => {
    setCurrentIndex(
      currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1
    );
  };

  const dimentions = useMemo(
    () =>
      lightboxDimentions(
        {
          width: images[currentIndex].width || width || widthOverride || 0,
          height: images[currentIndex].height || height || heightOverride || 0
        },
        {
          width: width || widthOverride || 0,
          height: height || heightOverride || 0
        }
      ),
    [currentIndex, width]
  );
  return (
    <Box ref={squareRef} {...props}>
      <SwipeableImage
        onPrevious={onPrevious}
        onNext={onNext}
        showControls={allowControls && length > 1}
        sx={{
          width: isXSmall ? '100%' : width || widthOverride || 0,
          height: isXSmall ? '100%' : height || heightOverride || 0,
          alignItems: 'center',
          ...swipeableImageSx
        }}
      >
        <TaggableImage
          width={dimentions.width}
          height={dimentions.height}
          imageUrl={
            (images[currentIndex] as any).url ||
            (images[currentIndex] as any).src
          }
          tags={[]}
          onSelectTag={() => {}}
          onTagAdd={() => {}}
          onUpdateTag={() => {}}
          pillValue={1}
          selectedTagIndex={-1}
          isXSmall={false}
          isMobile={false}
          skeletonImageProps={skeletonImageProps}
        />
      </SwipeableImage>
    </Box>
  );
};
export default SwipeableList;
