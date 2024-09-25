export type ConfettiContextType = {
  confetti: any;
  hideConfetti: () => void;
  showConfetti: (args: Partial<IConfetti>) => void;
};

export interface IConfetti {
  duration: number;
  visible: boolean;
  width: number | string;
  height: number | string;
}
