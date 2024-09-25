import BreakpointContext from 'src/contexts/breakpoint/BreakpointContext';
import useBreakpointSize from 'src/hooks/useBreakpointSize';

const BreakpointProvider = ({ children }: { children: JSX.Element }) => {
  const value = useBreakpointSize();
  return (
    <BreakpointContext.Provider value={value}>
      {children}
    </BreakpointContext.Provider>
  );
};

export default BreakpointProvider;
