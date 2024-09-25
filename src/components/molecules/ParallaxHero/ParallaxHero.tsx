import { Box, SxProps, Theme } from '@mui/material';
// import { AvatarAndText } from '@galago/react-ds';
import useParallaxShift from 'src/hooks/useParallaxShift';
import AvatarAndText from '../AvatarAndText';
import { AvatarAndTextProps } from '../AvatarAndText/AvatarAndText';

export interface ParallaxHeroProps {
  /**
   * The props for the HeaderBox component
   */
  headerBoxProps?: SxProps<Theme>;
  /**
   * The props for the Box component
   */
  boxSx?: SxProps<Theme>;
  /**
   * The props for the AvatarAndText component
   */
  avatarAndTextProps?: AvatarAndTextProps;
}
const ParallaxHero = ({
  headerBoxProps,
  boxSx,
  avatarAndTextProps,
  ...props
}: ParallaxHeroProps) => {
  const { offset } = useParallaxShift();
  return (
    <Box {...props} sx={{ ...headerBoxProps }}>
      {boxSx && (
        <Box sx={{ ...boxSx, bottom: offset / 2 }}>
          <AvatarAndText {...avatarAndTextProps} />
        </Box>
      )}
    </Box>
  );
};

export default ParallaxHero;
