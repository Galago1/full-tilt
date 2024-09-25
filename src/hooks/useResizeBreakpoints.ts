import { debounce } from '@mui/material';
import { useState, useEffect } from 'react';
import { default as ogBreakpoints } from '../components/particles/theme/breakpoints';

const useBreakpoints = () => {
  const [breakpoints, setBreakpoints] = useState(ogBreakpoints);

  useEffect(() => {
    const setScreenBasedBreakpoints = debounce(() => {
      if (typeof window !== 'undefined') {
        const targetScreenWidth = 1536;
        const currentScreenWidth =
          window.screen.width * window.devicePixelRatio;
        const originalResult = 1728 * window.devicePixelRatio;
        const ratio = targetScreenWidth / originalResult;
        const screenWidth = currentScreenWidth * ratio;

        setBreakpoints({
          values: {
            xs: 0,
            sm: screenWidth * 0.25,
            md: screenWidth * 0.5,
            lg: screenWidth * 0.75,
            xl: screenWidth
          }
        });
      }
    }, 300); // 300ms debounce
    setScreenBasedBreakpoints();

    window.addEventListener('resize', setScreenBasedBreakpoints);
    return () => {
      window.removeEventListener('resize', setScreenBasedBreakpoints);
    };
  }, []);

  return breakpoints;
};

export default useBreakpoints;
