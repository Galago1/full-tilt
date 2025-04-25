import { Paper, PaperProps, TableCell, TableRow, Theme } from '@mui/material';
import { styled } from '@mui/system';
import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import Avatar from 'src/components/atoms/Avatar/Avatar';
import Tooltip from 'src/components/atoms/Tooltip/Tooltip';
// import { TrendUp01Icon } from 'src/components/particles/theme/icons/Charts/trend-up-01';
// import { MessageSmileCircleIcon } from 'src/components/particles/theme/icons/Communication/message-smile-circle';
// import { PaletteIcon } from 'src/components/particles/theme/icons/Editor/palette';
// import { RulerIcon } from 'src/components/particles/theme/icons/Education/ruler';
// import { CheckVerified01Icon } from 'src/components/particles/theme/icons/General/check-verified-01';
// import { HeartIcon } from 'src/components/particles/theme/icons/General/heart';
// import { Target04Icon } from 'src/components/particles/theme/icons/General/target-04';
// import { LayersTwo01Icon } from 'src/components/particles/theme/icons/Layout/layers-two-01';
// import { ListIcon } from 'src/components/particles/theme/icons/Layout/list';
// import { RouteIcon } from 'src/components/particles/theme/icons/MapsAndTravel/route';
// import { FaceSmileIcon } from 'src/components/particles/theme/icons/Users/face-smile';
// import { Users03Icon } from 'src/components/particles/theme/icons/Users/users-03';

