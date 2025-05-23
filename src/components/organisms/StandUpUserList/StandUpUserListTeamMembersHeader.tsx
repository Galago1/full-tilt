import { Grid, Theme, Typography, useTheme } from '@mui/material';
import { Field, Formik } from 'formik';
import PickerWithButtonField from 'src/components/atoms/InputBase/DatePickerInputBase/PickerWithButtonField';
import Tooltip from 'src/components/atoms/Tooltip/Tooltip';

const currentTimestamp = new Date();
currentTimestamp.setMinutes(currentTimestamp.getMinutes() - 6);

interface StandUpUserListTeamMembersHeaderProps {
  formatSelectedDateMemo?: string;
  completedStandUpsCountMemo?: number;
  open?: boolean;
  setOpen?: (value: React.SetStateAction<boolean>) => void;
  handleDateChange?: (date: Date | null) => void;
}
const StandUpUserListTeamMembersHeader = ({
  formatSelectedDateMemo,
  completedStandUpsCountMemo,
  open,
  setOpen,
  handleDateChange
}: StandUpUserListTeamMembersHeaderProps) => {
  const theme = useTheme();
  return (
    <Grid container alignItems={'center'}>
      <Grid item display={'flex'} gap={1} alignItems={'center'} flex={1}>
        <Typography variant={'textLgSemibold'}>
          {formatSelectedDateMemo}
        </Typography>
        <Grid
          sx={{
            display: 'flex',
            alignItems: 'center',
            border: theme.border.userProfile,
            borderRadius: theme.borderRadius.sm,
            height: 24
          }}
        >
          <Grid
            sx={{
              display: 'flex',
              alignItems: 'center',
              margin: theme.spacing(0, 6 / 8)
            }}
          >
            <Typography variant="textXsMedium">
              {completedStandUpsCountMemo}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Tooltip title={'Filter Date'}>
        <Grid item sx={{ position: 'relative' }}>
          <Formik initialValues={{ date: null }} onSubmit={() => {}}>
            {(formik) => (
              <Field
                name="date"
                component={PickerWithButtonField}
                sx={{
                  '& .MuiButton-root': {
                    minWidth: 'auto',
                    padding: (theme: Theme) => theme.spacing(10 / 8)
                  }
                }}
                maxDate={new Date()}
                open={open}
                onOpen={() => setOpen?.(true)}
                onClose={() => setOpen?.(false)}
                slotProps={{ field: { setOpen: setOpen } }}
                setOpen={setOpen}
                onChange={handleDateChange}
              />
            )}
          </Formik>
        </Grid>
      </Tooltip>
    </Grid>
  );
};

export default StandUpUserListTeamMembersHeader;
