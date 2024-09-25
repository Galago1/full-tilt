import { Grid, IconButton, Theme, Typography } from '@mui/material';
import { isEmpty } from 'lodash';
import { Divider, FeaturedIcon } from 'src/components/atoms';
import { ButtonProps } from 'src/components/atoms/Button/Button';
import EmptyState from 'src/components/molecules/EmptyState/EmptyState';
import {
  InfoCircleIcon,
  XCloseIcon
} from 'src/components/particles/theme/overrides/CustomIcons';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';
import StandUpMemberDetailCardContentHeader from './StandUpMemberDetailCardContentHeader';
import { TeamMember } from './StandUpUserList';

interface StandUpMemberDetailCardContentProps {
  member: TeamMember;
  onBack: () => void;
  onNext: () => void;
  canGoBack: boolean;
  canGoNext: boolean;
  tipVisible: boolean;
  handleClose: () => void;
  formatStandUpTime: (standUpCompletedAt: string | null) => string;
  theme: Theme;
  showEditButton: boolean;
  editButtonProps: ButtonProps;
  children?: React.ReactNode;
}
const StandUpMemberDetailCardContent = ({
  member,
  onBack,
  onNext,
  canGoBack,
  canGoNext,
  tipVisible,
  handleClose,
  formatStandUpTime,
  theme,
  showEditButton,
  editButtonProps,
  children
}: StandUpMemberDetailCardContentProps) => {
  if (!member)
    return (
      <Grid
        container
        flex={1}
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          justifyItems: 'center'
        }}
      >
        <Grid item>
          <EmptyState
            avatarAndTextProps={{
              title: 'No Members',
              subtitle: 'No members in this team.',
              alignItems: 'center',
              textContainerGridItemProps: {
                alignItems: 'center'
              }
              // sx:{position: ''}
            }}
          />
        </Grid>
      </Grid>
    );
  return (
    <>
      <StandUpMemberDetailCardContentHeader
        member={member}
        onBack={onBack}
        onNext={onNext}
        canGoBack={canGoBack}
        canGoNext={canGoNext}
        formatStandUpTime={formatStandUpTime}
        theme={theme}
        showEditButton={showEditButton}
        editButtonProps={editButtonProps}
      />
      <Grid item>
        <Divider sx={{ mb: responsiveSpacing }} />
      </Grid>
      {isEmpty(member.standUpCompletedAt) && (
        <Grid
          container
          flex={1}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            justifyItems: 'center'
          }}
        >
          <Grid item>
            <EmptyState
              avatarAndTextProps={{
                title: 'Stand Up Not Completed',
                subtitle: `${member.name} did not complete the stand up for this day.`,
                alignItems: 'center',
                textContainerGridItemProps: {
                  alignItems: 'center'
                }
              }}
            />
          </Grid>
        </Grid>
      )}
      {/* {!isEmpty(member.standUpCompletedAt) && !isEmpty(member.standUpContent) && ( */}
      {children ? <>{children}</> : null}
      {tipVisible && (
        <Grid
          sx={{
            mt: 2,
            p: 2,
            backgroundColor: theme.palette.common.white,
            border: theme.border.userProfile,
            borderRadius: theme.borderRadius.md,
            display: 'flex',
            gap: 2,
            position: 'relative'
          }}
        >
          <FeaturedIcon
            sx={{
              color: theme.palette.common.white,
              borderRadius: theme.borderRadius.md,
              backgroundColor: 'grey.900',
              width: 40,
              height: 40
            }}
          >
            <Grid sx={{ width: 40, height: 40 }}>
              <InfoCircleIcon />
            </Grid>
          </FeaturedIcon>
          <Grid display={'flex'} flexDirection={'column'} gap={0.25}>
            <Typography variant="textSmRegular">
              <b>Tips:</b>
            </Typography>
            <Typography variant="textSmRegular">
              A copy of this team's Vision was automatically saved and archived
              upon starting this Meeting.
            </Typography>
            <Typography variant="textSmRegular" marginTop={2}>
              Need to take a break during the Meeting? Use the pause button to
              stop the time.
            </Typography>
          </Grid>
          <IconButton
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              color: 'grey.900'
            }}
            onClick={handleClose}
          >
            <XCloseIcon />
          </IconButton>
        </Grid>
      )}
    </>
  );
};
export default StandUpMemberDetailCardContent;
