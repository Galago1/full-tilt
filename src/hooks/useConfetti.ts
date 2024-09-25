import { useContext } from 'react';
import { ConfettiContextType } from '../types/confetti';
import ConfettiContext from '../contexts/confetti/ConfettiContext';

// ----------------------------------------------------------------------
const useConfetti = (): ConfettiContextType => {
  return useContext(ConfettiContext);
};
export default useConfetti;
