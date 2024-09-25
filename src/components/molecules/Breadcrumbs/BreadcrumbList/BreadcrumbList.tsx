import { Typography } from '@mui/material';
import Link from 'src/components/atoms/Link/Link';
import { HomeOutlineIcon } from 'src/components/particles/theme/overrides/CustomIcons';
import type { Breadcrumb } from '../Breadcrumbs';

const homeLink = (breadcrumb: Breadcrumb, large: boolean) => {
  const href = breadcrumb.href ? { href: breadcrumb.href } : {};
  const crumb = {
    children: breadcrumb.children ? (
      <Typography
        variant={large ? 'textMdRegular' : 'textSmRegular'}
        fontWeight={'regular'}
        color="text.secondary"
        component={'span'}
      >
        {breadcrumb.children}
      </Typography>
    ) : (
      <HomeOutlineIcon />
    ),
    onClick: breadcrumb.onClick,
    ...href,
    // For the icon
    color: 'text.secondary',
    sx: {
      ...breadcrumb.sx,
      display: 'flex',
      alignContent: 'center',
      cursor: 'pointer'
    }
  } as const;
  return <Link key={'home-crumb'} {...crumb} />;
};

const middleLink = (breadcrumb: Breadcrumb, large: boolean, index: number) => {
  const crumb = {
    ...breadcrumb,
    children: breadcrumb.label,
    href: breadcrumb.href,
    color: 'text.secondary',
    variant: large ? 'textMdRegular' : 'textSmRegular'
  } as const;
  return <Link key={`middle-crumb-[${index}]`} {...crumb} />;
};

const endText = (breadcrumb: Breadcrumb, large: boolean) => {
  const crumb = {
    color: 'text.secondary',
    variant: large ? 'textMdRegular' : 'textSmRegular',
    fontWeight: large ? 'medium' : 'regular',
    sx: breadcrumb.sx
  } as const;
  return (
    <Typography key={'end-crumb'} {...crumb} component={'span'}>
      {breadcrumb.label}
    </Typography>
  );
};

/**
 * Primary UI component for user interaction
 */
export const BreadcrumbList = (breadcrumbs: Breadcrumb[], large: boolean) => {
  return breadcrumbs.map((breadcrumb, index) => {
    if (index === 0 && !breadcrumb.label) {
      return homeLink(breadcrumb, large);
    } else if (index === breadcrumbs.length - 1) {
      return endText(breadcrumb, large);
    } else {
      return middleLink(breadcrumb, large, index);
    }
  });
};
