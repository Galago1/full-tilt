import { useContext } from 'react';
import BreakpointContext from '../contexts/breakpoint';

const useIsSize = () => {
  return useContext(BreakpointContext);
};

export default useIsSize;
