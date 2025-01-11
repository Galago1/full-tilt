import { useTheme } from '@mui/material';
import {
  endOfWeek,
  format,
  startOfWeek,
  subDays,
  subMonths,
  subQuarters,
  subWeeks,
  subYears
} from 'date-fns';
import { useMemo, useState } from 'react';
import useDeepCompareEffect from 'src/hooks/useDeepCompareEffect';
import { GoalCondition } from './helpers';

export interface RowDataObject {
  id?: string;
  value: string | number | undefined;
  date?: string;
  suffix?: string;
  prefix?: string;
}

export interface RowData {
  id?: string;
  owner: string;
  avatar?: string;
  title: string;
  goal: string;
  trend: number | undefined;
  data: RowDataObject[];
  goalCondition: GoalCondition;
  suffix?: string;
  prefix?: string;
}
export const useScorecard = (
  data: RowData[],
  type: string,
  isLoading: boolean,
  showEndIcon: boolean
) => {
  const [rows, setRows] = useState(data);

  useDeepCompareEffect(() => {
    if (!isLoading) {
      setRows(data);
    }
  }, [isLoading, data]);

  const [allChecked, setAllChecked] = useState(false);
  const [checked, setChecked] = useState<boolean[]>(data.map(() => false));
  const theme = useTheme();

  const handleAllCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const isChecked = event.target.checked;
    setAllChecked(isChecked);
    setChecked(data.map(() => isChecked));
  };

  const handleCheckboxChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const updatedChecked = [...checked];
      updatedChecked[index] = event.target.checked;
      setChecked(updatedChecked);
      setAllChecked(updatedChecked.every((value) => value));
    };

  const getDatesByType = (type: string) => {
    const today = new Date();
    switch (type) {
      case 'daily':
        const dailyDates = [];
        for (let i = 0; i < 6; i++) {
          const date = subDays(today, i);
          dailyDates.push(format(date, 'MMM dd'));
        }
        return dailyDates;
      case 'weekly':
        const weeklyDates = [];
        for (let i = 0; i < 6; i++) {
          const start = startOfWeek(subWeeks(today, i), { weekStartsOn: 1 }); // Monday
          const end = endOfWeek(subWeeks(today, i), { weekStartsOn: 1 }); // Sunday
          const startMonth = format(start, 'MMM');
          const endMonth = format(end, 'MMM');

          // If start and end are in the same month
          if (startMonth === endMonth) {
            weeklyDates.push(
              `${startMonth} ${format(start, 'd')}-${format(end, 'd')}`
            );
          } else {
            // If start and end are in different months
            weeklyDates.push(
              `${format(start, 'MM/dd')}-${format(end, 'MM/dd')}`
            );
          }
        }
        return weeklyDates;
      case 'monthly':
        const monthlyDates = [];
        for (let i = 0; i < 6; i++) {
          const date = subMonths(today, i);
          monthlyDates.push(format(date, 'MMM'));
        }
        return monthlyDates;
      case 'quarterly':
        const quarterlyDates = [];
        for (let i = 0; i < 4; i++) {
          const date = subQuarters(today, i);
          const quarter = Math.floor(date.getMonth() / 3) + 1;
          quarterlyDates.push(`Q${quarter}`);
        }
        return quarterlyDates;
      case 'yearly':
        const yearlyDates = [];
        for (let i = 0; i < 6; i++) {
          const date = subYears(today, i);
          yearlyDates.push(format(date, 'yyyy'));
        }
        return yearlyDates;
      default:
        return [];
    }
  };

  const getTitleByType = (type: string) => {
    switch (type) {
      case 'daily':
        return 'Daily';
      case 'weekly':
        return 'Weekly';
      case 'monthly':
        return 'Monthly';
      case 'quarterly':
        return 'Quarterly';
      case 'yearly':
        return 'Yearly';
      default:
        return 'Scorecard';
    }
  };

  const columnWidths = useMemo(() => {
    const dates = getDatesByType(type);
    const dataColumnsCount = dates.length;
    const spacing = theme.spacing(1);

    // Calculate data percentage - reduce from 40% to 30% when endIcon is shown
    const dataPercentage = showEndIcon ? 36 : 40;

    return {
      owner: `calc(20% - ${spacing})`, // 20%
      title: `calc(20% - ${spacing})`, // 20%
      goal: `calc(10% - ${spacing})`, // 10%
      trend: `calc(10% - ${spacing})`, // 10%
      // 40% without endIcon, 30% with endIcon
      data: `calc(${dataPercentage / dataColumnsCount}% - ${spacing})`,
      // Takes 10% when shown, but removes it from data percentage
      endIcon: showEndIcon ? `calc(4% - ${spacing})` : '0'
    };
  }, [theme, type, showEndIcon]);

  const dates = getDatesByType(type);

  const moveRow = (dragIndex: number, hoverIndex: number) => {
    const newRows = Array.from(rows);
    const [removed] = newRows.splice(dragIndex, 1);
    newRows.splice(hoverIndex, 0, removed);
    setRows(newRows);
  };

  return {
    allChecked,
    checked,
    handleAllCheckboxChange,
    handleCheckboxChange,
    getTitleByType,
    columnWidths,
    theme,
    dates,
    rows,
    moveRow
  };
};
