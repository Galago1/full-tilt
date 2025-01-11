import { format } from 'date-fns';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export const useMeetingsCard = (
  externalCurrentDate?: Date,
  externalHandleDateChange?: Dispatch<SetStateAction<Date>>
) => {
  const [currentDate, setCurrentDate] = useState<Date>(
    externalCurrentDate || new Date()
  );
  useEffect(() => {
    setCurrentDate(externalCurrentDate ?? currentDate);
  }, [externalCurrentDate]);

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setCurrentDate(date);
    }
  };

  const formatDate = (date: Date): string => {
    const formattedDate = format(date, 'EEEE, MMM d');

    const day = date.getDate();
    const suffix =
      day % 10 === 1 && day !== 11
        ? 'st'
        : day % 10 === 2 && day !== 12
        ? 'nd'
        : day % 10 === 3 && day !== 13
        ? 'rd'
        : 'th';

    return `${formattedDate}${suffix}`;
  };

  return {
    currentDate: externalCurrentDate || currentDate,
    handleDateChange: externalHandleDateChange || handleDateChange,
    formatDate
  };
};
