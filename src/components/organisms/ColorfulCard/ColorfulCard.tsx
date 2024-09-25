import {
  Card,
  Typography,
  LinearProgress,
  Grid,
  Box,
  useTheme
} from '@mui/material';
import { Link } from 'src/components/atoms';
import { ArrowUpRightIcon } from 'src/components/particles/theme/overrides/CustomIcons';

export interface ColorfulCardProps {
  backgroundColor?: string;
  color?: string;
  progress?: number;
}
const ColorfulCard = ({
  backgroundColor = 'cyan.600',
  color = '#54ADC9',
  progress = 0,
  ...props
}: ColorfulCardProps) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'inline-block',
        padding: { xs: 0, sm: 0, md: 1 },
        backgroundColor,
        width: '100%'
      }}
      {...props}
    >
      <Card
        sx={{
          borderRadius: 0,
          border: theme.border.offWhiteBorder,
          backgroundColor: color,
          width: '100%'
        }}
      >
        <Grid container flexDirection={'column'} padding={2}>
          <Grid item>
            <Typography
              color={theme.palette.common.white}
              variant="textXlRegular"
              component="div"
            >
              Company Vibes Survey
            </Typography>
          </Grid>
          <Grid
            container
            alignItems="center"
            spacing={2}
            sx={{ paddingTop: 2.25 }}
          >
            <Grid item xs>
              <LinearProgress
                variant="determinate"
                value={progress}
                sx={{
                  height: 10,
                  borderRadius: theme.borderRadius.md,
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: theme.palette.common.white,
                    borderRadius: theme.borderRadius.md
                  }
                }}
              />
            </Grid>
            <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography
                color={theme.palette.common.white}
                variant="textSmMedium"
                sx={{ textAlign: 'center' }}
              >
                {progress}%
              </Typography>
            </Grid>
          </Grid>
          <Grid item paddingTop={2.25}>
            <Link
              color={theme.palette.common.white}
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              Complete Survey{' '}
              <ArrowUpRightIcon sx={{ width: 20, height: 20 }} />
            </Link>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default ColorfulCard;
