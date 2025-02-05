import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableContainerProps,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ButtonProps } from 'src/components/atoms/Button/Button';
import ButtonGroup from 'src/components/molecules/ButtonGroup/ButtonGroup';
import Card, { CardProps } from 'src/components/organisms/Card/Card';
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  SwitchHorizontal01Icon,
  SwitchVertical02Icon
} from 'src/components/particles/theme/overrides/CustomIcons';
import { Quarter } from 'src/types/other';
import Divider from '../../atoms/Divider';
import {
  CellBox,
  DataCell,
  DraggableHeaderCell,
  DraggableRow,
  getQuarterSpan,
  getScoreColor,
  SurveyData,
  TeamDataCell,
  TeamHeaderCell
} from './helpers';
import { useOverviewCard } from './useOverviewCard';

interface QuarterInfo {
  label: string;
}

const QUARTERS: Record<Quarter, QuarterInfo> = {
  q1: { label: 'Q1' },
  q2: { label: 'Q2' },
  q3: { label: 'Q3' },
  q4: { label: 'Q4' }
};

interface QuarterSelectorProps {
  selectedQuarter: Quarter;
  year: number;
  fiscalYearStartDate: Date;
  onQuarterChange: (direction: 'left' | 'right') => void;
  middleButtonProps?: ButtonProps;
}

const formatQuarterLabel = (
  quarter: Quarter | undefined,
  year: number | undefined,
  fiscalYearStartDate: Date | undefined
): string => {
  if (!quarter || !year || !fiscalYearStartDate) {
    return 'Select Quarter';
  }

  const quarterInfo = QUARTERS[quarter];
  if (!quarterInfo) {
    return 'Invalid Quarter';
  }

  try {
    // Create a new date for this year but keeping the fiscal month/day
    const fiscalYear = new Date(
      year,
      fiscalYearStartDate.getMonth(),
      fiscalYearStartDate.getDate()
    );
    return `${quarterInfo.label} ${year} (${getQuarterSpan(
      quarter,
      fiscalYear
    )})`;
  } catch (error) {
    return `${quarterInfo.label} ${year}`;
  }
};

const QuarterSelector = ({
  selectedQuarter,
  year,
  fiscalYearStartDate,
  onQuarterChange,
  middleButtonProps
}: QuarterSelectorProps) => (
  <ButtonGroup
    customVariant="roundedEdges"
    buttons={[
      {
        endIcon: <ChevronLeftIcon />,
        onClick: () => onQuarterChange('left'),
        disabled: false
      },
      {
        startIcon: <CalendarIcon />,
        label: formatQuarterLabel(selectedQuarter, year, fiscalYearStartDate),
        disabled: true,
        sx: { '&': { py: 9 / 8 } },
        ...middleButtonProps
      },
      {
        endIcon: <ChevronRightIcon />,
        onClick: () => onQuarterChange('right'),
        disabled: false
      }
    ]}
  />
);

export interface OverviewCardProps extends Omit<CardProps, 'slots'> {
  /**
   * Data for the survey overview card
   */
  data: Record<Quarter, SurveyData>;
  /**
   * Whether to show the vertical and horizontal switches
   */
  showSwitches: boolean;
  /**
   * The currently selected quarter
   */
  selectedQuarter?: Quarter;
  /**
   * Function to call when the quarter is changed
   * @param direction - 'left' for previous quarter, 'right' for next quarter
   */
  onQuarterChange?: (quarter: Quarter) => void;
  /**
   * Props for the middle button
   */
  middleButtonProps?: ButtonProps;
  /**
   * Whether dragging of rows and columns is disabled
   */
  disableDragging?: boolean;

  slots?: {
    tableContainerProps: TableContainerProps;
  };

  cardSlots?: CardProps['slots'];
  /**
   * The year to display, defaults to current year
   */
  year?: number;
  /**
   * The fiscal year start date (e.g., new Date(2025, 6, 1) for July 1st fiscal year)
   * Defaults to January 1st of the current year
   */
  fiscalYearStartDate?: Date;
}

