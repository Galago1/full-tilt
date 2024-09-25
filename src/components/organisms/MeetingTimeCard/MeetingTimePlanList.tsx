import { Grid, GridProps, Typography, useTheme } from '@mui/material';
import { formatTime } from './helpers';
import { MeetingDurationItem, PlanItem } from '.';
import { Divider } from 'src/components/atoms';

const showElaspedTime = (
  item: PlanItem,
  currentId: string,
  currentIndex: number,
  index: number,
  elapsedTimes: MeetingDurationItem,
  furthestIndex: number
): boolean => {
  if (!currentId || !item) return false;
  if (
    elapsedTimes[item.id] &&
    elapsedTimes[item.id] !== 0 &&
    currentId !== item.id
  )
    return true;
  if (furthestIndex > index && currentIndex !== index) return true;
  if (currentIndex > index) return true;
  return false;
};

interface ElapsedTimesProps {
  item: PlanItem;
  currentId: string;
  currentIndex: number;
  index: number;
  elapsedTimes: MeetingDurationItem;
  furthestIndex: number;
}
const ElapsedTimes = ({
  item,
  currentId,
  currentIndex,
  index,
  elapsedTimes,
  furthestIndex,
  ...props
}: ElapsedTimesProps) => {
  if (
    !showElaspedTime(
      item,
      currentId,
      currentIndex,
      index,
      elapsedTimes,
      furthestIndex
    )
  )
    return null;
  return (
    <Grid item {...props}>
      <Typography
        variant="textSmRegular"
        color={'text.secondary'}
        sx={{
          textAlign: 'right',
          color: 'text.secondary'
        }}
      >
        ({formatTime(elapsedTimes[item.id])})
      </Typography>
    </Grid>
  );
};

interface PlanItemRowProps {
  planItem: PlanItem;
  index: number;
  currentId: string;
  currentIndex: number;
  handleClick: (id: string) => void;
  currentItemElapsedTime: number;
  elapsedTimes: MeetingDurationItem;
  furthestIndex: number;
  showElapsedTime: boolean;
}

const PlanItemRow = ({
  planItem: item,
  index,
  currentId,
  currentIndex,
  handleClick,
  currentItemElapsedTime,
  elapsedTimes,
  furthestIndex,
  showElapsedTime
}: PlanItemRowProps) => {
  const theme = useTheme();
  const isOver = elapsedTimes[currentId] > item.value;
  console.log('showElapsedTime', showElapsedTime);
  return (
    <Grid
      container
      key={index}
      sx={{
        backgroundColor: item.id === currentId ? 'grey.50' : 'inherit',
        p: 1,
        borderRadius: theme.borderRadius.sm,
        cursor: 'pointer',
        my: 'auto'
      }}
      onClick={() => handleClick(item.id)}
    >
      <Grid item flex={1}>
        <Typography variant="textSmMedium">{item.name}</Typography>
      </Grid>

      {showElapsedTime && (
        <ElapsedTimes
          currentId={currentId}
          currentIndex={currentIndex}
          index={index}
          elapsedTimes={elapsedTimes}
          furthestIndex={furthestIndex}
          item={item}
        />
      )}

      {showElapsedTime && item.id === currentId && (
        <Grid item>
          <Typography
            variant="textSmMedium"
            color={'text.secondary'}
            sx={{
              textAlign: 'right',
              color: isOver ? 'error.main' : 'text.secondary'
            }}
          >
            {formatTime(currentItemElapsedTime)}
          </Typography>
        </Grid>
      )}
      <Grid item sx={{ ml: 1 }}>
        <Typography
          variant="textSmMedium"
          color={'text.secondary'}
          sx={{ textAlign: 'right' }}
        >
          {item.duration}
        </Typography>
      </Grid>
    </Grid>
  );
};

export interface MeetingTimePlanListProps extends GridProps {
  planItems?: PlanItem[];
  currentId?: string;
  currentIndex?: number;
  handleClick?: (id: string) => void;
  currentItemElapsedTime?: number;
  elapsedTimes?: MeetingDurationItem;
  furthestIndex?: number;
  showElapsedTime?: boolean;
}
const MeetingTimePlanList = ({
  planItems = [],
  currentId,
  currentIndex,
  handleClick,
  currentItemElapsedTime,
  elapsedTimes,
  furthestIndex,
  showElapsedTime = true,
  ...props
}: MeetingTimePlanListProps) => {
  return (
    <Grid container flexDirection={'column'} gap={1} {...props}>
      <Grid item flex={1}>
        {planItems.map((item, index) => (
          <PlanItemRow
            planItem={item}
            index={index}
            currentId={currentId!}
            currentIndex={currentIndex!}
            handleClick={handleClick!}
            currentItemElapsedTime={currentItemElapsedTime!}
            elapsedTimes={elapsedTimes!}
            furthestIndex={furthestIndex!}
            key={index}
            showElapsedTime={showElapsedTime}
          />
        ))}
      </Grid>
      <Grid item>
        <Divider />
      </Grid>
    </Grid>
  );
};

export default MeetingTimePlanList;
