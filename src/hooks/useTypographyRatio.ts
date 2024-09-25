import { debounce } from '@mui/material';
import { useState, useEffect } from 'react';

const useTypographyRatio = () => {
  const [ratio, setRatio] = useState(1);

  useEffect(() => {
    // Calculate a ratio based on the screen's width and device pixel ratio.
    // The ratio is the division of 1728 by the product of the screen's width and the device pixel ratio.
    // However, if the screen's width times the device pixel ratio is greater than 1728,
    // the ratio would be less than 1. To prevent this, Math.max is used to ensure the ratio is never less than 1.
    // This means for screens with a width (in CSS pixels) times device pixel ratio of 1728 or more, the ratio will be 1.
    // For screens with a smaller width, the ratio will be greater than 1, increasing as the screen size decreases.
    const setScreenBasedRatio = debounce(() => {
      const newRatio = Math.max(
        1,
        1728 / (window.screen.width * window.devicePixelRatio)
      );
      return setRatio(newRatio);
    }, 300); // 300ms debounce
    setScreenBasedRatio();

    window.addEventListener('resize', setScreenBasedRatio);
    return () => {
      window.removeEventListener('resize', setScreenBasedRatio);
    };
  }, []);

  return ratio;
};

export default useTypographyRatio;