const OverviewCard = ({
  data,
  showSwitches,
  selectedQuarter = 'q1',
  onQuarterChange = () => {},
  middleButtonProps,
  disableDragging = false,
  slots,
  cardSlots,
  year = new Date().getFullYear(),
  fiscalYearStartDate = new Date(new Date().getFullYear(), 0, 1),
  ...props
}: OverviewCardProps) => {
  const {
    currentData,
    teamNames,
    categories,
    handleQuarterChange,
    handleVerticalIconClick,
    handleHorizontalIconClick,
    moveRow,
    moveColumn,
    theme,
    tableContainerProps
  } = useOverviewCard({
    data,
    selectedQuarter,
    onQuarterChange,
    slots: slots!
  });

  return (
    <Card
      sx={{
        width: '100%',
        overflowX: 'auto',
        border: theme.border.basicBox,
        borderRadius: theme.borderRadius.lg,
        ...props.sx
      }}
      showActions={false}
      slots={cardSlots}
      {...props}
    >
      <>
        <Grid container alignItems="center" mb={2}>
          <Grid item flex={1}>
            <Typography variant="textLgSemibold" noWrap>
              Feedback Overview
            </Typography>
          </Grid>
          <Grid item>
            <QuarterSelector
              selectedQuarter={selectedQuarter}
              year={year}
              fiscalYearStartDate={fiscalYearStartDate}
              onQuarterChange={handleQuarterChange}
              middleButtonProps={middleButtonProps}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: theme.spacing(2.5) }} />
        <DndProvider backend={HTML5Backend}>
          <TableContainer
            component={Paper}
            elevation={0}
            {...tableContainerProps}
          >
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TeamHeaderCell>
                    <Grid
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        width: '100%',
                        height: '100%',
                        border: theme.border.basicBox,
                        borderRadius: theme.borderRadius.md
                      }}
                    >
                      <Grid
                        display={'flex'}
                        width={'100%'}
                        justifyContent={'space-between'}
                        p={1}
                      >
                        <Typography variant="textSmMedium">Teams</Typography>
                        {showSwitches && (
                          <Grid display={'flex'}>
                            <SwitchVertical02Icon
                              onClick={handleVerticalIconClick}
                              style={{
                                cursor: 'pointer',
                                width: '24px',
                                height: '24px',
                                marginRight: theme.spacing(1)
                              }}
                            />
                            <SwitchHorizontal01Icon
                              onClick={handleHorizontalIconClick}
                              style={{
                                cursor: 'pointer',
                                width: '24px',
                                height: '24px'
                              }}
                            />
                          </Grid>
                        )}
                      </Grid>
                    </Grid>
                  </TeamHeaderCell>
                  {categories.map((category, index) => (
                    <DraggableHeaderCell
                      key={category}
                      category={category}
                      index={index}
                      moveColumn={disableDragging ? undefined : moveColumn}
                      theme={theme}
                    />
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {teamNames.map((teamName, index) => (
                  <DraggableRow
                    key={teamName}
                    index={index}
                    moveRow={disableDragging ? undefined : moveRow}
                    dragEnabled={!disableDragging}
                  >
                    <TeamDataCell>
                      <CellBox
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center !important'
                        }}
                      >
                        <Typography variant="textSmMedium">
                          {teamName}
                        </Typography>
                      </CellBox>
                    </TeamDataCell>
                    {categories.map((category) => (
                      <DataCell key={category}>
                        <CellBox
                          style={{
                            backgroundColor: getScoreColor(
                              currentData[teamName][category],
                              theme
                            )
                          }}
                        >
                          <Typography variant="textSmRegular">
                            {!currentData[teamName][category]
                              ? 'NA'
                              : currentData[teamName][category]}
                          </Typography>
                        </CellBox>
                      </DataCell>
                    ))}
                  </DraggableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DndProvider>
      </>
    </Card>
  );
};

export default OverviewCard;
