import { Card, Grid, Theme, Typography, useTheme } from '@mui/material';
import { isBefore, parseISO, startOfToday } from 'date-fns';
import { Field, Formik } from 'formik';
import { forwardRef, useImperativeHandle, useMemo } from 'react';
import { ButtonProps } from 'src/components/atoms/Button/Button';
import PickerWithButtonField from 'src/components/atoms/InputBase/DatePickerInputBase/PickerWithButtonField';
import { SelectOption } from 'src/components/atoms/InputBase/SelectInputBase/SelectInputBase';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';
import { useStandUpUserList } from './hooks';
import StandUpMemberDetail from './StandUpMemberDetail';
import StandUpUserListContent from './StandUpUserListContent';
import StandUpUserTeamSelect from './StandUpUserTeamSelect';

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
}

const StandUpUserList = forwardRef(
  (
    {
      teamMembers,
      tipVisibleInitial,
      initialDate,
      currentMember,
      setExternalDate,
      showEditFor,
      onEdit,
      teamsOptions,
      slots,
      externalSelectedIndex,
      setExternalSelectedIndex,
      hideShowEditButton = false,
      showTeamSelect = true
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
      setExternalSelectedIndex!
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
    }, [
      showEditFor,
      onEdit,
      filteredMembers,
      selectedIndex,
      editButtonProps,
      selectedDate
    ]);

    const formatSelectedDateMemo = useMemo(
      () => formatDate(selectedDate),
      [selectedDate]
    );
    const completedStandUpsCountMemo = useMemo(
      () => countCompletedStandUps(filteredMembers),
      [filteredMembers, selectedDate]
    );
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
                  px: responsiveSpacing,
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
                  filteredMembers={filteredMembers}
                  setSelectedIndex={setSelectedIndex}
                  theme={theme}
                  formatStandUpTime={formatStandUpTime}
                />
              </Grid>
            </Grid>
          </Card>
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
            ></StandUpMemberDetail>
          )}
        </Grid>
      </Grid>
    );
  }
);

export default StandUpUserList;
