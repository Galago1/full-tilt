import { Box, Skeleton, SkeletonProps, SxProps, Theme } from '@mui/material';
import Image, { ImageProps } from 'src/components/atoms/Image/Image';
import { Dispatch, forwardRef, SetStateAction, useState } from 'react';
import { CSSProperties } from '@mui/styles';
import { Avatar } from 'src/components/atoms';
import { AvatarProps } from 'src/components/atoms/Avatar/Avatar';

const NextNextImage = forwardRef(
  (
    {
      raw,
      setIsLoaded,
      isLoaded,
      onLoaded,
      boxSx,
      waitToStyle,
      avatarProps,
      ...props
    }: ImageProps & {
      raw: boolean;
      setIsLoaded: Dispatch<SetStateAction<boolean>>;
      isLoaded?: boolean;
      boxSx?: SxProps<Theme>;
      onLoaded?: (e: any) => void;
      waitToStyle: boolean;
      avatarProps?: AvatarProps;
    },
    ref
  ) => {
    const newProps = {
      ...props,
      style: {
        ...(waitToStyle
          ? isLoaded
            ? props.style
            : { position: 'absolute' }
          : props.style),
        width: isLoaded ? props.style?.width : 0
      }
    };
    if (avatarProps)
      return (
        <Avatar
          {...(props as any)}
          data-testid="skeleton-avatar-image"
          onLoad={() => {
            setIsLoaded(true);
            onLoaded?.(true);
          }}
        />
      );
    if (raw)
      return (
        <Image
          // ref={ref}
          // alt="default-alt"
          data-testid="skeleton-raw-image"
          {...(newProps as any)}
          onLoadingComplete={() => {
            setIsLoaded(true);
            onLoaded?.(true);
          }}
        />
      );
    return (
      <Box
        ref={ref}
        width={isLoaded ? '100%' : 'auto'}
        sx={boxSx}
        data-testid="skeleton-box-image"
      >
        <Image
          // alt="default-alt"
          {...props}
          onLoadingComplete={() => {
            setIsLoaded(true);
            onLoaded?.(true);
          }}
        />
      </Box>
    );
  }
);

NextNextImage.displayName = 'NextNextImage';

export interface SkeletonImageProps extends ImageProps {
  /**
   * alt tag
   */
  alt?: string;
  /**
   * Optional src prop
   */
  src?: string;
  /**
   * Optional styling prop
   */
  style?: CSSProperties;
  /**
   * width
   */
  width?: any;
  /**
   * height
   */
  height?: any;
  /**
   * children component
   */
  children?: React.ReactNode;
  /**
   * skeleton props
   */
  skeletonProps?: SkeletonProps;
  /**
   * Optional styling prop
   */
  sx?: SxProps<Theme>;
  /**
   * Optional raw prop
   */
  raw?: boolean;
  /**
   * Optional box props
   */
  boxSx?: SxProps<Theme>;
  /**
   * Optional only show skeleton prop
   */
  skeletonOnly?: boolean;
  /**
   * Wait till image loaded to apply styls
   * @default
   * false
   */
  waitToStyle?: boolean;
  /**
   * Optional data-testid
   */
  'data-testid'?: string;
  /**
   * Optional click handler
   */
  onClick?: (e: any) => void;
  /**
   * Optional loaded handler
   */
  onLoaded?: (e: any) => void;
  /**
   * Optional avatar props
   */
  avatarProps?: AvatarProps;
  /**
   * Optional loaded initial
   */
  loadedInitial?: boolean;
}

/**
 * Primary UI component for user interaction
 */
const SkeletonImage = forwardRef(
  (
    {
      sx,
      raw = false,
      skeletonOnly = false,
      onLoaded,
      boxSx,
      waitToStyle = false,
      children,
      skeletonProps = {},
      avatarProps,
      loadedInitial = false,
      ...props
    }: SkeletonImageProps,
    ref
  ) => {
    const [isLoaded, setIsLoaded] = useState(false);
    return (
      <>
        {!isLoaded && (
          <Skeleton
            sx={{ ...sx }}
            variant="rectangular"
            animation={'wave'}
            width={props.width || '100%'}
            height={props.height || 216}
            {...skeletonProps}
          />
        )}

        {!skeletonOnly && (
          <NextNextImage
            raw={raw}
            setIsLoaded={setIsLoaded}
            isLoaded={isLoaded}
            onLoaded={onLoaded}
            ref={ref}
            boxSx={boxSx}
            waitToStyle={waitToStyle}
            avatarProps={avatarProps}
            {...props}
          />
        )}
      </>
    );
  }
);
SkeletonImage.displayName = 'SkeletonImage';
export default SkeletonImage;
