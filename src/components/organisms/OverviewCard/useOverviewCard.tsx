import { TableContainerProps, useTheme } from '@mui/material';
import { first, isEmpty } from 'lodash';
import { useCallback, useEffect, useState } from 'react';

type Category =
  | 'Productivity & Focus'
  | 'Company Collaboration'
  | 'Project Management'
  | 'Employee Engagement'
  | 'Training & Development'
  | 'Roadmap & Strategy'
  | 'Innovation & Creativity'
  | 'Customer Insights'
  | 'Process Improvement'
  | 'Leadership & Management'
  | 'Customer Testing & Feedback'
  | 'Company Culture';
type Score = string;
type TeamData = Record<Category, Score>;
type SurveyData = Record<string, TeamData>;

interface UseOverviewCardProps {
  data: Record<string, SurveyData>;
  selectedQuarter: 'Q1' | 'Q2' | 'Q3' | 'Q4';
  onQuarterChange: (quarter: 'Q1' | 'Q2' | 'Q3' | 'Q4') => void;
  slots: {
    tableContainerProps: TableContainerProps;
  };
}

export const useOverviewCard = ({
  data,
  selectedQuarter,
  onQuarterChange,
  slots
}: UseOverviewCardProps) => {
  const theme = useTheme();
  const { tableContainerProps } = slots || {};
  const [currentData, setCurrentData] = useState<SurveyData>(
    data[selectedQuarter]
  );
  const initialTeamNames = Object.keys(currentData) as string[];
  const firstTeamName = first(initialTeamNames) as string;
  const initialCategories = isEmpty(initialTeamNames)
    ? []
    : (Object.keys(currentData[firstTeamName]) as Category[]);

  const [teamNames, setTeamNames] = useState<string[]>(initialTeamNames);
  const [categories, setCategories] = useState<Category[]>(initialCategories);

  useEffect(() => {
    setCurrentData(data[selectedQuarter]);
    setTeamNames(Object.keys(data[selectedQuarter]) as string[]);
    setCategories(
      Object.keys(data[selectedQuarter][firstTeamName]) as Category[]
    );
  }, [selectedQuarter, data]);

  const handleVerticalIconClick = () => {
    setTeamNames((prevTeamNames) => [...prevTeamNames].reverse());
  };

  const handleHorizontalIconClick = () => {
    setCategories((prevCategories) => [...prevCategories].reverse());
  };

  const moveRow = useCallback((dragIndex: number, hoverIndex: number) => {
    setTeamNames((prevTeamNames) => {
      const newTeamNames = [...prevTeamNames];
      const draggedItem = newTeamNames[dragIndex];
      newTeamNames.splice(dragIndex, 1);
      newTeamNames.splice(hoverIndex, 0, draggedItem);
      return newTeamNames;
    });
  }, []);

  const moveColumn = useCallback((dragIndex: number, hoverIndex: number) => {
    setCategories((prevCategories) => {
      const newCategories = [...prevCategories];
      const draggedItem = newCategories[dragIndex];
      newCategories.splice(dragIndex, 1);
      newCategories.splice(hoverIndex, 0, draggedItem);
      return newCategories;
    });
  }, []);

  const quarters: ('Q1' | 'Q2' | 'Q3' | 'Q4')[] = ['Q1', 'Q2', 'Q3', 'Q4'];
  const currentQuarterIndex = quarters.indexOf(selectedQuarter);

  const handleQuarterChange = (direction: 'left' | 'right') => {
    const newIndex =
      direction === 'left' ? currentQuarterIndex - 1 : currentQuarterIndex + 1;
    onQuarterChange(quarters[newIndex]);
  };

  return {
    currentData,
    teamNames,
    categories,
    handleVerticalIconClick,
    handleHorizontalIconClick,
    moveRow,
    moveColumn,
    handleQuarterChange,
    currentQuarterIndex,
    quarters,
    theme,
    tableContainerProps
  };
};
