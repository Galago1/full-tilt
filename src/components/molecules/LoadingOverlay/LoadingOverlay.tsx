import { Fade, Grid } from '@mui/material';
import CircularProgress from 'src/components/atoms/CircularProgress/CircularProgress';
import { CheckCircleIcon } from 'src/components/particles/theme/overrides/CustomIcons';

export interface LoadingOverlayProps {
  isLoading: boolean;
  isSuccess: boolean;
}

/**
 * Primary UI component for user interaction
 */
const LoadingOverlay = ({ isLoading, isSuccess }: LoadingOverlayProps) => {
  return (
    <Fade in={isLoading || isSuccess}>
      <Grid
        sx={{
          display: isLoading || isSuccess ? 'flex' : 'none',
          justifyContent: 'center'
        }}
      >
        <Fade in={isLoading && !isSuccess}>
          <Grid
            sx={{
              display: isLoading && !isSuccess ? 'flex' : 'none',
              justifyContent: 'center'
            }}
          >
            <CircularProgress variant="indeterminate" size={20} />
          </Grid>
        </Fade>
        <Fade in={!isLoading && isSuccess}>
          <Grid
            sx={{
              display: !isLoading && isSuccess ? 'flex' : 'none',
              justifyContent: 'center'
            }}
          >
            <CheckCircleIcon sx={{ width: 24, height: 24 }} color="success" />
          </Grid>
        </Fade>
      </Grid>
    </Fade>
  );
};
export default LoadingOverlay;