export const mockData = {
  q1: {
    'All Teams': {
      'Productivity & Focus': '0',
      'Company Collaboration': '66',
      'Project Management': '34',
      'Employee Engagement': '92',
      'Training & Development': '57',
      'Roadmap & Strategy': '88',
      'Innovation & Creativity': '64',
      'Customer Insights': '95',
      'Process Improvement': '72',
      'Leadership & Management': '81',
      'Customer Testing & Feedback': '68',
      'Company Culture': '44'
    },
    'Product Team': {
      'Productivity & Focus': '',
      'Company Collaboration': '78',
      'Project Management': '64',
      'Employee Engagement': '90',
      'Training & Development': '83',
      'Roadmap & Strategy': '45',
      'Innovation & Creativity': '76',
      'Customer Insights': '91',
      'Process Improvement': '54',
      'Leadership & Management': '85',
      'Customer Testing & Feedback': '99',
      'Company Culture': '63'
    },
    'Customer Success Team': {
      'Productivity & Focus': '61',
      'Company Collaboration': '73',
      'Project Management': '82',
      'Employee Engagement': '89',
      'Training & Development': '57',
      'Roadmap & Strategy': '64',
      'Innovation & Creativity': '79',
      'Customer Insights': '94',
      'Process Improvement': '58',
      'Leadership & Management': '67',
      'Customer Testing & Feedback': '93',
      'Company Culture': '72'
    },
    'Sales Team': {
      'Productivity & Focus': '74',
      'Company Collaboration': '89',
      'Project Management': '65',
      'Employee Engagement': '92',
      'Training & Development': '49',
      'Roadmap & Strategy': '53',
      'Innovation & Creativity': '88',
      'Customer Insights': '76',
      'Process Improvement': '61',
      'Leadership & Management': '84',
      'Customer Testing & Feedback': '94',
      'Company Culture': '90'
    },
    Interns: {
      'Productivity & Focus': '63',
      'Company Collaboration': '48',
      'Project Management': '70',
      'Employee Engagement': '59',
      'Training & Development': '77',
      'Roadmap & Strategy': '44',
      'Innovation & Creativity': '91',
      'Customer Insights': '85',
      'Process Improvement': '66',
      'Leadership & Management': '49',
      'Customer Testing & Feedback': '77',
      'Company Culture': '54'
    }
  },
  q2: {
    'All Teams': {
      'Productivity & Focus': '79',
      'Company Collaboration': '67',
      'Project Management': '35',
      'Employee Engagement': '93',
      'Training & Development': '58',
      'Roadmap & Strategy': '89',
      'Innovation & Creativity': '65',
      'Customer Insights': '96',
      'Process Improvement': '73',
      'Leadership & Management': '80',
      'Customer Testing & Feedback': '69',
      'Company Culture': '45'
    },
    'Product Team': {
      'Productivity & Focus': '53',
      'Company Collaboration': '77',
      'Project Management': '65',
      'Employee Engagement': '91',
      'Training & Development': '82',
      'Roadmap & Strategy': '46',
      'Innovation & Creativity': '77',
      'Customer Insights': '92',
      'Process Improvement': '55',
      'Leadership & Management': '86',
      'Customer Testing & Feedback': '98',
      'Company Culture': '64'
    },
    'Customer Success Team': {
      'Productivity & Focus': '62',
      'Company Collaboration': '74',
      'Project Management': '83',
      'Employee Engagement': '88',
      'Training & Development': '58',
      'Roadmap & Strategy': '65',
      'Innovation & Creativity': '78',
      'Customer Insights': '95',
      'Process Improvement': '57',
      'Leadership & Management': '68',
      'Customer Testing & Feedback': '94',
      'Company Culture': '73'
    },
    'Sales Team': {
      'Productivity & Focus': '75',
      'Company Collaboration': '90',
      'Project Management': '66',
      'Employee Engagement': '93',
      'Training & Development': '50',
      'Roadmap & Strategy': '54',
      'Innovation & Creativity': '89',
      'Customer Insights': '77',
      'Process Improvement': '60',
      'Leadership & Management': '85',
      'Customer Testing & Feedback': '95',
      'Company Culture': '91'
    },
    Interns: {
      'Productivity & Focus': '64',
      'Company Collaboration': '49',
      'Project Management': '71',
      'Employee Engagement': '60',
      'Training & Development': '76',
      'Roadmap & Strategy': '45',
      'Innovation & Creativity': '90',
      'Customer Insights': '86',
      'Process Improvement': '67',
      'Leadership & Management': '50',
      'Customer Testing & Feedback': '78',
      'Company Culture': '55'
    }
  },
  q3: {
    'All Teams': {
      'Productivity & Focus': '',
      'Company Collaboration': '69',
      'Project Management': '37',
      'Employee Engagement': '94',
      'Training & Development': '60',
      'Roadmap & Strategy': '91',
      'Innovation & Creativity': '67',
      'Customer Insights': '98',
      'Process Improvement': '75',
      'Leadership & Management': '82',
      'Customer Testing & Feedback': '71',
      'Company Culture': '49'
    },
    'Product Team': {
      'Productivity & Focus': '',
      'Company Collaboration': '79',
      'Project Management': '66',
      'Employee Engagement': '92',
      'Training & Development': '84',
      'Roadmap & Strategy': '47',
      'Innovation & Creativity': '78',
      'Customer Insights': '93',
      'Process Improvement': '56',
      'Leadership & Management': '87',
      'Customer Testing & Feedback': '97',
      'Company Culture': '65'
    },
    'Customer Success Team': {
      'Productivity & Focus': '63',
      'Company Collaboration': '75',
      'Project Management': '84',
      'Employee Engagement': '90',
      'Training & Development': '59',
      'Roadmap & Strategy': '66',
      'Innovation & Creativity': '80',
      'Customer Insights': '96',
      'Process Improvement': '59',
      'Leadership & Management': '69',
      'Customer Testing & Feedback': '94',
      'Company Culture': '74'
    },
    'Sales Team': {
      'Productivity & Focus': '76',
      'Company Collaboration': '91',
      'Project Management': '67',
      'Employee Engagement': '94',
      'Training & Development': '51',
      'Roadmap & Strategy': '55',
      'Innovation & Creativity': '89',
      'Customer Insights': '78',
      'Process Improvement': '62',
      'Leadership & Management': '86',
      'Customer Testing & Feedback': '96',
      'Company Culture': '92'
    },
    Interns: {
      'Productivity & Focus': '65',
      'Company Collaboration': '50',
      'Project Management': '72',
      'Employee Engagement': '61',
      'Training & Development': '78',
      'Roadmap & Strategy': '46',
      'Innovation & Creativity': '89',
      'Customer Insights': '87',
      'Process Improvement': '68',
      'Leadership & Management': '51',
      'Customer Testing & Feedback': '79',
      'Company Culture': '56'
    }
  },
  q4: {
    'All Teams': {
      'Productivity & Focus': '81',
      'Company Collaboration': '71',
      'Project Management': '39',
      'Employee Engagement': '95',
      'Training & Development': '62',
      'Roadmap & Strategy': '92',
      'Innovation & Creativity': '69',
      'Customer Insights': '99',
      'Process Improvement': '77',
      'Leadership & Management': '84',
      'Customer Testing & Feedback': '73',
      'Company Culture': '50'
    },
    'Product Team': {
      'Productivity & Focus': '55',
      'Company Collaboration': '80',
      'Project Management': '67',
      'Employee Engagement': '93',
      'Training & Development': '85',
      'Roadmap & Strategy': '48',
      'Innovation & Creativity': '79',
      'Customer Insights': '94',
      'Process Improvement': '57',
      'Leadership & Management': '88',
      'Customer Testing & Feedback': '98',
      'Company Culture': '66'
    },
    'Customer Success Team': {
      'Productivity & Focus': '64',
      'Company Collaboration': '76',
      'Project Management': '85',
      'Employee Engagement': '91',
      'Training & Development': '60',
      'Roadmap & Strategy': '67',
      'Innovation & Creativity': '81',
      'Customer Insights': '97',
      'Process Improvement': '60',
      'Leadership & Management': '71',
      'Customer Testing & Feedback': '95',
      'Company Culture': '75'
    },
    'Sales Team': {
      'Productivity & Focus': '77',
      'Company Collaboration': '92',
      'Project Management': '68',
      'Employee Engagement': '96',
      'Training & Development': '52',
      'Roadmap & Strategy': '56',
      'Innovation & Creativity': '90',
      'Customer Insights': '79',
      'Process Improvement': '63',
      'Leadership & Management': '87',
      'Customer Testing & Feedback': '97',
      'Company Culture': '93'
    },
    Interns: {
      'Productivity & Focus': '66',
      'Company Collaboration': '51',
      'Project Management': '73',
      'Employee Engagement': '62',
      'Training & Development': '79',
      'Roadmap & Strategy': '47',
      'Innovation & Creativity': '88',
      'Customer Insights': '88',
      'Process Improvement': '69',
      'Leadership & Management': '52',
      'Customer Testing & Feedback': '80',
      'Company Culture': '57'
    }
  }
};

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

