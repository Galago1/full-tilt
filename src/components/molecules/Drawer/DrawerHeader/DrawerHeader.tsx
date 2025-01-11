import {
  Box,
  BoxProps,
  DividerProps,
  Grid,
  GridProps,
  SxProps,
  Theme
} from '@mui/material';
import { CloseButton, Divider, FeaturedIcon } from 'src/components/atoms';
import { CloseButtonProps } from 'src/components/atoms/CloseButton/CloseButton';
import { FeaturedIconProps } from 'src/components/atoms/FeaturedIcon/FeaturedIcon';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';
import { AvatarAndTextProps } from '../../AvatarAndText/AvatarAndText';
import TitleWithDefaults from '../../Shared/TitleWithDefaults/TitleWithDefaults';

const boxSx: SxProps<Theme> = {
  pt: responsiveSpacing,
  px: responsiveSpacing,
  my: 'auto'
};

const dividerSx = { mb: responsiveSpacing };
const featuredIconBoxSx = { pb: 2 };
const styles = {
  boxSx,
  dividerSx,
  featuredIconBoxSx
};

export interface DrawerHeaderProps extends BoxProps {
  onHide?: {
    bivarianceHack(event: {}, reason: 'backdropClick' | 'escapeKeyDown'): void;
  }['bivarianceHack'];
  /**
   * The padding bottom of the container
   */
  paddingBottom?: any;
  /**
   * Option to show or hide the close button
   */
  showClose?: boolean;
  /**
   * Option to show or hide the divider
   */
  showDivider?: boolean;
  /**
   * Option to show or hide the featured icon
   */
  showFeaturedIcon?: boolean;
  slots?: {
    closeButtonProps?: CloseButtonProps;
    closeButtonGridProps?: GridProps;
    /**
     * The container styles
     */
    avatarAndTextProps?: AvatarAndTextProps;
    /**
     * the divider props
     */
    dividerProps?: DividerProps;
    /**
     * the featured icon props
     */
    featuredIconProps?: FeaturedIconProps;
    /**
     * The featuredIcon box props
     */
    featuredIconBoxProps?: BoxProps;
    /**
     * The padding bottom box props
     */
    paddingBottomBoxProps?: BoxProps;
  };
}
const DrawerHeader = ({
  onHide,
  showClose,
  paddingBottom = responsiveSpacing,
  slots,
  showFeaturedIcon = false,
  showDivider = false,
  ...props
}: DrawerHeaderProps) => {
  const {
    closeButtonProps,
    closeButtonGridProps,
    avatarAndTextProps,
    dividerProps,
    featuredIconProps,
    featuredIconBoxProps,
    paddingBottomBoxProps
  } = slots || {};
  const baseBoxProps = {
    ...styles.boxSx,
    pt: !!avatarAndTextProps || showClose ? responsiveSpacing : 0
  };
  return (
    <>
      <Box sx={baseBoxProps} {...props}>
        <Grid container flexDirection={'column'}>
          <Grid item>
            <Grid container alignItems={'center'}>
              <Grid item flex={1}>
                {showFeaturedIcon && (
                  <Box sx={styles.featuredIconBoxSx} {...featuredIconBoxProps}>
                    <FeaturedIcon {...featuredIconProps} />
                  </Box>
                )}
                {avatarAndTextProps && (
                  <TitleWithDefaults {...avatarAndTextProps} />
                )}
              </Grid>
              <Grid item {...closeButtonGridProps}>
                {showClose && (
                  <CloseButton onHide={onHide} {...closeButtonProps} />
                )}
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            {paddingBottom && (
              <Box sx={{ pb: paddingBottom }} {...paddingBottomBoxProps} />
            )}
          </Grid>
        </Grid>
      </Box>
      {showDivider && <Divider sx={styles.dividerSx} {...dividerProps} />}
    </>
  );
};

export default DrawerHeader;
