import { useEffect } from 'react';

interface UseKeyboardComboProps {
  callback: () => void;
  key: string;
}

const useKeyboardCombo = (key: string, callback: () => void) => {
  useEffect(() => {
    const handler = (event: any) => {
      if (event.ctrlKey && event.key === key) {
        callback();
      }
    };

    window.addEventListener('keydown', handler);

    // Cleanup function, will run when component unmounts
    return () => {
      window.removeEventListener('keydown', handler);
    };
  }, [callback]); // Re-run if `callback` changes
};

export default useKeyboardCombo;
