import { Grid, GridProps, SxProps, Theme } from '@mui/material';
import { CSSProperties } from '@mui/styles';
import { useSwipeable } from 'react-swipeable';
import SkeletonImage, {
  SkeletonImageProps
} from '../../molecules/SkeletonImage/SkeletonImage';
import LightboxControl from './LightboxControl/LightboxControl';

export interface SwipeableImageProps extends Omit<GridProps, 'style'> {
  imageUrl?: string;
  skeletonSx?: SxProps<Theme>;
  height?: number;
  width?: number;
  alt?: string;
  style?: CSSProperties;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none';
  showControls?: boolean;
  children?: React.ReactNode;
  onPrevious: () => void;
  onNext: () => void;
  /**
   * skeleton image props
   */
  skeletonImageProps?: SkeletonImageProps;
}
const SwipeableImage = ({
  imageUrl,
  skeletonSx,
  style,
  height = 669,
  width = 1000,
  alt = 'item preview',
  showControls = true,
  children,
  objectFit = 'cover',
  skeletonImageProps,
  onPrevious,
  onNext,
  ...props
}: SwipeableImageProps) => {
  const handlers = useSwipeable({
    onSwipedLeft: showControls ? onPrevious : undefined,
    onSwipedRight: showControls ? onNext : undefined
  });
  return (
    <Grid container {...handlers} {...props}>
      {showControls && (
        <Grid
          item
          position="absolute"
          top="48%"
          sx={{
            left: (theme: Theme) => theme.spacing(2),
            display: { xs: 'none', width: 'unset', sm: 'block', zIndex: 1 }
          }}
        >
          <LightboxControl
            onPrevious={onPrevious}
            data-testid={'swipeable-prev-button'}
          />
        </Grid>
      )}
      <Grid item sx={{ width: '100%' }}>
        {children
          ? children
          : skeletonImageProps && (
              <SkeletonImage
                {...skeletonImageProps}
                // sx={skeletonSx}
                // src={imageUrl as string}
                // height={height}
                // width={width}
                // style={style}
                // objectFit={objectFit}
                // alt={alt}
              />
            )}
      </Grid>
      {showControls && (
        <Grid
          item
          position="absolute"
          top="48%"
          sx={{
            right: (theme: Theme) => theme.spacing(2),
            display: { xs: 'none', width: 'unset', sm: 'block' }
          }}
        >
          <LightboxControl
            next
            onNext={onNext}
            data-testid={'swipeable-next-button'}
          />
        </Grid>
      )}
    </Grid>
  );
};
export default SwipeableImage;
