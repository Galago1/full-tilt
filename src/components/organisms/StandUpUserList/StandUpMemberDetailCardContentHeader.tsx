import { Grid, Theme, Typography } from '@mui/material';
import Avatar from 'src/components/atoms/Avatar/Avatar';
import Button, { ButtonProps } from 'src/components/atoms/Button/Button';
import Chip from 'src/components/atoms/Chip/Chip';
import { SkipBackIcon } from 'src/components/particles/theme/icons/MediaAndDevices/skip-back';
import { SkipForwardIcon } from 'src/components/particles/theme/icons/MediaAndDevices/skip-forward';
import { VerifiedTickIcon } from 'src/components/particles/theme/overrides/CustomIcons';
import { rowInitials } from 'src/utils/users/initials';
import { TeamMember } from './StandUpUserList';
import { EscapeChar } from 'src/components/particles/theme/spacing';
import { attachmentIconSx } from 'src/constants/spacing';

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
  editButtonProps,
  ...props
}: StandUpMemberDetailCardContentHeaderProps) => {
  const grey700 = theme.palette.grey[800];
  return (
    <Grid
      container
      sx={{
        alignItems: 'center'
        // mb: 0
        // minHeight: 48
      }}
      gap={2}
      {...props}
    >
      <Grid item flex={1} display={'flex'}>
        <Grid container gap={1} alignItems={'center'} flexWrap={'nowrap'}>
          <Grid item>
            <Avatar
              alt={member.name}
              sx={{ width: 28, height: 28 }}
              src={member.imageUrl}
            >
              {rowInitials({ name: member.name }, true)}
            </Avatar>
          </Grid>

          <Grid item flex={1}>
            <Grid display={'flex'} gap={1} alignItems={'center'}>
              <Typography variant="textMdRegular" noWrap>
                {member.name}
              </Typography>
              {member.team && (
                <>
                  {EscapeChar.MIDDOT}
                  <Typography variant="textSmRegular" color="text.primary">
                    {member.team}
                  </Typography>
                </>
              )}
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
                    borderRadius: theme.borderRadius.xs,
                    '&:hover': {
                      backgroundColor: 'transparent'
                    },
                    lineHeight: 1.25
                  }}
                />
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
          {canGoBack && (
            <Grid item>
              <Button
                color="secondary"
                onClick={onBack}
                startIcon={<SkipBackIcon sx={attachmentIconSx} />}
                disabled={!canGoBack}
                variant={'outlined'}
                size="xs"
                label="Back"
              />
            </Grid>
          )}
          {canGoNext && (
            <Grid item>
              <Button
                color="secondary"
                onClick={onNext}
                endIcon={<SkipForwardIcon sx={attachmentIconSx} />}
                disabled={!canGoNext}
                variant={'outlined'}
                size="xs"
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
