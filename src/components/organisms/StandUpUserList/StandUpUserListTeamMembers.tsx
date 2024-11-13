import {
  Card,
  Grid,
  SelectChangeEvent,
  Theme,
  Typography,
  useTheme
} from '@mui/material';
import { Field, Formik } from 'formik';
import { useMemo } from 'react';
import PickerWithButtonField from 'src/components/atoms/InputBase/DatePickerInputBase/PickerWithButtonField';
import { SelectOption } from 'src/components/atoms/InputBase/SelectInputBase/SelectInputBase';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';
import StandUpUserListContent from './StandUpUserListContent';
import StandUpUserTeamSelect from './StandUpUserTeamSelect';
import { TeamMember } from './StandUpUserList';

const currentTimestamp = new Date();
currentTimestamp.setMinutes(currentTimestamp.getMinutes() - 6);

export interface StandUpUserListTeamMembersProps {
  selectedIndex: number | null;
  teamsOptions: SelectOption[];
  showTeamSelect: boolean;
  handleTeamChange: (event: SelectChangeEvent<string>) => void;
  formatDate: (dateString: string) => string;
  selectedDate: string;
  countCompletedStandUps: (teamMembers: TeamMember[]) => number;
  filteredMembers: TeamMember[];
  setOpen: (value: React.SetStateAction<boolean>) => void;
  open: boolean;
  handleDateChange: (date: Date | null) => void;
  selectedTeam: string;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
  formatStandUpTime: (
    standUpCompletedAt: string | null,
    hideIncomplete?: boolean
  ) => string;
}

const StandUpUserListTeamMembers = ({
  selectedIndex,
  teamsOptions,
  showTeamSelect = true,
  handleTeamChange,
  formatDate,
  selectedDate,
  countCompletedStandUps,
  filteredMembers,
  setOpen,
  open,
  handleDateChange,
  selectedTeam,
  setSelectedIndex,
  formatStandUpTime
}: StandUpUserListTeamMembersProps) => {
  const theme = useTheme();

  const formatSelectedDateMemo = useMemo(
    () => formatDate(selectedDate),
    [selectedDate]
  );
  const completedStandUpsCountMemo = useMemo(
    () => countCompletedStandUps(filteredMembers),
    [filteredMembers, selectedDate]
  );

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        border: theme.border.outlinedButton,
        borderRadius: theme.borderRadius.sm,
        boxShadow: theme.customShadows.xs
      }}
    >
      <Grid
        container
        flexDirection={'column'}
        gap={responsiveSpacing}
        flexWrap={'nowrap'}
      >
        <Grid
          item
          xs={12}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          sx={{
            px: 2,
            pt: responsiveSpacing
          }}
          gap={1}
        >
          <Grid display={'flex'} gap={1} alignItems={'center'}>
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
          <Grid sx={{ position: 'relative' }}>
            <Formik
              initialValues={{ date: null }}
              onSubmit={() => console.log('what')}
            >
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
                  onOpen={() => setOpen(true)}
                  onClose={() => setOpen(false)}
                  slotProps={{ field: { setOpen: setOpen } }}
                  setOpen={setOpen}
                  onChange={handleDateChange}
                />
              )}
            </Formik>
          </Grid>
        </Grid>

        {showTeamSelect && (
          <Grid
            item
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            sx={{
              px: responsiveSpacing
            }}
            xs={12}
          >
            <StandUpUserTeamSelect
              teamOptions={teamsOptions}
              handleTeamChange={handleTeamChange}
              value={selectedTeam || 'none'}
            />
          </Grid>
        )}
        <Grid item xs={12}>
          <StandUpUserListContent
            selectedIndex={selectedIndex}
            filteredMembers={filteredMembers}
            setSelectedIndex={setSelectedIndex}
            theme={theme}
            formatStandUpTime={formatStandUpTime}
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default StandUpUserListTeamMembers;
