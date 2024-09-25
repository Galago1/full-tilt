import { Box, Grid, GridProps, IconButton, Typography } from '@mui/material';
import {
  PauseSquareIcon,
  PlaySquareIcon,
  SkipBackIcon,
  SkipForwardIcon
} from 'src/components/particles/theme/overrides/CustomIcons';

export interface MeetingTimeHeaderProps extends GridProps {
  handleBack?: () => void;
  currentIndex?: number;
  handlePlayPause?: () => void;
  totalElapsedTime?: number;
  isRunning?: boolean;
  handleNext?: () => void;
  planItemsLength?: number;
  disablePlayPause?: boolean;
  showActions?: boolean;
}
const MeetingTimeHeader = ({
  handleBack,
  currentIndex,
  handlePlayPause,
  totalElapsedTime,
  isRunning,
  handleNext,
  planItemsLength,
  disablePlayPause,
  showActions = true,
  ...props
}: MeetingTimeHeaderProps) => {
  return (
    <Grid
      container
      display={'flex'}
      alignItems={'center'}
      marginBottom={2}
      {...props}
    >
      <Grid item flex={1}>
        <Typography variant="textLgSemibold" component="div">
          Agenda
        </Typography>
      </Grid>
      {showActions && (
        <Grid item>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <IconButton onClick={handleBack} disabled={currentIndex === 0}>
              <SkipBackIcon sx={{ width: 20 }} />
            </IconButton>
            <IconButton onClick={handlePlayPause} disabled={disablePlayPause}>
              {isRunning ? (
                <PauseSquareIcon sx={{ width: 20 }} />
              ) : (
                <PlaySquareIcon sx={{ width: 20 }} />
              )}
            </IconButton>
            <IconButton
              onClick={handleNext}
              disabled={currentIndex === planItemsLength! - 1}
            >
              <SkipForwardIcon sx={{ width: 20 }} />
            </IconButton>
          </Box>
        </Grid>
      )}
    </Grid>
  );
};

export default MeetingTimeHeader;