export type SurveyData = Record<string, TeamData>;

export enum FeedbackName {
  PRODUCTIVITY_AND_FOCUS = 'productivity_and_focus',
  COMPANY_COLLABORATION = 'company_collaboration',
  PROJECT_MANAGEMENT = 'project_management',
  EMPLOYEE_ENGAGEMENT = 'employee_engagement',
  TRAINING_AND_DEVELOPMENT = 'training_and_development',
  INNOVATION_AND_CREATIVITY = 'innovation_and_creativity',
  CUSTOMER_INSIGHTS = 'customer_insights',
  PROCESS_IMPROVEMENT = 'process_improvement',
  LEADERSHIP_AND_MANAGEMENT = 'leadership_and_management',
  COMPANY_CULTURE = 'company_culture',
  ROADMAP_AND_STRATEGY = 'roadmap_and_strategy',
  CUSTOMER_TESTING_AND_FEEDBACK = 'customer_testing_and_feedback'
}

export const feedbackNamesEmoji = {
  [FeedbackName.PRODUCTIVITY_AND_FOCUS]: '🎯',
  [FeedbackName.COMPANY_COLLABORATION]: '🤝',
  [FeedbackName.PROJECT_MANAGEMENT]: '📋',
  [FeedbackName.EMPLOYEE_ENGAGEMENT]: '⚡️',
  [FeedbackName.TRAINING_AND_DEVELOPMENT]: '🎓',
  [FeedbackName.INNOVATION_AND_CREATIVITY]: '💡',
  [FeedbackName.CUSTOMER_INSIGHTS]: '🔍',
  [FeedbackName.PROCESS_IMPROVEMENT]: '🔧',
  [FeedbackName.LEADERSHIP_AND_MANAGEMENT]: '🧑‍💼',
  [FeedbackName.COMPANY_CULTURE]: '🏢',
  [FeedbackName.ROADMAP_AND_STRATEGY]: '🗺️',
  [FeedbackName.CUSTOMER_TESTING_AND_FEEDBACK]: '📣'
};

