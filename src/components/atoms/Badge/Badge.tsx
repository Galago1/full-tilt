import type { SxProps, Theme } from '@mui/material';
import { Badge as MuiBadge } from '@mui/material';
import type { ReactNode } from 'react';

export interface BadgeProps {
  children?: ReactNode;
  /**
   * display or hide badge
   */
  invisible?: boolean;
  /**
   * anchorOrigin orientation of badge
   * diplay badge top or bottom
   * display badge left or right
   */
  anchorOrigin?: {
    vertical: 'top' | 'bottom';
    horizontal: 'right' | 'left';
  };
  /**
   * set badge max if content is
   * a number e.g. 999+ max=999
   */
  max?: number;
  /**
   * badgeContent displayed inside
   * badge
   */
  badgeContent?: number | string | ReactNode;
  /**
   * overlap wraps shape with badge
   */
  overlap?: 'circular' | 'rectangular';
  /**
   * showzero hides badge if content is a number
   * and equals 0
   */
  showZero?: boolean;
  /**
   * Css style overrides
   */
  sx?: SxProps<Theme>;
  /**
   * The variant to use
   */
  variant?: 'dot' | 'standard';
  onClick?: () => void;
}

const Badge = ({ children, badgeContent, sx, ...props }: BadgeProps) => {
  return (
    <MuiBadge badgeContent={badgeContent} sx={sx} {...props}>
      {children}
    </MuiBadge>
  );
};

export default Badge;
