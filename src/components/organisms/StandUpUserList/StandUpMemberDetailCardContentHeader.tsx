import { Grid, Theme, Typography } from '@mui/material';
import Avatar from 'src/components/atoms/Avatar/Avatar';
import Button, { ButtonProps } from 'src/components/atoms/Button/Button';
import {
  SkipBackIcon,
  SkipForwardIcon,
  VerifiedTickIcon
} from 'src/components/particles/theme/overrides/CustomIcons';
import { rowInitials } from 'src/utils/users/initials';
import { TeamMember } from './StandUpUserList';
import Chip from 'src/components/atoms/Chip/Chip';

interface StandUpMemberDetailCardContentHeaderProps {
  member: TeamMember;
  onBack: () => void;
  onNext: () => void;
  canGoBack: boolean;
  canGoNext: boolean;
  theme: Theme;
  showEditButton: boolean;
  editButtonProps: ButtonProps;
}
const StandUpMemberDetailCardContentHeader = ({
  member,
  onBack,
  onNext,
  canGoBack,
  canGoNext,
  theme,
  showEditButton,
  editButtonProps
}: StandUpMemberDetailCardContentHeaderProps) => {
  const grey700 = theme.palette.grey[800];
  return (
    <Grid
      container
      sx={{
        alignItems: 'center',
        mb: 2
      }}
      gap={2}
    >
      <Grid item flex={1} display={'flex'}>
        <Grid container gap={2} flexWrap={'nowrap'}>
          <Grid item>
            <Avatar
              alt={member.name}
              sx={{ width: 56, height: 56 }}
              src={member.imageUrl}
            >
              {rowInitials({ name: member.name })}
            </Avatar>
          </Grid>

          <Grid item flex={1}>
            <Grid display={'flex'} gap={2} alignItems={'center'}>
              <Typography variant="displayXsRegular" noWrap>
                {member.name}
              </Typography>
              {member.standUpCompletedAt && (
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
                    borderRadius: theme.borderRadius.sm
                  }}
                />
              )}
            </Grid>
            <Typography variant="textSmRegular" color="text.secondary">
              {member.team}
            </Typography>
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
          {canGoBack && (
            <Grid item>
              <Button
                color="secondary"
                onClick={onBack}
                startIcon={<SkipBackIcon />}
                disabled={!canGoBack}
                variant={'outlined'}
                label="Back"
              />
            </Grid>
          )}
          {canGoNext && (
            <Grid item width={100}>
              <Button
                color="secondary"
                onClick={onNext}
                endIcon={<SkipForwardIcon />}
                disabled={!canGoNext}
                variant={'outlined'}
                label="Next"
              />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default StandUpMemberDetailCardContentHeader;
