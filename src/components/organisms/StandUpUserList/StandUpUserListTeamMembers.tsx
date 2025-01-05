import { Card, Grid, SelectChangeEvent, useTheme } from '@mui/material';
import { useMemo } from 'react';
import { SelectOption } from 'src/components/atoms/InputBase/SelectInputBase/SelectInputBase';
import { TeamMember } from './StandUpUserList';
import StandUpUserListContent from './StandUpUserListContent';
import StandUpUserListTeamMembersHeader from './StandUpUserListTeamMembersHeader';
import StandUpUserTeamSelect from './StandUpUserTeamSelect';

const currentTimestamp = new Date();
currentTimestamp.setMinutes(currentTimestamp.getMinutes() - 6);

export interface StandUpUserListTeamMembersProps {
  selectedIndex: number | null;
  teamsOptions: SelectOption[];
  showTeamSelect: boolean;
  handleTeamChange: (event: SelectChangeEvent<string>) => void;
  formatDate: (dateString: string) => string;
  /**
   * The date selected by the user
   * format: MM/dd/yyyy
   */
  selectedDate: string;
  countCompletedStandUps: (teamMembers: TeamMember[]) => number;
  filteredMembers: TeamMember[];
  setOpen: (value: React.SetStateAction<boolean>) => void;
  open: boolean;
  handleDateChange: (date: Date | null) => void;
  selectedTeam: string;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
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
  setSelectedIndex
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
      <Grid container flexDirection={'column'} gap={2} flexWrap={'nowrap'}>
        <StandUpUserListTeamMembersHeader
          formatSelectedDateMemo={formatSelectedDateMemo}
          completedStandUpsCountMemo={completedStandUpsCountMemo}
          open={open}
          setOpen={setOpen}
          handleDateChange={handleDateChange}
        />

        {showTeamSelect && (
          <Grid
            item
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            sx={{
              px: 2
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
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default StandUpUserListTeamMembers;
