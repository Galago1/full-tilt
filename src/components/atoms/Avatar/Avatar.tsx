import { Avatar as MuiAvatar } from '@mui/material';
import { AvatarProps as MuiAvatarProps } from '@mui/material';
import { forwardRef } from 'react';

export interface AvatarProps extends MuiAvatarProps {}

const Avatar = forwardRef(({ children, ...props }: AvatarProps, ref: any) => {
  return (
    <MuiAvatar {...props} ref={ref}>
      {children}
    </MuiAvatar>
  );
});

export default Avatar;
