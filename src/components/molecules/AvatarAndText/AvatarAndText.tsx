import type { GridProps, SxProps, Theme, TypographyProps } from '@mui/material';
import { Grid, Typography } from '@mui/material';
import type { AvatarProps } from 'src/components/atoms/Avatar/Avatar';
import Avatar from 'src/components/atoms/Avatar/Avatar';
import type { ChipProps } from 'src/components/atoms/Chip/Chip';
import Chip from 'src/components/atoms/Chip/Chip';
import Button, { ButtonProps } from 'src/components/atoms/Button/Button';
import ButtonList, { ButtonListProps } from '../ButtonList/ButtonList';
import FeaturedIcon, {
  FeaturedIconProps
} from 'src/components/atoms/FeaturedIcon/FeaturedIcon';
import { ReactNode, forwardRef } from 'react';

interface UserTextItem {
  title?: string | JSX.Element | undefined;
  tertiaryTitle?: string | JSX.Element | undefined;
  subtitle?: string | JSX.Element;
  buttonListProps?: ButtonListProps;
}
const useTextItem = ({
  title,
  tertiaryTitle,
  subtitle
}: UserTextItem): boolean => {
  const useIt = title ?? tertiaryTitle ?? subtitle;
  return !!useIt;
};
export interface AvatarAndTextProps extends Omit<GridProps, 'title'> {
  /**
   * The left icon props
   */
  leftIcon?: any;
  /**
   * The left icon item sx
   */
  leftIconItemSx?: SxProps<Theme>;
  /**
   * Avatar props
   */
  avatarProps?: AvatarProps;
  /**
   * featured icon props
   */
  featuredIconProps?: FeaturedIconProps;
  /**
   * The name or other indicator
   */
  title?: string | JSX.Element;
  /**
   * The description
   */
  subtitle?: string | JSX.Element;
  /**
   * The title typography
   */
  titleTypography?: TypographyProps;
  /**
   * The title typography
   */
  subtitleTypography?: TypographyProps;
  /**
   * The container styles
   */
  sx?: SxProps<Theme>;
  /**
   * End button
   */
  buttonProps?: ButtonProps & { gridProps?: SxProps<Theme> };
  /**
   * Left button
   */
  leftButtonProps?: ButtonProps;
  /**
   * Left button item props
   */
  leftButtonItemSx?: SxProps<Theme>;
  /**
   * optional chip props
   */
  chipProps?: ChipProps;
  /**
   * The description
   */
  onClick?: () => void;
  /**
   * Optional text styles
   */
  textSx?: SxProps<Theme>;
  /**
   * Avatar item sx
   */
  avatarItemSx?: SxProps<Theme>;
  /**
   * Featured icon item sx
   */
  featuredIconItemSx?: SxProps<Theme>;
  /**
   * button list props
   */
  buttonListProps?: ButtonListProps;
  /**
   * button list grid props
   */
  buttonListGridProps?: GridProps;
  /**
   * Children node on right side
   */
  children?: ReactNode;
  /**
   * tertiary title
   */
  tertiaryTitle?: string | JSX.Element;
  /**
   * tertiary title typography
   */
  tertiaryTitleTypography?: TypographyProps;
  /**
   * Children grid props
   */
  childrenGridProps?: GridProps;
  /**
   * Text grid item props
   */
  textGridItemProps?: GridProps;
  /**
   * Text container grid item props
   */
  textContainerGridItemProps?: GridProps;
  /**
   * Text title grid item props
   */
  textTitleGridItemProps?: GridProps;
  /**
   * Text tertiary grid item props
   */
  textTertiaryGridItemProps?: GridProps;
  /**
   * Text secondary grid item props
   */
  textSubtitleGridItemProps?: GridProps;
  /**
   * Left icon grid props
   */
  leftIconGridProps?: GridProps;
}

/**
 * Primary UI component for user interaction
 */
const AvatarAndText = forwardRef(
  (
    {
      leftIcon,
      leftIconItemSx,
      leftIconGridProps,
      avatarProps,
      title,
      subtitle,
      sx,
      textSx,
      buttonProps,
      leftButtonProps,
      leftButtonItemSx,
      titleTypography = { variant: 'textLgSemibold' },
      subtitleTypography = {},
      chipProps,
      avatarItemSx = { '&.MuiGrid-item': {} },
      featuredIconItemSx = { '&.MuiGrid-item': {} },
      buttonListProps,
      buttonListGridProps,
      tertiaryTitle,
      tertiaryTitleTypography,
      featuredIconProps,
      children,
      childrenGridProps,
      textGridItemProps,
      textContainerGridItemProps,
      textTitleGridItemProps,
      textTertiaryGridItemProps,
      textSubtitleGridItemProps,
      spacing = 0,
      ...props
    }: AvatarAndTextProps,
    ref: any
  ) => {
    const { gridProps, ...restButtonProps } = buttonProps || {};
    const useTextItemProps = useTextItem({
      title,
      tertiaryTitle,
      subtitle,
      buttonListProps
    });
    const finalSubtitleTypography: TypographyProps = {
      variant: 'textSmRegular',
      ...subtitleTypography
    };
    return (
      <Grid
        container
        {...props}
        sx={{ alignSelf: 'center', ...sx }}
        spacing={spacing ?? 1.25} //
        ref={ref}
      >
        {leftButtonProps && (
          <Grid
            item
            sx={{
              alignSelf: 'center',
              ...leftButtonItemSx
            }}
          >
            <Button {...leftButtonProps} />
          </Grid>
        )}
        {leftIcon && (
          <Grid
            item
            sx={{
              alignSelf: 'center',
              ...leftIconItemSx
            }}
            {...leftIconGridProps}
          >
            {leftIcon}
          </Grid>
        )}
        {avatarProps && (
          <Grid
            item
            sx={{
              alignSelf: 'center',
              ...avatarItemSx
            }}
          >
            <Avatar {...avatarProps} />
          </Grid>
        )}
        {featuredIconProps && (
          <Grid
            item
            sx={{
              alignSelf: 'center',
              ...featuredIconItemSx
            }}
          >
            <FeaturedIcon {...featuredIconProps} />
          </Grid>
        )}
        {useTextItemProps && (
          <Grid
            item
            sx={{
              ...textSx
            }}
            {...textGridItemProps}
          >
            <Grid
              container
              flexDirection={'column'}
              alignSelf={'center'}
              {...textContainerGridItemProps}
            >
              <Grid item {...textTitleGridItemProps}>
                <Typography {...titleTypography} component="span">
                  {title} {chipProps && <Chip {...chipProps} />}
                </Typography>
              </Grid>
              {tertiaryTitle && (
                <Grid item {...textTertiaryGridItemProps}>
                  <Typography {...tertiaryTitleTypography}>
                    {tertiaryTitle}
                  </Typography>
                </Grid>
              )}
              {subtitle && (
                <Grid item {...textSubtitleGridItemProps}>
                  <Typography {...finalSubtitleTypography}>
                    {subtitle}
                  </Typography>
                </Grid>
              )}
            </Grid>
          </Grid>
        )}
        {buttonListProps && (
          <Grid item {...(buttonListGridProps || {})}>
            <ButtonList {...buttonListProps} />
          </Grid>
        )}
        {buttonProps && (
          <Grid item sx={gridProps}>
            <Button {...restButtonProps} />
          </Grid>
        )}
        {children && (
          <Grid item {...childrenGridProps}>
            {children}
          </Grid>
        )}
      </Grid>
    );
  }
);
AvatarAndText.displayName = 'AvatarAndText';

export default AvatarAndText;
