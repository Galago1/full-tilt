import { createContext } from 'react';

const BreakpointContext = createContext({
  isXSmall: false,
  isMobile: false,
  isTablet: false,
  isDesktop: false,
  isLarge: false
});

export default BreakpointContext;
