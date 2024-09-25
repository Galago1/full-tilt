import { Box, SxProps, Theme, Typography } from '@mui/material';
import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState
} from 'react';
import SkeletonImage, {
  SkeletonImageProps
} from '../../molecules/SkeletonImage/SkeletonImage';
import { ImageDetail } from './ImageDetail/ImageDetail';

interface Tag {
  position: { left: number; top: number };
  added: boolean;
}

export interface NewTagData {
  x: number;
  y: number;
}

export const TAGGABLE_TAG_WIDTH = 24;
export const TAGGABLE_TAG_HEIGHT = 24;
export const TAGGABLE_TAG_SM_WIDTH = 16;
export const TAGGABLE_TAG_SM_HEIGHT = 16;

const ExistingTags = ({
  pillValue,
  position,
  index,
  added,
  onSelectTag,
  selectedTagIndex,
  width,
  height
}: {
  pillValue: 0 | 1 | 2 | 3;
  position: { left: number; top: number };
  index: number;
  added: boolean;
  onSelectTag: any;
  selectedTagIndex: number;
  price?: JSX.Element;
  width: number;
  height: number;
}) => {
  const left = `${position.left * width}px`;
  const top = `${position.top * height}px`;
  return (
    <Typography
      component={'span'}
      sx={{
        position: 'absolute',
        left,
        top
      }}
    >
      <ImageDetail
        pillValue={pillValue}
        sx={{
          width: { xs: 32, sm: 32, md: 48 },
          height: { xs: 32, sm: 32, md: 48 }
        }}
        onClick={() => {
          onSelectTag(index);
        }}
        variant={
          selectedTagIndex == index ? 'selected' : added ? 'added' : null
        }
        data-testid="image-detail"
      />
    </Typography>
  );
};
export interface TaggableImageProps {
  width: number;
  height: number;
  tags?: Tag[];
  imageUrl?: any;
  alt?: string;
  skeletonSx?: SxProps<Theme>;
  selectedTagIndex: number;
  pillValue: 0 | 1 | 2 | 3;

  isXSmall: boolean;
  isMobile: boolean;
  setPillValue?: Dispatch<SetStateAction<0 | 1 | 2 | 3>>;

  onTagAdd: (tag: NewTagData) => void;
  onSelectTag: (index: number) => void;
  onUpdateTag: (tag: NewTagData) => void;
  /**
   * skeleton image props
   */
  skeletonImageProps?: SkeletonImageProps;
}
export const getBoundingClientRect = (
  imageRef: MutableRefObject<undefined | null>,
  element: string = 'firstChild'
) => {
  const elem = (imageRef?.current as any)?.[element]; //[element][element];
  return elem?.getBoundingClientRect?.();
};

const TaggableImage = ({
  tags = [],
  width,
  height,
  imageUrl,
  skeletonSx,
  alt = '',
  selectedTagIndex,
  pillValue,
  isXSmall,
  isMobile,
  skeletonImageProps,
  setPillValue,
  onSelectTag,
  onTagAdd,
  onUpdateTag
}: TaggableImageProps) => {
  const imageRef = useRef();
  const [markedCoordinatesToWindow, setMarkedCoordinatesToWindow] =
    useState<any>(null);

  useEffect(() => {
    setPillValue?.(1);
  }, [tags, setPillValue]);

  useEffect(() => {
    // Get image size and the position.
    if (markedCoordinatesToWindow) {
      const imageDetails = getBoundingClientRect(imageRef);
      // Calculate the position of the tag relative to the image
      // and remove the tag's md+ size width/height
      const x =
        markedCoordinatesToWindow.clientX -
        imageDetails.left -
        (isXSmall || isMobile ? TAGGABLE_TAG_SM_WIDTH : TAGGABLE_TAG_WIDTH);
      const y =
        markedCoordinatesToWindow.clientY -
        imageDetails.top -
        (isXSmall || isMobile ? TAGGABLE_TAG_SM_HEIGHT : TAGGABLE_TAG_HEIGHT);

      const newTagData: NewTagData = {
        x: parseFloat((x / imageDetails.width).toFixed(5)),
        y: parseFloat((y / imageDetails.height).toFixed(5))
      };
      pillValue === 0 ? onUpdateTag(newTagData) : onTagAdd(newTagData);
      setMarkedCoordinatesToWindow(null);
    }
  }, [imageRef, markedCoordinatesToWindow, imageUrl, onTagAdd]);

  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <Box
      // // 9/16 ratio
      ref={(a) => {
        imageRef.current = a as any;
      }}
      sx={{
        backgroundColor: (theme: Theme) => theme.palette.grey[200],
        height: isLoaded ? 'auto' : height,
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
        mx: 'auto',
        textAlign: 'center',

        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Box
        sx={{
          position: 'relative',
          my: 'auto',
          width,
          height
        }}
        data-testid="taggable-container"
      >
        <SkeletonImage
          src={imageUrl}
          sx={{
            ...skeletonSx,
            borderRadius: 0
          }}
          alt={alt}
          width={width}
          height={height}
          raw
          style={{
            borderRadius: 0,
            display: 'flex !important',
            flexDirection: 'inherit',
            alignItems: 'inherit !important',
            justifyContent: 'inherit !important',
            objectFit: 'cover',
            width,
            height,

            marginLeft: 'auto',
            marginRight: 'auto'
          }}
          onClick={(e: any) => {
            setMarkedCoordinatesToWindow(e);
          }}
          onLoaded={() => {
            setIsLoaded(true);
          }}
          {...skeletonImageProps}
        />
        {tags.map((tag: Tag, idx: number) => {
          return (
            <ExistingTags
              pillValue={pillValue}
              key={`tag-${idx}`}
              position={tag.position}
              index={idx}
              added={tag.added}
              onSelectTag={onSelectTag}
              selectedTagIndex={selectedTagIndex}
              width={width}
              height={height}
            />
          );
        })}
      </Box>
    </Box>
  );
};
export default TaggableImage;
