import { Grid, IconButton, Theme, useTheme } from '@mui/material';
import {
  AlertTriangleIcon,
  CheckCircleIcon,
  ThumbsUpIcon
} from 'src/components/particles/theme/overrides/CustomIcons';

export enum RockStatus {
  COMPLETED = 'completed',
  ON_TRACK = 'on_track',
  OFF_TRACK = 'off_track'
}

const iconStyles = {
  width: 16,
  height: 16
};

interface DetermineRockStatusContentProps {
  status: RockStatus;
}

const DetermineRockStatusContent = ({
  status
}: DetermineRockStatusContentProps) => {
  if (status === RockStatus.ON_TRACK)
    return (
      <ThumbsUpIcon
        strokeWidth={2.5}
        sx={{
          ...iconStyles,
          color: 'grey.500'
        }}
      />
    );

  if (status === RockStatus.OFF_TRACK)
    return (
      <AlertTriangleIcon
        strokeWidth={2.5}
        sx={{ ...iconStyles, color: 'error.500' }}
      />
    );
  if (status === RockStatus.COMPLETED)
    return (
      <CheckCircleIcon
        strokeWidth={2.5}
        sx={{ ...iconStyles, color: 'success.500' }}
      />
    );

  return <></>;
};

const determineRockStatusSxProps = (theme: Theme, status: RockStatus) => {
  if (status === RockStatus.ON_TRACK) {
    return {
      border: theme.border.grey300,
      backgroundColor: 'grey.100',
      '&:hover': {
        border: theme.border.grey300,
        backgroundColor: 'grey.100'
      },
      '&.Mui-disabled': {
        backgroundColor: 'grey.200'
      }
    };
  }
  if (status === RockStatus.OFF_TRACK) {
    return {
      color: 'error.500',
      border: theme.border.error300,
      backgroundColor: 'error.100',
      '&:hover': {
        border: theme.border.error300,
        backgroundColor: 'error.100'
      },
      '&.Mui-disabled': {
        backgroundColor: 'error.200'
      }
    };
  }
  if (status === RockStatus.COMPLETED) {
    return {
      border: theme.border.success300,
      backgroundColor: 'success.100',
      '&:hover': {
        border: theme.border.grey300,
        backgroundColor: 'grey.100'
      },
      '&.Mui-disabled': {
        backgroundColor: 'success.200'
      }
    };
  }
  return {};
};

export interface RockStatusFormProps {
  isTransitioning: boolean;
  status: RockStatus;
  handleRockStatusOpen: (event: React.MouseEvent<HTMLElement>) => void;
}
const RockStatusForm = ({
  isTransitioning,
  status,
  handleRockStatusOpen
}: RockStatusFormProps) => {
  const theme = useTheme();

  const sxProps = determineRockStatusSxProps(theme, status);
  return (
    <Grid sx={{ overflow: 'visible', padding: 0.5 }}>
      <IconButton
        type="button"
        size="medium"
        disabled={isTransitioning}
        sx={{
          width: 32,
          height: 32,
          overflow: 'visible',
          zIndex: 1,
          // css-y4cjyz-MuiTouchRipple-ripple MuiTouchRipple-ripple MuiTouchRipple-rippleVisible
          '& .MuiTouchRipple-root': {
            width: 48,
            height: 48,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            // This ensures the ripple is properly centered and scaled
            '& .MuiTouchRipple-ripple': {
              animation: 'none !important',
              transformOrigin: 'center'
            },
            '& .MuiTouchRipple-child': {
              borderRadius: '50%'
            }
          },

          ...sxProps
        }}
        onClick={(event) => {
          event.stopPropagation();
          handleRockStatusOpen(event);
        }}
      >
        <DetermineRockStatusContent status={status} />
      </IconButton>
    </Grid>
  );
};

export default RockStatusForm;
