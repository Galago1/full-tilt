import type { SxProps, Theme } from '@mui/material';
import { Breadcrumbs as MuiBreadcrumbs } from '@mui/material';
import { BreadcrumbList } from './BreadcrumbList/BreadcrumbList';

export interface Breadcrumb {
  label: string | JSX.Element;
  href?: string;
  sx?: SxProps<Theme>;
  children?: JSX.Element | string;
  onClick?: () => void;
}

export interface BreadcrumbsProps {
  /**
   * The breadcrumb separator
   */
  breadcrumbs: Breadcrumb[];
  /**
   * The breadcrumb separator
   */
  separator?: string | JSX.Element;
  /**
   * Css style overrides
   */
  sx?: SxProps;
  /**
   * The disabled state
   */
  disabled?: boolean;
  large?: boolean;
}

/**
 * Primary UI component for user interaction
 */
const Breadcrumbs = ({
  breadcrumbs,
  separator = '›',
  sx,
  disabled,
  large,
  ...props
}: BreadcrumbsProps) => {
  return (
    <MuiBreadcrumbs separator={separator} aria-label="breadcrumb" {...props}>
      {BreadcrumbList(breadcrumbs, !!large)}
    </MuiBreadcrumbs>
  );
};
export default Breadcrumbs;
