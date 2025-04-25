import { ReactNode, useCallback, useState } from 'react';
import { IConfetti } from 'src/types/confetti';
import ConfettiContext from 'src/contexts/confetti/ConfettiContext';

const initialConfetti = (visible = false): IConfetti => ({
  width: 1920,
  height: 1080,
  duration: 3000,
  visible
});

interface ConfettiProviderProps {
  init?: Partial<IConfetti>;
  children: ReactNode;
}
const ConfettiProvider = ({ init = {}, ...props }: ConfettiProviderProps) => {
  const [confetti, setConfetti] = useState({ ...initialConfetti, ...init });

  const showConfetti = useCallback((args: Partial<IConfetti>) => {
    setConfetti({ ...initialConfetti(true), ...args });
  }, []);

  const hideConfetti = useCallback(() => {
    setConfetti((prevConfetti) => ({
      ...prevConfetti,
      visible: false,
      duration: 0
    }));
  }, []);

  return (
    <ConfettiContext.Provider
      value={{
        hideConfetti,
        showConfetti,
        confetti
      }}
    >
      {props.children}
    </ConfettiContext.Provider>
  );
};

export default ConfettiProvider;
