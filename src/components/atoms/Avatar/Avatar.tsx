import {
  Grid,
  Avatar as MuiAvatar,
  AvatarProps as MuiAvatarProps
} from '@mui/material';
import { forwardRef } from 'react';
import Tooltip, { TooltipProps } from '../Tooltip/Tooltip';

export interface AvatarProps extends MuiAvatarProps {
  tooltipProps?: TooltipProps;
}

const Avatar = forwardRef(
  ({ children, tooltipProps, ...props }: AvatarProps, ref: any) => {
    return (
      <Tooltip {...tooltipProps!}>
        <Grid>
          <MuiAvatar {...props} ref={ref}>
            {children}
          </MuiAvatar>
        </Grid>
      </Tooltip>
    );
  }
);

export default Avatar;
