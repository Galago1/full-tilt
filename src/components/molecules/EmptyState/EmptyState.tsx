import type { GridProps, SxProps, Theme } from '@mui/material';
import { Grid } from '@mui/material';
import type { FeaturedIconProps } from 'src/components/atoms/FeaturedIcon/FeaturedIcon';
import FeaturedIcon from 'src/components/atoms/FeaturedIcon/FeaturedIcon';
import useIsSize from 'src/hooks/useIsSize';
import FileInputButton, {
  FileInputButtonProps
} from '../../atoms/FileInputButton/FileInputButton';
import type { AvatarAndTextProps } from '../AvatarAndText/AvatarAndText';
import AvatarAndText from '../AvatarAndText/AvatarAndText';
import type { ButtonListProps } from '../ButtonList/ButtonList';
import ButtonList from '../ButtonList/ButtonList';

export interface EmptyStateProps extends GridProps {
  /**
   * Featured Icon Props
   */
  featuredIconProps?: FeaturedIconProps;
  /**
   * Featured Icon Item Props
   */
  featuredIconItemProps?: GridProps;
  /**
   * Avatar And Text Props
   */
  avatarAndTextProps?: AvatarAndTextProps;
  /**
   * Button List Props
   */
  buttonListProps?: ButtonListProps;
  /**
   * Button List Item Props
   */
  buttonListItemProps?: GridProps;
  /**
   * Show a file upload button
   */
  fileInputButtonProps?: FileInputButtonProps;
  /**
   * Grid item props for the avatar and text
   */
  avatarAndTextItemProps?: SxProps<Theme>;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const EmptyState = ({
  featuredIconProps,
  featuredIconItemProps,
  avatarAndTextProps,
  avatarAndTextItemProps,
  buttonListProps,
  fileInputButtonProps,
  buttonListItemProps,
  children,
  ...props
}: EmptyStateProps) => {
  const { isDesktop, isLarge } = useIsSize();
  return (
    <Grid container spacing={0} flexDirection={'column'} {...props}>
      {featuredIconProps && (
        <Grid item {...featuredIconItemProps}>
          <FeaturedIcon
            size={isDesktop || isLarge ? 'xl' : 'lg'}
            {...featuredIconProps}
          />
        </Grid>
      )}

      {avatarAndTextProps && (
        <Grid item sx={{ ...avatarAndTextItemProps }}>
          <AvatarAndText
            {...avatarAndTextProps}
            titleTypography={{
              ...avatarAndTextProps.titleTypography,
              variant:
                avatarAndTextProps.titleTypography?.variant ||
                (isDesktop || isLarge ? 'textXlSemibold' : 'textLgSemibold')
            }}
            subtitleTypography={{
              ...avatarAndTextProps.subtitleTypography,
              variant:
                avatarAndTextProps.subtitleTypography?.variant ||
                (isDesktop || isLarge ? 'textMdRegular' : 'textSmRegular')
            }}
          />
        </Grid>
      )}

      {buttonListProps && (
        <Grid
          item
          xs={12}
          sx={{ '&.MuiGrid-item': { pt: 4 }, width: '100%' }}
          {...buttonListItemProps}
        >
          <ButtonList {...buttonListProps} />
        </Grid>
      )}

      {fileInputButtonProps && (
        <Grid
          item
          xs={12}
          sx={{
            '&.MuiGrid-item': { pt: 4 },
            width: '100%',
            textAlign: 'center'
          }}
        >
          <FileInputButton {...fileInputButtonProps} />
        </Grid>
      )}
      {children}
    </Grid>
  );
};
export default EmptyState;