// prettier-ignore
export const capitalizedNameToFeedbackName: Record<string, FeedbackName> = {
  ['Productivity & Focus']: FeedbackName.PRODUCTIVITY_AND_FOCUS,
  ['Company Collaboration']: FeedbackName.COMPANY_COLLABORATION,
  ['Project Management']: FeedbackName.PROJECT_MANAGEMENT,
  ['Employee Engagement']: FeedbackName.EMPLOYEE_ENGAGEMENT,
  ['Training & Development']: FeedbackName.TRAINING_AND_DEVELOPMENT,
  ['Innovation & Creativity']: FeedbackName.INNOVATION_AND_CREATIVITY,
  ['Customer Insights']: FeedbackName.CUSTOMER_INSIGHTS,
  ['Process Improvement']: FeedbackName.PROCESS_IMPROVEMENT,
  ['Leadership & Management']: FeedbackName.LEADERSHIP_AND_MANAGEMENT,
  ['Company Culture']: FeedbackName.COMPANY_CULTURE,
  ['Roadmap & Strategy']: FeedbackName.ROADMAP_AND_STRATEGY,
  ['Customer Testing & Feedback']: FeedbackName.CUSTOMER_TESTING_AND_FEEDBACK
}

export const CellBox = styled(Paper)<
  PaperProps & { isLastRow?: boolean; isFirstColumn?: boolean }
>(({ theme, isLastRow, isFirstColumn }: any) => ({
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  textAlign: isFirstColumn ? 'left' : 'center',
  height: '48px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: isFirstColumn ? 'flex-start' : 'center',
  border: 'none',
  borderRight: `1px solid ${theme.palette.grey[300]}`,
  borderBottom: isLastRow ? 'none' : `1px solid ${theme.palette.grey[300]}`,
  borderRadius: 0,
  boxShadow: 'none',
  width: isFirstColumn ? '260px' : 'auto', // Set width for first column
  minWidth: isFirstColumn ? '260px' : 'auto'
}));

const RotatedCellBox = styled(Paper)(({ theme }: any) => ({
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  textAlign: 'center',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'center',
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none'
}));

const HeaderCell = styled(TableCell)(({ theme }: any) => ({
  padding: 0,
  borderBottom: `1px solid ${theme.palette.grey[300]}`,
  borderRight: 'none',
  height: '40px'
}));

const RotatedHeaderCell = styled(TableCell)(({ theme }: any) => ({
  padding: 0,
  borderBottom: `1px solid ${theme.palette.grey[300]}`,
  borderRight: 'none',
  height: '40px'
}));

export const DataCell = styled(TableCell)<{ isLastRow?: boolean }>(
  ({ theme, isLastRow }: any) => ({
    padding: 0,
    borderBottom: 'none',
    borderRight: 'none',
    height: '48px'
  })
);

export const TeamHeaderCell = styled(HeaderCell)(({ theme }: any) => ({
  minWidth: '260px', // Always maintain a minimum width of 200px
  width: '260px', // Fix the width at 200px
  '@media (max-width: 1499px)': {
    position: 'sticky',
    left: 0,
    zIndex: 3,
    backgroundColor: theme.palette.background.paper
  },
  '& > div': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    textAlign: 'left',
    width: '100%',
    padding: `0 ${theme.spacing(1)}`,
    paddingTop: theme.spacing(2),
    height: '40px'
  }
}));

