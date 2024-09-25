import { useRef, useEffect } from 'react';

const useDeepCompareEffect = (callback: any, dependencies: any) => {
  const currentDependenciesRef = useRef<any>();

  if (
    !currentDependenciesRef.current ||
    dependencies.some(
      (dep: any, index: number) => dep !== currentDependenciesRef.current[index]
    )
  ) {
    currentDependenciesRef.current = dependencies;
  }

  useEffect(callback, currentDependenciesRef.current);
};

export default useDeepCompareEffect;
