import { useContext } from 'react';
import { ToastContextType } from '../types/toast';
import ToastContext from '../contexts/toast/ToastContext';

// ----------------------------------------------------------------------
const useToast = (): ToastContextType => {
  return useContext(ToastContext);
};
export default useToast;