export const TeamDataCell = styled(DataCell)(({ theme, isLastRow }: any) => ({
  minWidth: '260px', // Always maintain a minimum width of 200px
  width: '260px', // Fix the width at 200px
  '@media (max-width: 1499px)': {
    position: 'sticky',
    left: 0,
    zIndex: 2,
    backgroundColor: theme.palette.background.paper
  },
  borderRight: `1px solid ${theme.palette.grey[300]}`,
  '& > div': {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    textAlign: 'left',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    borderRight: 'none',
    borderBottom: isLastRow ? 'none' : `1px solid ${theme.palette.grey[300]}`
  }
}));

export const ShadowOverlay = styled('div')(({ theme }: any) => ({
  display: 'none', // Hide by default
  '@media (max-width: 1499px)': {
    display: 'block', // Only show below 1500px
    position: 'absolute',
    top: '40px', // Below the header
    left: '300px', // Exactly after the first column's fixed width
    bottom: 0,
    width: '8px',
    background: `linear-gradient(to right, ${theme.palette.grey[300]}33, transparent)`,
    pointerEvents: 'none',
    zIndex: 1
  }
}));

const DraggableTableRow = styled(TableRow)<{ dragEnabled: boolean }>(
  ({ dragEnabled }) => ({
    cursor: dragEnabled ? 'move' : 'default'
  })
);

export const getScoreColor = (score: Score, theme: Theme): string => {
  const numericScore = parseInt(score, 10);
  if (score === '00' || score === '0') return theme.palette.error[300];
  if (score === 'NA' || !score) return theme.palette.grey[50];
  if (numericScore < 55) return theme.palette.error[100];
  if (numericScore < 60) return theme.palette.warning[100];
  if (numericScore < 70) return theme.palette.warning[300];
  if (numericScore < 90) return theme.palette.success[100];
  return theme.palette.success[300];
};

interface DraggableRowProps {
  dragEnabled: boolean;
  index: number;
  moveRow?: (dragIndex: number, hoverIndex: number) => void;
  children: React.ReactNode;
  isLastRow?: boolean;
}

export const DraggableRow = ({
  dragEnabled = true,
  index,
  moveRow,
  children,
  isLastRow = false
}: DraggableRowProps) => {
  const ref = useRef<HTMLTableRowElement>(null);
  const [, drop] = useDrop({
    accept: 'row',
    hover(item: { index: number }, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      moveRow?.(dragIndex, hoverIndex);
      item.index = hoverIndex;
    }
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'row',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  drag(drop(ref));

  return (
    <DraggableTableRow
      ref={ref}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      dragEnabled={dragEnabled}
    >
      {children}
    </DraggableTableRow>
  );
};

interface DraggableHeaderCellProps {
  category: Category;
  index: number;
  moveColumn?: (dragIndex: number, hoverIndex: number) => void;
  theme: Theme;
}

export const DraggableHeaderCell = ({
  category,
  index,
  moveColumn,
  theme
}: DraggableHeaderCellProps) => {
  const ref = useRef<HTMLTableCellElement>(null);
  const [, drop] = useDrop({
    accept: 'column',
    hover(item: { index: number }, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      moveColumn?.(dragIndex, hoverIndex);
      item.index = hoverIndex;
    }
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'column',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  drag(drop(ref));

  const icon: any = feedbackNamesEmoji[capitalizedNameToFeedbackName[category]];

  return (
    <RotatedHeaderCell ref={ref} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <RotatedCellBox sx={{ gap: 1 }}>
        <Tooltip title={category}>
          <Avatar sx={{ width: 24, height: 24, bgcolor: 'transparent' }}>
            {icon}
          </Avatar>
        </Tooltip>
      </RotatedCellBox>
    </RotatedHeaderCell>
  );
};
