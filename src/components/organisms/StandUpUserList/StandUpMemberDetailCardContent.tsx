import { Grid, IconButton, Theme, Typography } from '@mui/material';
import { isEmpty } from 'lodash';
import { Divider, FeaturedIcon } from 'src/components/atoms';
import Button, { ButtonProps } from 'src/components/atoms/Button/Button';
import EmptyState from 'src/components/molecules/EmptyState/EmptyState';
import { AlertCircleIcon } from 'src/components/particles/theme/icons/AlertsAndFeedback/alert-circle';
import { InfoCircleIcon } from 'src/components/particles/theme/icons/General/info-circle';
import { XCloseIcon } from 'src/components/particles/theme/icons/General/x-close';
import { attachmentIconSx } from 'src/constants/spacing';
import StandUpMemberDetailCardContentHeader from './StandUpMemberDetailCardContentHeader';
import { TeamMember } from './StandUpUserList';

interface StandUpMemberDetailCardContentProps {
  isMember: boolean;
  member: TeamMember;
  onBack: () => void;
  onNext: () => void;
  canGoBack: boolean;
  canGoNext: boolean;
  tipVisible: boolean;
  handleClose: () => void;
  theme: Theme;
  showEditButton: boolean;
  editButtonProps: ButtonProps;
  memberButtonProps: ButtonProps;
  children?: React.ReactNode;
  currentPosition: number;
  totalCount: number;
}
const StandUpMemberDetailCardContent = ({
  isMember,
  member,
  onBack,
  onNext,
  canGoBack,
  canGoNext,
  tipVisible,
  handleClose,
  theme,
  showEditButton,
  editButtonProps,
  memberButtonProps,
  children,
  currentPosition,
  totalCount
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
    <Grid container flexDirection={'column'} flexWrap={'nowrap'} gap={2}>
      <Grid item>
        <Grid container flexDirection={'column'} gap={1}>
          <Grid item>
            <StandUpMemberDetailCardContentHeader
              member={member}
              onBack={onBack}
              onNext={onNext}
              canGoBack={canGoBack}
              canGoNext={canGoNext}
              theme={theme}
              showEditButton={showEditButton}
              editButtonProps={editButtonProps}
              currentPosition={currentPosition}
              totalCount={totalCount}
            />
          </Grid>

          <Grid item>
            <Divider sx={{ my: 0, py: 0 }} />
          </Grid>
        </Grid>
      </Grid>
      {isEmpty(member.standUpCompletedAt) && (
        <Grid
          container
          flex={1}
          sx={{
            minHeight: 320,
            justifyContent: 'center',
            alignItems: 'center',
            justifyItems: 'center'
          }}
        >
          <Grid item>
            <EmptyState
              featuredIconProps={{
                size: 'md',
                children: <AlertCircleIcon sx={attachmentIconSx} />
              }}
              featuredIconItemProps={{
                display: 'flex',
                justifyContent: 'center'
              }}
              avatarAndTextProps={{
                gap: 1.5,
                flexDirection: 'column',
                title: 'Stand Up Not Completed',
                titleTypography: {
                  variant: 'textLgSemibold'
                },
                subtitle: `${
                  isMember ? 'You' : member.name
                } did not complete the Stand Up for this day.`,
                subtitleTypography: {
                  variant: 'textMdRegular'
                },
                alignItems: 'center',
                textContainerGridItemProps: {
                  alignItems: 'center'
                },
                children:
                  isMember && memberButtonProps ? (
                    <Button {...memberButtonProps} />
                  ) : null
              }}
            />
          </Grid>
        </Grid>
      )}
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
    </Grid>
  );
};
export default StandUpMemberDetailCardContent;
