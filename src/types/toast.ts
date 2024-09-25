export type ShowToast = (args: Partial<IToast>) => void;

export type ToastContextType = {
  toast: any;
  hideToast: () => void;
  showToast: ShowToast;
};

export interface IToast {
  text: string;
  type: 'primary' | 'warning' | 'error';
  duration: number;
  position: {
    vertical: string;
    horizontal: string;
  };
  visible: boolean;
}
