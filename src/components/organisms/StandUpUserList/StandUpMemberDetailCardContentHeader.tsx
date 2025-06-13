import { Grid, Theme, Typography } from '@mui/material';
import Avatar from 'src/components/atoms/Avatar/Avatar';
import Button, { ButtonProps } from 'src/components/atoms/Button/Button';
import Chip from 'src/components/atoms/Chip/Chip';
import Tooltip from 'src/components/atoms/Tooltip/Tooltip';
import NavigationNextPrev from 'src/components/molecules/NavigationNextPrev/NavigationNextPrev';
import { VerifiedTickIcon } from 'src/components/particles/theme/overrides/CustomIcons';
import { rowInitials } from 'src/utils/users/initials';
import { TeamMember } from './StandUpUserList';

interface StandUpMemberDetailCardContentHeaderProps {
  member: TeamMember;
  onBack: () => void;
  onNext: () => void;
  canGoBack: boolean;
  canGoNext: boolean;
  theme: Theme;
  showEditButton: boolean;
  editButtonProps: ButtonProps;
  currentPosition: number;
  totalCount: number;
}
const StandUpMemberDetailCardContentHeader = ({
  member,
  onBack,
  onNext,
  canGoBack,
  canGoNext,
  theme,
  showEditButton,
  editButtonProps,
  currentPosition,
  totalCount,
  ...props
}: StandUpMemberDetailCardContentHeaderProps) => {
  const grey700 = theme.palette.grey[800];
  return (
    <Grid container sx={{ alignItems: 'center' }} gap={2} {...props}>
      <Grid item flex={1} display={'flex'}>
        <Grid container gap={1} alignItems={'center'} flexWrap={'nowrap'}>
          <Grid item>
            <Avatar
              alt={member.name}
              sx={{ width: 18, height: 18, fontSize: 14 }}
              src={member.imageUrl}
            >
              {rowInitials({ name: member.name }, true)}
            </Avatar>
          </Grid>

          <Grid item flex={1}>
            <Grid display={'flex'} gap={1} alignItems={'center'}>
              <Typography variant="textSmMedium" noWrap>
                {member.name}
              </Typography>
              {member.standUpCompletedAt && (
                <Tooltip
                  title={`Completed at ${member.standUpCompletedAtTime}`}
                >
                  <Chip
                    label={
                      <Grid display={'flex'} gap={1} alignItems={'center'}>
                        <VerifiedTickIcon
                          sx={{ width: 16, height: 16 }}
                          fill={grey700}
                        />
                        {member.standUpCompletedAtTime}
                      </Grid>
                    }
                    variant={'outlined'}
                    sx={{
                      backgroundColor: 'transparent',
                      borderRadius: theme.borderRadius.xs,
                      '&:hover': {
                        backgroundColor: 'transparent'
                      },
                      lineHeight: 1.25
                    }}
                  />
                </Tooltip>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Grid container gap={2}>
          {showEditButton && editButtonProps && (
            <Grid item>
              <Button {...editButtonProps} />
            </Grid>
          )}
          <NavigationNextPrev
            currentPosition={currentPosition}
            totalCount={totalCount}
            goToPrevious={onBack}
            goToNext={onNext}
            hasNext={canGoNext}
            hasPrevious={canGoBack}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default StandUpMemberDetailCardContentHeader;
