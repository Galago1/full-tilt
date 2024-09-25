import {
  Box,
  BoxProps,
  DividerProps,
  Grid,
  GridProps,
  SxProps,
  Theme
} from '@mui/material';
import { Divider, FeaturedIcon } from 'src/components/atoms';
import Button from 'src/components/atoms/Button';
import { FeaturedIconProps } from 'src/components/atoms/FeaturedIcon/FeaturedIcon';
import { XCloseIcon } from 'src/components/particles/theme/overrides/CustomIcons';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';
import { AvatarAndTextProps } from '../../AvatarAndText/AvatarAndText';
import TitleWithDefaults from '../../Shared/TitleWithDefaults/TitleWithDefaults';
import { ButtonProps } from 'src/components/atoms/Button/Button';

export interface CloseButtonProps extends GridProps {
  /**
   * Option to use absolute position
   */
  useAbsolutePosition?: boolean;
  /**
   * close the modal
   */
  onHide?:
    | ((event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void)
    | undefined;
  /**
   * The container styles
   */
  closeGridItemProp?: SxProps<Theme>;
  slots?: {
    buttonProps?: ButtonProps;
  };
}

export const CloseButton = ({
  useAbsolutePosition,
  closeGridItemProp,
  onHide,
  slots,
  ...props
}: CloseButtonProps) => {
  const { buttonProps } = slots || {};
  return (
    <Grid
      container
      alignItems={'center'}
      justifyContent={useAbsolutePosition ? 'flex-end' : 'flex-start'}
      sx={{
        position: useAbsolutePosition ? 'absolute' : 'relative',
        top: useAbsolutePosition ? 24 : 'unset',
        right: useAbsolutePosition ? 24 : 'unset',
        ...closeGridItemProp
      }}
      {...props}
    >
      <Grid
        item
        sx={{
          display: 'flex',
          alignSelf: 'normal',
          ...closeGridItemProp
        }}
      >
        <Button
          endIcon={<XCloseIcon />}
          size={'large'}
          color={'secondary'}
          variant={'text'}
          onClick={onHide}
          data-testid="close-button"
          {...buttonProps}
        />
      </Grid>
    </Grid>
  );
};

const responsiveBottomPadding = responsiveSpacing;

const boxSx: SxProps<Theme> = {
  pt: responsiveSpacing,
  px: responsiveSpacing,
  my: 'auto'
};

const dividerSx = { mb: responsiveBottomPadding };
const featuredIconBoxSx = { pb: 2 };
const styles = {
  boxSx,
  dividerSx,
  featuredIconBoxSx
};

export interface ModalHeaderProps extends BoxProps {
  onHide?:
    | ((event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void)
    | undefined;
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
const ModalHeader = ({
  onHide,
  showClose,
  paddingBottom = responsiveBottomPadding,
  slots,
  showFeaturedIcon = false,
  showDivider = false,
  ...props
}: ModalHeaderProps) => {
  const {
    closeButtonProps,
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
              <Grid item>
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

export default ModalHeader;
