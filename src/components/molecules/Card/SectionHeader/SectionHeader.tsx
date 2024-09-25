import { Box, BoxProps, SxProps, Theme } from '@mui/material';
import { AvatarAndTextProps } from '../../AvatarAndText/AvatarAndText';
import TitleWithDefaults from '../../Shared/TitleWithDefaults/TitleWithDefaults';
import Divider, { DividerProps } from 'src/components/atoms/Divider/Divider';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';

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

export interface SectionHeaderProps extends BoxProps {
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
const SectionHeader = ({
  paddingBottom = responsiveBottomPadding,
  showDivider = false,
  slots,
  ...props
}: SectionHeaderProps) => {
  const { avatarAndTextProps, paddingBottomBoxProps, dividerProps } =
    slots || {};
  const baseBoxProps = {
    ...styles.boxSx,
    pt: !!avatarAndTextProps ? responsiveSpacing : 0
  };
  return (
    <>
      <Box sx={baseBoxProps} {...props}>
        {avatarAndTextProps && <TitleWithDefaults {...avatarAndTextProps} />}
        {paddingBottom && (
          <Box sx={{ pb: paddingBottom }} {...paddingBottomBoxProps} />
        )}
      </Box>
      {showDivider && <Divider sx={styles.dividerSx} {...dividerProps} />}
    </>
  );
};

export default SectionHeader;
