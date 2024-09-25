import type { SxProps, Theme } from '@mui/material';
import { Box, Paper } from '@mui/material';
import type { ReactNode } from 'react';
import AvatarAndText, {
  AvatarAndTextProps
} from '../AvatarAndText/AvatarAndText';

// This should extend the paper props

export interface BlockProps {
  /**
   * Optional box styles
   */
  children?: ReactNode;
  /**
   * Optional Box styles
   */
  sx?: SxProps<Theme>;
  /**
   * Optional Paper styles
   */
  paperSx?: SxProps<Theme>;
  /**
   * Avatar and Text Props
   */
  avatarAndTextProps?: AvatarAndTextProps;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const Block = ({
  sx,
  paperSx,
  avatarAndTextProps,
  children,
  ...props
}: BlockProps) => {
  return (
    <Paper
      {...props}
      variant="outlined"
      sx={{
        borderRadius: 0,
        ...paperSx
      }}
    >
      {avatarAndTextProps && <AvatarAndText {...avatarAndTextProps} />}
      {children && <Box sx={{ p: 3, ...sx }}>{children}</Box>}
    </Paper>
  );
};

export default Block;
