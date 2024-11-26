import { useEffect, useRef, useState, useCallback } from 'react';
import { MeetingDurationItem, PlanItem } from '.';

const mapPlanItemsToElapsedTimes = (
  planItems: PlanItem[]
): MeetingDurationItem => {
  return planItems.reduce((duration, item) => {
    duration[item.id] = 0;
    return duration;
  }, {} as MeetingDurationItem);
};

export const useMeetingTimeCard = (
  planItems: PlanItem[],
  initialElapsedTimes?: MeetingDurationItem,
  handleBackCb?: (item: PlanItem) => void,
  handleNextCb?: (item: PlanItem) => void,
  handlePlayPauseCb?: (isRunning: boolean) => void,
  handleClickCb?: (index: string) => void
) => {
  const firstPlanItem = planItems[0];
  const [currentId, setCurrentId] = useState<string>(firstPlanItem?.id ?? '');
  const [elapsedTimes, setElapsedTimes] = useState<MeetingDurationItem>(() =>
    initialElapsedTimes
      ? { ...initialElapsedTimes }
      : mapPlanItemsToElapsedTimes(planItems)
  );
  const [isRunning, setIsRunning] = useState(false);
  const [totalElapsedTime, setTotalElapsedTime] = useState(0);

  const intervalRef = useRef<number | null>(null);
  const elapsedTimesRef = useRef(elapsedTimes);

  // Keep ref in sync with state
  useEffect(() => {
    elapsedTimesRef.current = elapsedTimes;
  }, [elapsedTimes]);

  // Calculate total elapsed time whenever elapsedTimes changes
  useEffect(() => {
    const total = Object.values(elapsedTimes).reduce(
      (acc, time) => acc + time,
      0
    );
    setTotalElapsedTime(total);
  }, [elapsedTimes]);

  // Timer effect
  useEffect(() => {
    if (isRunning && currentId) {
      intervalRef.current = window.setInterval(() => {
        setElapsedTimes((prev) => {
          const newElapsedTimes = { ...prev };
          newElapsedTimes[currentId] = (newElapsedTimes[currentId] || 0) + 1;
          return newElapsedTimes;
        });
      }, 1000);
    }

    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isRunning, currentId]);

  const handleNext = useCallback(() => {
    const currentIndex = planItems.findIndex((item) => item.id === currentId);
    const nextIndex =
      currentIndex >= planItems.length - 1 ? 0 : currentIndex + 1;
    const nextItem = planItems[nextIndex];
    setCurrentId(nextItem.id);
    handleNextCb?.(nextItem);
  }, [currentId, planItems, handleNextCb]);

  const handleBack = useCallback(() => {
    const currentIndex = planItems.findIndex((item) => item.id === currentId);
    const prevIndex =
      currentIndex > 0 ? currentIndex - 1 : planItems.length - 1;
    const prevItem = planItems[prevIndex];
    setCurrentId(prevItem.id);
    handleBackCb?.(prevItem);
  }, [currentId, planItems, handleBackCb]);

  const handlePlayPause = useCallback(() => {
    setIsRunning((prev) => {
      const newIsRunning = !prev;
      handlePlayPauseCb?.(newIsRunning);
      return newIsRunning;
    });
  }, [handlePlayPauseCb]);

  const handleClick = useCallback(
    (index: string) => {
      setCurrentId(index);
      handleClickCb?.(index);
    },
    [handleClickCb]
  );

  const updateElapsedTimes = useCallback((newTimes: MeetingDurationItem) => {
    setElapsedTimes(newTimes);
  }, []);

  const currentItem = planItems.find((item) => item.id === currentId);
  const currentIndex = planItems.findIndex((item) => item.id === currentId);
  const currentItemElapsedTime = elapsedTimes[currentId] || 0;

  const furthestIndex = planItems.reduce((acc, item, index) => {
    const elapsedTime = elapsedTimes[item.id];
    return elapsedTime !== 0 ? Math.max(acc, index) : acc;
  }, -1);

  return {
    currentId,
    isRunning,
    currentItem: currentItem!,
    currentItemElapsedTime,
    totalElapsedTime,
    elapsedTimes,
    currentIndex,
    furthestIndex,
    setElapsedTimes: updateElapsedTimes,
    handleNext,
    handleBack,
    handlePlayPause,
    handleClick
  };
};
