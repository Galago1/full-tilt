import { Grid, useTheme } from '@mui/material';
import { isBefore, parseISO, startOfToday } from 'date-fns';
import { forwardRef, useImperativeHandle, useMemo } from 'react';
import { ButtonProps } from 'src/components/atoms/Button/Button';
import { SelectOption } from 'src/components/atoms/InputBase/SelectInputBase/SelectInputBase';
import { useStandUpUserList } from './hooks';
import StandUpMemberDetail from './StandUpMemberDetail';
import StandUpUserListTeamMembers from './StandUpUserListTeamMembers';

const determineShowEdit = (
  hideShowEditButton: boolean,
  selectedMemberId: string,
  currentMember: TeamMember,
  selectedDate: string
): boolean => {
  if (hideShowEditButton) return false;
  if (!selectedMemberId) return false;
  if (!currentMember) return false;

  const todayMorning = startOfToday();
  if (isBefore(parseISO(selectedDate), todayMorning)) return false;

  return selectedMemberId === currentMember.id;
};

const currentTimestamp = new Date();
currentTimestamp.setMinutes(currentTimestamp.getMinutes() - 6);

export interface TeamMember {
  id: string;
  name: string;
  imageUrl?: string;
  status: string;
  teamId: string;
  team: string;
  // date: string;
  standUpCompletedAt: string | null;
  standUpContent: string[];
  lastSeen: string;
}

export interface StandUpUserListProps {
  teamMembers: TeamMember[];
  tipVisibleInitial?: boolean;
  currentMember: TeamMember;
  memberButtonProps: ButtonProps;
  initialDate?: string;
  setExternalDate?: (date: string) => void;
  externalSelectedIndex: number;
  setExternalSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
  showEditFor: (member: TeamMember) => boolean;
  onEdit: (member: TeamMember) => void;
  teamsOptions: SelectOption[];
  slots?: {
    editButtonProps?: ButtonProps;
    standUpMemberDetailContent?: React.ReactNode;
  };
  hideShowEditButton?: boolean;
  showTeamSelect?: boolean;
  initialTeam: string;
}

const StandUpUserList = forwardRef(
  (
    {
      teamMembers,
      tipVisibleInitial,
      initialDate,
      currentMember,
      memberButtonProps,
      setExternalDate,
      showEditFor,
      onEdit,
      teamsOptions,
      slots,
      externalSelectedIndex,
      setExternalSelectedIndex,
      hideShowEditButton = false,
      showTeamSelect = true,
      initialTeam = 'all'
    }: StandUpUserListProps,
    ref: any
  ) => {
    const { editButtonProps, standUpMemberDetailContent } = slots || {};

    const theme = useTheme();
    const {
      selectedIndex,
      selectedTeam,
      selectedDate,
      open,
      handleDateChange,
      handleTeamChange,
      filteredMembers,
      handleNext,
      handleBack,
      canGoNext,
      canGoBack,
      formatDate,
      formatStandUpTime,
      tipVisible,
      handleClose,
      countCompletedStandUps,
      setOpen,
      setSelectedIndex
    } = useStandUpUserList(
      teamMembers,
      tipVisibleInitial,
      initialDate,
      setExternalDate!,
      externalSelectedIndex!,
      setExternalSelectedIndex!,
      initialTeam
    );

    const finalEditButtonProps = useMemo(() => {
      if (!showEditFor) return undefined;
      if (selectedIndex === null || selectedIndex === undefined)
        return undefined;
      const member = filteredMembers[selectedIndex];
      const result = showEditFor(member);
      if (!result) return undefined;

      return {
        ...editButtonProps,
        onClick: () => {
          onEdit?.(member);
        }
      };
    }, [filteredMembers, selectedIndex, editButtonProps, selectedDate]);

    const selectedMemberId = (filteredMembers || [])[selectedIndex]?.id;
    const showEditButton = determineShowEdit(
      hideShowEditButton,
      selectedMemberId,
      currentMember,
      selectedDate
    );
    useImperativeHandle(ref, () => ({
      getCardData: () => ({
        selectedIndex
      })
    }));

    return (
      <Grid container spacing={2} sx={{ height: '100%', paddingBottom: 2 }}>
        <Grid item xs={12} sm={12} md={12} lg={3} sx={{ height: '100%' }}>
          <StandUpUserListTeamMembers
            selectedIndex={selectedIndex}
            teamsOptions={teamsOptions}
            showTeamSelect={showTeamSelect}
            handleTeamChange={handleTeamChange}
            formatDate={formatDate}
            selectedDate={selectedDate}
            countCompletedStandUps={countCompletedStandUps}
            filteredMembers={filteredMembers}
            setOpen={setOpen}
            open={open}
            handleDateChange={handleDateChange}
            selectedTeam={selectedTeam}
            setSelectedIndex={setSelectedIndex}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={9}>
          {selectedIndex !== null && (
            <StandUpMemberDetail
              member={filteredMembers[selectedIndex]}
              onBack={handleBack}
              onNext={handleNext}
              canGoBack={canGoBack}
              canGoNext={canGoNext}
              tipVisible={tipVisible}
              handleClose={handleClose}
              formatStandUpTime={formatStandUpTime}
              theme={theme}
              editButtonProps={finalEditButtonProps!}
              showEditButton={showEditButton}
              standUpMemberDetailContent={standUpMemberDetailContent}
              currentMember={currentMember}
              memberButtonProps={memberButtonProps}
            ></StandUpMemberDetail>
          )}
        </Grid>
      </Grid>
    );
  }
);

export default StandUpUserList;
