import type { SxProps, Theme } from '@mui/material';
import type { ReactNode } from 'react';
import Block, { BlockProps } from 'src/components/molecules/Block/Block';

export interface BlockContainerProps extends BlockProps {
  /**
   * Header title content
   */
  title?: string;
  /**
   * Header subtitle
   */
  description?: string;
  /**
   * Optional box styles
   */
  children: ReactNode;
  /**
   * Optional Container styles
   */
  containerSx?: SxProps<Theme>;
  /**
   * Optional Box styles
   */
  sx?: SxProps<Theme>;
  /**
   * Optional Paper styles
   */
  paperSx?: SxProps<Theme>;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}
/**
 * Primary UI component for user interaction
 */

const BlockContainer = ({
  title,
  description,
  containerSx,
  sx,
  paperSx,
  children,
  ...props
}: BlockContainerProps) => {
  return (
    <Block
      avatarAndTextProps={{
        title: title,
        subtitle: description,
        titleTypography: {
          variant: 'textLgSemibold'
        },
        subtitleTypography: {
          variant: 'textSmRegular'
        }
      }}
      sx={sx}
      paperSx={paperSx}
      {...props}
    >
      {children}
    </Block>
  );
};
export default BlockContainer;
