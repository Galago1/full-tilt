import { Box, BoxProps, Grid, SxProps, Theme } from '@mui/material';
import Divider, { DividerProps } from 'src/components/atoms/Divider/Divider';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';
import { AvatarAndTextProps } from '../../AvatarAndText/AvatarAndText';
import TitleWithDefaults from '../../Shared/TitleWithDefaults/TitleWithDefaults';

const responsiveBottomPadding = { xs: 3, sm: 3, md: 3 };

const boxSx: SxProps<Theme> = {
  pt: responsiveSpacing,
  px: responsiveSpacing,
  my: 'auto'
};
const dividerSx = { mb: responsiveBottomPadding };
const styles = {
  boxSx,
  dividerSx
};

export interface CardHeaderProps extends BoxProps {
  children?: React.ReactNode;
  /**
   * The padding bottom of the container
   */
  paddingBottom?: any;
  /**
   * Option to show or hide the divider
   */
  showDivider?: boolean;
  /**
   * Optional slots to add more content with AvatarAndText component
   */
  slots?: {
    /**
     * The container styles
     */
    avatarAndTextProps?: AvatarAndTextProps;
    /**
     * the divider padding bottom box props
     */
    paddingBottomBoxProps?: BoxProps;
    /**
     * the divider props
     */
    dividerProps?: DividerProps;
  };
}
const CardHeader = ({
  children,
  paddingBottom = responsiveBottomPadding,
  showDivider = false,
  slots,
  ...props
}: CardHeaderProps) => {
  const { avatarAndTextProps, paddingBottomBoxProps, dividerProps } =
    slots || {};
  const baseBoxProps = {
    ...styles.boxSx,
    pt: !!avatarAndTextProps ? responsiveSpacing : 0
  };
  return (
    <>
      <Box sx={baseBoxProps} {...props}>
        <Grid container flexDirection={'column'} gap={responsiveSpacing}>
          <Grid item>
            {avatarAndTextProps && (
              <TitleWithDefaults {...avatarAndTextProps} />
            )}
          </Grid>
          {children ? <Grid item>{children}</Grid> : null}
        </Grid>
        {paddingBottom && (
          <Box sx={{ pb: paddingBottom }} {...paddingBottomBoxProps} />
        )}
      </Box>
      {showDivider && <Divider sx={styles.dividerSx} {...dividerProps} />}
    </>
  );
};

export default CardHeader;
