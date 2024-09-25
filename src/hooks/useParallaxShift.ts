import { useEffect, useState } from 'react';

const useParallaxShift = () => {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    window.addEventListener('scroll', parallaxShift);
    return () => window.removeEventListener('scroll', parallaxShift);
  }, []);
  const parallaxShift = () => {
    setOffset(window.pageYOffset);
  };
  return { offset };
};
export default useParallaxShift;
