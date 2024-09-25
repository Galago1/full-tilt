import { createContext } from 'react';
import { ConfettiContextType, IConfetti } from 'src/types/confetti';

const ConfettiContext = createContext<ConfettiContextType>({
  confetti: '',
  hideConfetti: () => {},
  showConfetti: (args: Partial<IConfetti>) => {}
});

export default ConfettiContext;
