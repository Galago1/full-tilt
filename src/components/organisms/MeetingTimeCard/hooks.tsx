import { useEffect, useRef, useState } from 'react';
import { MeetingDurationItem, PlanItem } from '.';

const mapPlanItemsToElapsedTimes = (
  planItems: PlanItem[]
): MeetingDurationItem => {
  const duration: MeetingDurationItem = {};
  planItems.map((item) => {
    duration[item.id] = 0;
  });
  return duration;
};

export const useMeetingTimeCard = (
  planItems: PlanItem[],
  initialElapsedTimes?: MeetingDurationItem,
  handleBackCb?: (item: PlanItem) => void,
  handleNextCb?: (item: PlanItem) => void,
  handlePlayPauseCb?: (isRunning: boolean) => void,
  handleClickCb?: (index: string) => void
) => {
  const [currentId, setCurrentId] = useState(planItems[0].id);
  const [elapsedTimes, setElapsedTimes] = useState<MeetingDurationItem>(
    initialElapsedTimes ?? mapPlanItemsToElapsedTimes(planItems)
  );
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = window.setInterval(() => {
        setElapsedTimes((prev) => {
          if (!currentId) return prev;
          const newElapsedTimes = { ...prev };
          newElapsedTimes[currentId] = newElapsedTimes[currentId] + 1;
          return newElapsedTimes;
        });
      }, 1000);
    } else if (!isRunning && intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, currentId]);

  const handleNext = () => {
    const currentIndex = planItems.findIndex((item) => item.id === currentId);
    const nextIndex =
      currentIndex >= planItems.length - 1 ? 0 : currentIndex + 1;
    const nextItem = planItems[nextIndex];
    setCurrentId(nextItem.id);
    handleNextCb?.(nextItem);
  };

  const handleBack = () => {
    const currentIndex = planItems.findIndex((item) => item.id === currentId);
    const prevIndex =
      currentIndex > 0 ? currentIndex - 1 : planItems.length - 1;
    const prevItem = planItems[prevIndex];
    setCurrentId(prevItem.id);
    handleBackCb?.(prevItem);
  };

  const handlePlayPause = () => {
    setIsRunning((prev) => !prev);
    handlePlayPauseCb?.(!isRunning);
  };

  const handleClick = (index: string) => {
    setCurrentId(index);
    handleClickCb?.(index);
  };

  const currentItem = currentId
    ? planItems.find((item) => item.id === currentId)
    : undefined;
  const currentItemElapsedTime = elapsedTimes[currentId];
  const totalElapsedTime = Object.values(elapsedTimes).reduce(
    (acc, time) => acc + time,
    0
  );
  const currentIndex = planItems.findIndex((item) => item.id === currentId);

  const furthestIndex = planItems.reduce((acc, item, index) => {
    const elapsedTime = elapsedTimes[item.id];
    return elapsedTime !== 0 ? Math.max(acc, index) : acc;
  }, -1); // used to start at zero once the first item is started

  return {
    currentId,
    isRunning,
    currentItem: currentItem!,
    currentItemElapsedTime,
    totalElapsedTime,
    elapsedTimes,
    currentIndex,
    furthestIndex,
    setElapsedTimes,
    handleNext,
    handleBack,
    handlePlayPause,
    handleClick
  };
};
