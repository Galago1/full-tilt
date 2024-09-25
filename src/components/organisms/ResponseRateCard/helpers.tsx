import { Grid, Typography, useTheme } from '@mui/material';
import { CalendarClearIcon } from 'src/components/particles/theme/overrides/CustomIcons';

export const TestResponseRateElem = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      sx={{
        border: `1px solid ${theme.palette.grey[300]}`,
        borderRadius: 1
      }}
      padding={`${theme.spacing(1.25)} ${theme.spacing(2)}`}
    >
      <CalendarClearIcon />
      <Typography variant="textSmSemibold" ml={1}>
        {'12-23-2024 - 12-31-2024'}
      </Typography>
    </Grid>
  );
};
