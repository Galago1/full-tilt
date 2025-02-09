import { Typography } from '@mui/material';
import Link from 'src/components/atoms/Link/Link';
import { Home02Icon } from 'src/components/particles/theme/icons/General/home-02';
import { Breadcrumb } from './Breadcrumbs';

const homeLink = (breadcrumb: Breadcrumb, large: boolean) => {
  const href = breadcrumb.href ? { href: breadcrumb.href } : {};
  const breadcrumbLink = {
    children: breadcrumb.children ? (
      <Typography
        variant={large ? 'textMdRegular' : 'textSmRegular'}
        fontWeight={'regular'}
        color="text.secondary"
        component={'span'}
        {...breadcrumb.typographyProps}
      >
        {breadcrumb.children}
      </Typography>
    ) : (
      <Home02Icon />
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
    },
    ...breadcrumb.linkProps
  } as const;
  return <Link key={'home-crumb'} {...breadcrumbLink} />;
};

const middleLink = (breadcrumb: Breadcrumb, large: boolean, index: number) => {
  const breadcrumbLink = {
    ...breadcrumb,
    children: breadcrumb.label,
    href: breadcrumb.href,
    color: 'text.secondary',
    variant: large ? 'textMdRegular' : 'textSmRegular',
    ...breadcrumb.linkProps
  } as const;
  return <Link key={`middle-crumb-[${index}]`} {...breadcrumbLink} />;
};

const endText = (breadcrumb: Breadcrumb, large: boolean) => {
  const breadcrumbTypography = {
    color: 'text.secondary',
    variant: large ? 'textMdRegular' : 'textSmRegular',
    fontWeight: large ? 'medium' : 'regular',
    sx: breadcrumb.sx,
    ...breadcrumb.typographyProps
  } as const;
  return (
    <Typography key={'end-crumb'} {...breadcrumbTypography} component={'span'}>
      {breadcrumb.label}
    </Typography>
  );
};

/**
 * Primary UI component for user interaction
 */
export const breadcrumbList = (breadcrumbs: Breadcrumb[], large: boolean) => {
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
