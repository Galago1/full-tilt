import {
  CardContent as MuiCardContent,
  CardContentProps as MuiCardContentProps,
  SxProps,
  Theme
} from '@mui/material';
import { ReactNode } from 'react';
import { AvatarAndTextProps } from '../../AvatarAndText/AvatarAndText';
import TitleWithDefaults from '../../Shared/TitleWithDefaults/TitleWithDefaults';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';

const boxSx: SxProps<Theme> = {
  px: responsiveSpacing,
  pb: { xs: 0, sm: 0, md: 0 }
};

export interface CardContentProps extends MuiCardContentProps {
  /**
   * Avatar and text props
   */
  avatarAndTextProps?: AvatarAndTextProps;

  /**
   * Optional slots to add more content with AvatarAndText component
   */
  slots?: {
    /**
     * The container styles
     */
    avatarAndTextProps?: AvatarAndTextProps;
  };
  /**
   * Children content
   */
  children?: ReactNode;
}

// Adds Avatar and text Props to CardContent
const CardContent = ({
  title,
  children,
  slots,
  ...props
}: CardContentProps) => {
  const { avatarAndTextProps } = slots || {};
  const baseContainerProps = {
    ...boxSx,
    pt: !!avatarAndTextProps ? responsiveSpacing : 0
  };

  return (
    <MuiCardContent sx={baseContainerProps} {...props}>
      {avatarAndTextProps && <TitleWithDefaults {...avatarAndTextProps} />}
      {children}
    </MuiCardContent>
  );
};

export default CardContent;
