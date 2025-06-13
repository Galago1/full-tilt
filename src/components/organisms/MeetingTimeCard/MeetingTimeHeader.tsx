import {
  Box,
  Grid,
  GridProps,
  IconButton,
  Typography,
  TypographyProps
} from '@mui/material';
import Button, { ButtonProps } from 'src/components/atoms/Button/Button';
import { PauseSquareIcon } from 'src/components/particles/theme/icons/MediaAndDevices/pause-square';
import { PlaySquareIcon } from 'src/components/particles/theme/icons/MediaAndDevices/play-square';
import { SkipBackIcon } from 'src/components/particles/theme/icons/MediaAndDevices/skip-back';
import { SkipForwardIcon } from 'src/components/particles/theme/icons/MediaAndDevices/skip-forward';

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
  slots?: {
    headerTypographyProps?: TypographyProps;
  };
  endComponent?: JSX.Element;
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
  slots,
  endComponent,
  ...props
}: MeetingTimeHeaderProps) => {
  const { headerTypographyProps } = slots || {};
  return (
    <Grid
      container
      display={'flex'}
      alignItems={'center'}
      marginBottom={1}
      {...props}
    >
      <Grid item flex={1}>
        <Typography
          variant="textMdRegular"
          component="div"
          {...headerTypographyProps}
        >
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
      {endComponent && <Grid item>{endComponent}</Grid>}
    </Grid>
  );
};

export default MeetingTimeHeader;
