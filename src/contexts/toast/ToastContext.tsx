import { createContext } from 'react';
import { IToast, ToastContextType } from 'src/types/toast';

const ToastContext = createContext<ToastContextType>({
  toast: '',
  hideToast: () => {},
  showToast: (args: Partial<IToast>) => {}
});

export default ToastContext;
