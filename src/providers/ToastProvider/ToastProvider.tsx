import { ReactNode, useCallback, useState } from 'react';
import { IToast } from 'src/types/toast';
import ToastContext from 'src/contexts/toast/ToastContext';

const initialToast = (visible = false): IToast => ({
  text: '',
  type: 'primary',
  duration: 3000,
  position: {
    vertical: 'top',
    horizontal: 'center'
  },
  visible
});

interface ToastProviderProps {
  init?: Partial<IToast>;
  children: ReactNode;
}
const ToastProvider = ({ init = {}, ...props }: ToastProviderProps) => {
  const [toast, setToast] = useState({ ...initialToast, ...init });

  const showToast = useCallback((args: Partial<IToast>) => {
    setToast({ ...initialToast(true), ...args });
  }, []);

  const hideToast = useCallback(() => {
    setToast({ ...toast, visible: false });
  }, [toast]);

  return (
    <ToastContext.Provider
      value={{
        hideToast,
        showToast,
        toast
      }}
    >
      {props.children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
