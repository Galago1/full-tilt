import { forwardRef, useEffect, useState } from 'react';

// Material UI
import useConfetti from 'src/hooks/useConfetti';

import { default as ReactConfetti } from 'react-confetti';

const FRAME_INTERVAL = 100;

export interface ConfettiProps {}
const Confetti = forwardRef(({ ...props }: ConfettiProps, ref) => {
  const [startTime, setStartTime] = useState(0);
  const [curTime, setCurTime] = useState(0);

  const { confetti, hideConfetti } = useConfetti();

  const { visible, duration, width, height } = confetti;

  useEffect(() => {
    if (visible && duration) {
      setStartTime(Date.now());
      setCurTime(Date.now());
    }
  }, [confetti, duration, visible]);

  useEffect(() => {
    let interval: any;
    if (visible && duration) {
      interval = setInterval(() => {
        if (curTime < startTime + duration) {
          setCurTime(Date.now());
        } else {
          clearInterval(interval);
          setStartTime(Date.now());
          setCurTime(Date.now());
          hideConfetti();
        }
      }, FRAME_INTERVAL) as unknown as number; // Type assertion to number
    }
    return () => {
      clearInterval(interval as unknown as number); // Type assertion to number
    };
  }, [curTime, startTime, duration, hideConfetti, visible]);

  return (
    <ReactConfetti
      width={width}
      height={height}
      style={{ display: visible ? 'block' : 'none' }}
    />
  );
});

Confetti.displayName = 'Confetti';

export default Confetti;
