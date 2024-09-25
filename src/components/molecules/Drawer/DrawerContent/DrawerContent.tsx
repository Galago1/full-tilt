import {
  CardContent as MuiDrawerContent,
  CardContentProps as MuiDrawerContentProps,
  SxProps,
  Theme
} from '@mui/material';
import { ReactNode } from 'react';
import { AvatarAndTextProps } from '../../AvatarAndText/AvatarAndText';
import TitleWithDefaults from '../../Shared/TitleWithDefaults/TitleWithDefaults';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';

const boxSx: SxProps<Theme> = {
  px: responsiveSpacing,
  pb: { xs: 0, sm: 0, md: 0 },
  flex: 1,
  overflowY: 'auto'
};

export interface DrawerContentProps extends MuiDrawerContentProps {
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

// Adds Avatar and text Props to DrawerContent
const DrawerContent = ({
  title,
  children,
  slots,
  ...props
}: DrawerContentProps) => {
  const { avatarAndTextProps } = slots || {};
  const baseContainerProps = {
    ...boxSx,
    pt: !!avatarAndTextProps ? responsiveSpacing : 0
  };

  return (
    <MuiDrawerContent sx={baseContainerProps} {...props}>
      {avatarAndTextProps && <TitleWithDefaults {...avatarAndTextProps} />}
      {children}
    </MuiDrawerContent>
  );
};

export default DrawerContent;
