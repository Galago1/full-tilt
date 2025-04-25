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
import { CardProps } from 'src/components/organisms/Card/Card';
import { SwitchHorizontal01Icon } from 'src/components/particles/theme/icons/Arrows/switch-horizontal-01';
import { SwitchVertical02Icon } from 'src/components/particles/theme/icons/Arrows/switch-vertical-02';
import { Quarter } from 'src/types/other';
import {
  CellBox,
  DataCell,
  DraggableHeaderCell,
  DraggableRow,
  getScoreColor,
  ShadowOverlay,
  SurveyData,
  TeamDataCell,
  TeamHeaderCell
} from './helpers';
import { useOverviewCard } from './useOverviewCard';

export interface OverviewCardProps {
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
  /**
   * Whether to show the header
   */
  showHeader?: boolean;
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
  showHeader = true
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
    <DndProvider backend={HTML5Backend}>
      <Grid sx={{ position: 'relative', overflow: 'hidden' }}>
        <TableContainer
          component={Paper}
          elevation={0}
          sx={{
            position: 'relative',
            overflow: 'hidden',
            '& .MuiTable-root': {
              borderCollapse: 'collapse',
              // Only apply scroll behavior below 1500px
              '@media (max-width: 1499px)': {
                display: 'block',
                overflowX: 'auto'
              },
              // Above 1500px, maintain normal table layout
              '@media (min-width: 1500px)': {
                display: 'table',
                overflowX: 'visible'
              }
            }
          }}
          {...tableContainerProps}
        >
          <Table
            size="small"
            sx={{
              tableLayout: 'fixed',
              '@media (max-width: 1499px)': {
                minWidth: '1100px', // Force horizontal scrolling below 1500px
                // This calculation ensures content after the first column is at least 900px
                // so 200px (first column) + 900px = 1100px minimum total width
                '& td:not(:first-child), & th:not(:first-child)': {
                  minWidth: '100px' // Set minimum width for non-first columns
                },
                '& td:first-child, & th:first-child': {
                  width: '260px',
                  minWidth: '260px'
                }
              },
              '@media (min-width: 1500px)': {
                width: '100%', // Full width above 1500px
                '& td:first-child, & th:first-child': {
                  width: '260px',
                  minWidth: '260px'
                }
              }
            }}
          >
            <TableHead
              sx={{
                position: 'sticky',
                top: 0,
                zIndex: 2,
                backgroundColor: (theme) => theme.palette.background.paper
              }}
            >
              <TableRow>
                <TeamHeaderCell>
                  <Grid
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-end',
                      width: '100%',
                      height: '100%',
                      border: 'unset',
                      borderRadius: 'unset'
                    }}
                  >
                    <Grid
                      display={'flex'}
                      width={'100%'}
                      justifyContent={'space-between'}
                      p={1}
                      sx={{ pl: 2 }}
                    >
                      <Typography
                        variant="textSmRegular"
                        color="text.secondary"
                        fontWeight={500}
                      >
                        Team Results
                      </Typography>
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
                  isLastRow={index === teamNames.length - 1}
                >
                  <TeamDataCell isLastRow={index === teamNames.length - 1}>
                    <CellBox
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center !important',
                        pl: 3
                      }}
                    >
                      <Typography variant="textSmMedium">{teamName}</Typography>
                    </CellBox>
                  </TeamDataCell>
                  {categories.map((category) => (
                    <DataCell
                      key={category}
                      isLastRow={index === teamNames.length - 1}
                    >
                      <CellBox
                        style={{
                          backgroundColor: getScoreColor(
                            currentData[teamName][category],
                            theme
                          )
                        }}
                        isLastRow={index === teamNames.length - 1}
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
          <ShadowOverlay theme={theme} />
        </TableContainer>
      </Grid>
    </DndProvider>
  );
};

export default OverviewCard;
