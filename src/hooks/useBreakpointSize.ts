import { Theme } from '@mui/material';
import { useMediaQuery } from '@mui/material';

const useBreakpointSize = (): {
  isXSmall: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLarge: boolean;
} => {
  const isLarge = useMediaQuery((theme: Theme) => theme.breakpoints.up('xl'));
  const isDesktop = useMediaQuery((theme: Theme) =>
    theme.breakpoints.only('lg')
  );
  const isTablet = useMediaQuery((theme: Theme) =>
    theme.breakpoints.only('md')
  );
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.only('sm')
  );
  const isXSmall = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm')
  );

  return { isXSmall, isMobile, isTablet, isDesktop, isLarge };
};

export default useBreakpointSize;
