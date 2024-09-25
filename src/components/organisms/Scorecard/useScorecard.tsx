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
import { GoalCondition, isTrendWithinGoal } from './helpers';

export interface RowDataObject {
  id?: string;
  value: string | number | undefined;
  date?: string;
}

export interface RowData {
  id?: string;
  owner: string;
  avatar?: string;
  title: string;
  goal: string;
  trend: number;
  data: RowDataObject[];
  goalCondition: GoalCondition;
}
export const useScorecard = (
  data: RowData[],
  type: string,
  isLoading: boolean
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
          const start = startOfWeek(subWeeks(today, i));
          const end = endOfWeek(subWeeks(today, i));
          weeklyDates.push(`${format(start, 'MMM d')}-${format(end, 'd')}`);
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

  const columnWidths = useMemo(
    () => ({
      owner: `calc(20% - ${theme.spacing(1)})`,
      title: `calc(20% - ${theme.spacing(1)})`,
      goal: `calc(10% - ${theme.spacing(1)})`,
      trend: `calc(10% - ${theme.spacing(1)})`,
      data: `calc(${40 / getDatesByType(type).length}% - ${theme.spacing(1)})`
    }),
    [theme, type]
  );

  const dates = getDatesByType(type);
  // const [anchorEls, setAnchorEls] = useState<HTMLElement[]>(
  //   new Array(rows.length).fill(null)
  // );

  // const handleRowMenuClick =
  //   (index: number) => (event: React.MouseEvent<HTMLElement>) => {
  //     const newAnchorEls = [...anchorEls];
  //     newAnchorEls[index] = event.currentTarget;
  //     setAnchorEls(newAnchorEls);
  //   };

  // const handleRowMenuClose = (index: number) => () => {
  //   const newAnchorEls: any = [...anchorEls];
  //   newAnchorEls[index] = null;
  //   setAnchorEls(newAnchorEls);
  // };

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
    isTrendWithinGoal,
    getTitleByType,
    columnWidths,
    theme,
    dates,
    rows,
    moveRow
    // handleRowMenuClick,
    // handleRowMenuClose,
    // anchorEls
  };
};
