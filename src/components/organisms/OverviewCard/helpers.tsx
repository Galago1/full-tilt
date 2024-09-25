import {
  Grid,
  Paper,
  TableCell,
  TableRow,
  Theme,
  Typography
} from '@mui/material';
import { styled } from '@mui/system';
import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import {
  CheckVerifiedIcon,
  FaceSmileIcon,
  HeartIcon,
  LayersTwo01Icon,
  ListIcon,
  MessageSmileCircleIcon,
  PaletteIcon,
  RouteIcon,
  RulerIcon,
  Target04Icon,
  TrendUp01Icon,
  Users03Icon
} from 'src/components/particles/theme/overrides/CustomIcons';

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

const RotatedTypography = styled(Typography)(({ theme }) => ({
  writingMode: 'vertical-rl',
  textOrientation: 'mixed',
  transform: 'rotate(180deg)',
  whiteSpace: 'nowrap',
  variant: 'textSmMedium',
  [theme.breakpoints.down('sm')]: {
    writingMode: 'horizontal-tb',
    transform: 'none'
  }
}));

const IconWrapper = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '40px'
});

export const CellBox = styled(Paper)(({ theme }) => ({
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  textAlign: 'center',
  height: '44px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid #e0e0e0',
  borderRadius: '8px',
  boxShadow: 'none'
}));

const RotatedCellBox = styled(Paper)(({ theme }) => ({
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  textAlign: 'center',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'center',
  border: '1px solid #e0e0e0',
  borderRadius: '8px',
  boxShadow: 'none'
}));

const HeaderCell = styled(TableCell)({
  padding: 4,
  borderBottom: 'none',
  height: '44px'
});

const RotatedHeaderCell = styled(TableCell)({
  padding: 4,
  borderBottom: 'none',
  height: '200px'
});

export const DataCell = styled(TableCell)({
  padding: 4,
  borderBottom: 'none',
  height: '44px'
});

export const TeamHeaderCell = styled(HeaderCell)(({ theme }) => ({
  '& > div': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    textAlign: 'left',
    width: '100%',
    padding: `0 ${theme.spacing(1)}`,
    paddingTop: theme.spacing(2)
  }
}));

export const TeamDataCell = styled(DataCell)({
  '& > div': {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    textAlign: 'left',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
});

const DraggableTableRow = styled(TableRow)({
  cursor: 'move'
});

export const getScoreColor = (score: Score, theme: Theme): string => {
  const numericScore = parseInt(score, 10);
  if (score === '00' || score === '0') return theme.palette.error[300];
  if (numericScore < 55) return theme.palette.error[100];
  if (numericScore < 60) return theme.palette.warning[100];
  if (numericScore < 70) return theme.palette.warning[300];
  if (numericScore < 90) return theme.palette.success[100];
  return theme.palette.success[300];
};

interface DraggableRowProps {
  index: number;
  moveRow?: (dragIndex: number, hoverIndex: number) => void;
  children: React.ReactNode;
}

export const DraggableRow = ({
  index,
  moveRow,
  children
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
    <DraggableTableRow ref={ref} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {children}
    </DraggableTableRow>
  );
};

const categoryIcons = {
  'Productivity & Focus': CheckVerifiedIcon,
  'Company Collaboration': Users03Icon,
  'Project Management': ListIcon,
  'Employee Engagement': MessageSmileCircleIcon,
  'Training & Development': TrendUp01Icon,
  'Roadmap & Strategy': Target04Icon,
  'Innovation & Creativity': PaletteIcon,
  'Customer Insights': FaceSmileIcon,
  'Process Improvement': RouteIcon,
  'Leadership & Management': LayersTwo01Icon,
  'Customer Testing & Feedback': RulerIcon,
  'Company Culture': HeartIcon
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

  const IconComponent = categoryIcons[category] || Users03Icon;

  return (
    <RotatedHeaderCell ref={ref} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <RotatedCellBox
        sx={{ padding: `${theme.spacing(2)} ${theme.spacing(1)}` }}
      >
        <RotatedTypography variant="body2">{category}</RotatedTypography>
        <IconWrapper>
          <IconComponent sx={{ color: theme.palette.grey[900] }} />
        </IconWrapper>
      </RotatedCellBox>
    </RotatedHeaderCell>
  );
};

export const getQuarterSpan = (quarter: 'Q1' | 'Q2' | 'Q3' | 'Q4'): string => {
  const quarterSpans: Record<'Q1' | 'Q2' | 'Q3' | 'Q4', string> = {
    Q1: 'Jan-Mar',
    Q2: 'Apr-Jun',
    Q3: 'Jul-Sep',
    Q4: 'Oct-Dec'
  };
  return quarterSpans[quarter];
};
