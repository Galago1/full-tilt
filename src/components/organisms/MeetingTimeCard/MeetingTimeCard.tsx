import { Grid, GridProps } from '@mui/material';
import { forwardRef, useEffect, useImperativeHandle, useMemo } from 'react';
import { Divider } from 'src/components/atoms';
import { MeetingDurationItem, PlanItem } from '.';
import Card from '../Card';
import { CardProps } from '../Card/Card';
import { useMeetingTimeCard } from './hooks';
import MeetingTimeFooter, { MeetingTimeFooterProps } from './MeetingTimeFooter';
import MeetingTimeHeader, { MeetingTimeHeaderProps } from './MeetingTimeHeader';
import MeetingTimePlanList, {
  MeetingTimePlanListProps
} from './MeetingTimePlanList';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';

export interface MeetingTimeCardProps {
  'data-testid'?: string;
  /**
   * The plan items to display
   */
  planItems: PlanItem[];
  /**
   * The initial elapsed times
   */
  initialElapsedTimes?: MeetingDurationItem;
  /**
   * Callback when the elapsed times change
   * @param elapsedTimes
   * @param currentItem
   * @returns
   */
  onElapsedTimesChange?: (
    elapsedTimes: MeetingDurationItem,
    currentItem: PlanItem
  ) => void;
  /**
   * Callback when the back button is clicked
   * @param item
   */
  handleBackCb?: (item: PlanItem) => void;
  /**
   * Callback when the next button is clicked
   * @param item
   * @returns
   */
  handleNextCb?: (item: PlanItem) => void;
  /**
   * Callback when the play/pause button is clicked
   * @param isRunning
   * @returns
   */
  handlePlayPauseCb?: (isRunning: boolean) => void;
  /**
   * Callback when a plan item is clicked
   * @param index
   * @returns
   */
  handleClickCb?: (index: string) => void;
  slots?: {
    cardProps?: CardProps;
    meetingTimeFooterProps?: MeetingTimeFooterProps;
    gridContainerProps?: GridProps;
    gridItemHeaderProps?: GridProps;
    gridItemPlanListProps?: GridProps;
    gridItemFooterProps?: GridProps;
    meetingTimePlanListProps?: MeetingTimePlanListProps;
    meetingTimeHeaderProps?: MeetingTimeHeaderProps;
  };
}

const MeetingTimeCard = forwardRef(
  (
    {
      planItems,
      initialElapsedTimes,
      onElapsedTimesChange,
      handleBackCb,
      handleNextCb,
      handlePlayPauseCb,
      handleClickCb,
      slots,
      ...props
    }: MeetingTimeCardProps,
    ref
  ) => {
    const {
      cardProps,
      meetingTimeFooterProps,
      gridContainerProps,
      gridItemHeaderProps,
      gridItemPlanListProps,
      gridItemFooterProps,
      meetingTimePlanListProps,
      meetingTimeHeaderProps
    } = slots || {};
    const {
      currentId,
      isRunning,
      currentItem,
      currentItemElapsedTime,
      totalElapsedTime,
      elapsedTimes,
      currentIndex,
      furthestIndex,
      setElapsedTimes,
      handleNext,
      handleBack,
      handlePlayPause,
      handleClick
    } = useMeetingTimeCard(
      planItems,
      initialElapsedTimes,
      handleBackCb,
      handleNextCb,
      handlePlayPauseCb,
      handleClickCb
    );

    useImperativeHandle(ref, () => ({
      getCardData: () => ({
        currentId,
        isRunning,
        currentItem,
        currentItemElapsedTime,
        totalElapsedTime,
        elapsedTimes,
        furthestIndex,
        currentIndex,
        setElapsedTimes,
        handleNext,
        handleBack,
        handlePlayPause,
        handleClick
      })
    }));

    useEffect(() => {
      if (onElapsedTimesChange) {
        onElapsedTimesChange(elapsedTimes, currentItem);
      }
    }, [elapsedTimes, onElapsedTimesChange]);

    const determineFirstStep = () => {
      if (totalElapsedTime === 0) {
        return 0;
      }
      return currentIndex + 1;
    };

    const currentStep = useMemo(
      () => determineFirstStep(),
      [totalElapsedTime, currentIndex]
    );
    return (
      <Card
        showActions={false}
        {...cardProps}
        data-testid={props['data-testid']}
      >
        <Grid
          container
          flexDirection={'column'}
          gap={responsiveSpacing}
          {...gridContainerProps}
        >
          <Grid item {...gridItemHeaderProps}>
            <MeetingTimeHeader
              {...meetingTimeHeaderProps!}
              handleBack={handleBack}
              currentIndex={currentIndex}
              handlePlayPause={handlePlayPause}
              totalElapsedTime={totalElapsedTime}
              isRunning={isRunning}
              handleNext={handleNext}
              planItemsLength={planItems.length}
            />
            <Divider sx={{ marginBottom: 0 }} />
          </Grid>
          <Grid item {...gridItemPlanListProps}>
            <MeetingTimePlanList
              planItems={planItems}
              currentId={currentId}
              currentIndex={currentIndex}
              handleClick={handleClick}
              currentItemElapsedTime={currentItemElapsedTime}
              elapsedTimes={elapsedTimes}
              furthestIndex={furthestIndex}
              {...meetingTimePlanListProps}
            />
          </Grid>
          <Grid item {...gridItemFooterProps}>
            <MeetingTimeFooter
              totalElapsedTime={totalElapsedTime}
              currentStep={currentStep}
              totalSteps={planItems.length}
              {...meetingTimeFooterProps}
            />
          </Grid>
        </Grid>
      </Card>
    );
  }
);
MeetingTimeCard.displayName = 'MeetingTimeCard';

export default MeetingTimeCard;
