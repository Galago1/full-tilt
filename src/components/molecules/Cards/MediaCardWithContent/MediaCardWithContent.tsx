import { alpha, Box, SxProps, Theme } from '@mui/material';
import { Card, CardContent } from '@mui/material';
import Chip, { ChipProps } from 'src/components/atoms/Chip/Chip';
import SkeletonImage, {
  SkeletonImageProps
} from '../../SkeletonImage/SkeletonImage';
import Divider from 'src/components/atoms/Divider';
import { DividerProps } from 'src/components/atoms/Divider/Divider';
import AvatarAndText from '../../AvatarAndText';
import { AvatarAndTextProps } from '../../AvatarAndText/AvatarAndText';
import { Avatar } from 'src/components/atoms';
import { AvatarProps } from 'src/components/atoms/Avatar/Avatar';

export interface MediaCardWithContentProps {
  /**
   * Card styles
   */
  sx?: SxProps<Theme>;
  /**
   * Card Content styles
   */
  cardContentSx?: SxProps<Theme>;
  /**
   * The divider attributes
   */
  dividerProps?: DividerProps;
  /**
   * The skeleton image attributes
   */
  skeletonImageProps?: SkeletonImageProps;
  /**
   * The chip attributes
   */
  chipProps?: ChipProps;
  /**
   * floating dots
   */
  dots?: { left: string; top: string }[];
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Optional children
   */
  children?: React.ReactNode;
  /**
   * Optional avatar and text props
   */
  avatarAndTextProps?: AvatarAndTextProps;
  /**
   *  Optional avatar props
   */
  avatarProps?: AvatarProps;
}

/**
 * Primary UI component for user interaction
 */
const MediaCardWithContent = ({
  avatarAndTextProps,
  cardContentSx,
  children,
  chipProps,
  dividerProps,
  dots = [],
  skeletonImageProps,
  avatarProps,
  sx,
  ...props
}: MediaCardWithContentProps) => {
  return (
    <Card sx={{ ...sx }} {...props}>
      {avatarProps && <Avatar {...avatarProps} />}
      {skeletonImageProps && <SkeletonImage {...skeletonImageProps} />}
      {dots.map((dot, index) => {
        return (
          <Box
            key={`media-card-dot-index[${index}]`}
            className="dot"
            sx={{
              position: 'absolute',
              top: dot.top,
              left: dot.left,
              width: 10,
              height: 10,
              borderRadius: '50%',
              boxShadow: (theme: Theme) =>
                `0 0 0 6px ${alpha(theme.palette.common.white, 0.32)}`,
              backgroundColor: (theme: Theme) =>
                alpha(theme.palette.common.white, 1)
            }}
          ></Box>
        );
      })}
      {dividerProps && <Divider {...dividerProps} />}
      {avatarAndTextProps && (
        <CardContent
          sx={{ padding: (theme: Theme) => theme.spacing(2), ...cardContentSx }}
        >
          <AvatarAndText {...avatarAndTextProps} />
        </CardContent>
      )}
      {chipProps && <Chip {...chipProps} />}
      {children}
    </Card>
  );
};
export default MediaCardWithContent;
