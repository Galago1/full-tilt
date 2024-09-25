import { Box, Typography, useTheme } from '@mui/material';
import { formatTime } from './helpers';
import LinearProgressBar, {
  LinearProgressProps
} from 'src/components/atoms/LinearProgressBar/LinearProgressBar';

export interface MeetingTimeFooterProps {
  currentStep: number;
  totalSteps: number;
  totalElapsedTime: number;
  slots?: {
    linearProgressProps?: LinearProgressProps;
  };
}

const MeetingTimeFooter = ({
  currentStep,
  totalSteps,
  totalElapsedTime,
  slots
}: MeetingTimeFooterProps) => {
  const { linearProgressProps } = slots || {};
  const theme = useTheme();

  return (
    <Box sx={{ mt: 0 }}>
      <LinearProgressBar
        variant="determinate"
        value={(currentStep / totalSteps) * 100}
        {...linearProgressProps}
        sx={{
          backgroundColor: 'grey.200',
          height: 8,
          borderRadius: theme.borderRadius.sm,
          '& .MuiLinearProgress-bar': {
            backgroundColor: 'cyan.600'
          },
          ...linearProgressProps?.sx
        }}
      />
      <Box
        sx={{
          display: 'flex',
          mt: 1,
          backgroundColor: 'grey.200',
          padding: 1,
          borderRadius: theme.borderRadius.sm
        }}
      >
        <Typography variant="textSmSemibold" flex={1}>
          Total:
        </Typography>
        <Typography variant="textSmSemibold">
          {formatTime(totalElapsedTime, true, 2)}
        </Typography>
      </Box>
    </Box>
  );
};

export default MeetingTimeFooter;
