import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
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
  SwitchHorizontal01Icon,
  SwitchVertical02Icon
} from 'src/components/particles/theme/overrides/CustomIcons';
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
import { Quarter } from 'src/types/other';

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
  selectedQuarter: Quarter;
  /**
   * Function to call when the quarter is changed
   * @param quarter
   * @returns
   */
  onQuarterChange: (quarter: Quarter) => void;
  /**
   * Props for the middle button
   */
  middleButtonProps: ButtonProps;
  /**
   * Whether dragging of rows and columns is disabled
   */
  disableDragging?: boolean;

  slots?: {
    tableContainerProps: TableContainerProps;
  };

  cardSlots?: CardProps['slots'];
}

const OverviewCard = ({
  data,
  showSwitches,
  selectedQuarter,
  onQuarterChange,
  middleButtonProps,
  disableDragging = false, // default is false, enabling dragging
  slots,
  cardSlots,
  ...props
}: OverviewCardProps) => {
  const {
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
    tableContainerProps,
    theme
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
              Survey Overview
            </Typography>
          </Grid>
          <Grid item>
            <ButtonGroup
              customVariant="roundedEdges"
              buttons={[
                {
                  endIcon: <ArrowBackIosNewIcon />,
                  onClick: () => handleQuarterChange('left'),
                  disabled: currentQuarterIndex === 0
                },
                {
                  startIcon: <CalendarIcon />,
                  label: `${selectedQuarter} ${new Date().getFullYear()} (${getQuarterSpan(
                    selectedQuarter
                  )})`,
                  disabled: true,
                  sx: { '&': { py: 9 / 8 } },
                  ...middleButtonProps
                },
                {
                  endIcon: <ArrowForwardIosIcon />,
                  onClick: () => handleQuarterChange('right'),
                  disabled: currentQuarterIndex === quarters.length - 1
                }
              ]}
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
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px'
                      }}
                    >
                      <Grid
                        display={'flex'}
                        width={'100%'}
                        justifyContent={'space-between'}
                        p={`${theme.spacing(3)} ${theme.spacing(1)}`}
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
