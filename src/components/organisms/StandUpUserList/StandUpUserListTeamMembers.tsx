import { Grid, GridProps, SelectChangeEvent, useTheme } from '@mui/material';
import { useMemo } from 'react';
import Divider from 'src/components/atoms/Divider/Divider';
import { SelectOption } from 'src/components/atoms/InputBase/SelectInputBase/SelectInputBase';
import Card, { CardProps } from '../Card/Card';
import { TeamMember } from './StandUpUserList';
import StandUpUserListContent from './StandUpUserListContent';
import StandUpUserListTeamMembersHeader from './StandUpUserListTeamMembersHeader';
import StandUpUserTeamSelect from './StandUpUserTeamSelect';

const currentTimestamp = new Date();
currentTimestamp.setMinutes(currentTimestamp.getMinutes() - 6);

export interface StandUpUserListTeamMembersProps
  extends Omit<CardProps, 'slots'> {
  selectedIndex?: number | null;
  teamsOptions?: SelectOption[];
  handleTeamChange?: (event: SelectChangeEvent<string>) => void;
  formatDate?: (dateString: string) => string;
  /**
   * The date selected by the user
   * format: MM/dd/yyyy
   */
  selectedDate?: string;
  countCompletedStandUps?: (teamMembers: TeamMember[]) => number;
  filteredMembers?: TeamMember[];
  setOpen?: (value: React.SetStateAction<boolean>) => void;
  open?: boolean;
  handleDateChange?: (date: Date | null) => void;
  selectedTeam?: string;
  setSelectedIndex?: React.Dispatch<React.SetStateAction<number>>;
  showTeamSelect?: boolean;
  showTeamMembersHeader?: boolean;
  customHeader?: JSX.Element;
  cardSlots?: CardProps['slots'];
  slots?: {
    gridContainerProps?: GridProps;
  };
}

const StandUpUserListTeamMembers = ({
  selectedIndex,
  teamsOptions,
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
  showTeamSelect = true,
  showTeamMembersHeader = true,
  customHeader,
  cardSlots,
  slots,
  ...props
}: StandUpUserListTeamMembersProps) => {
  const { gridContainerProps } = slots || {};
  const theme = useTheme();

  const formatSelectedDateMemo = useMemo(
    () => formatDate?.(selectedDate || ''),
    [selectedDate]
  );
  const completedStandUpsCountMemo = useMemo(
    () => countCompletedStandUps?.(filteredMembers || []),
    [filteredMembers, selectedDate]
  );

  return (
    <Card
      slots={cardSlots}
      showActions={false}
      {...props}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        border: theme.border.outlinedButton,
        borderRadius: theme.borderRadius.sm,
        boxShadow: theme.customShadows.xs,
        ...props.sx
      }}
    >
      <Grid
        container
        flexDirection={'column'}
        gap={2}
        flexWrap={'nowrap'}
        {...gridContainerProps}
      >
        {customHeader && (
          <>
            {/* 1 minus 10 for 9 / 8 */}
            <Grid container flexDirection={'column'} gap={1}>
              <Grid item>{customHeader}</Grid>
              <Grid item>
                <Divider sx={{ my: 0, py: 0 }} />
              </Grid>
            </Grid>
          </>
        )}
        {showTeamMembersHeader && (
          <Grid
            item
            xs={12}
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            gap={1}
          >
            <StandUpUserListTeamMembersHeader
              formatSelectedDateMemo={formatSelectedDateMemo}
              completedStandUpsCountMemo={completedStandUpsCountMemo}
              open={open}
              setOpen={setOpen}
              handleDateChange={handleDateChange}
            />
          </Grid>
        )}
        {showTeamSelect && (
          <Grid
            item
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
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
