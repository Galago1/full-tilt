import { Card, Theme } from '@mui/material';
import { ButtonProps } from 'src/components/atoms/Button/Button';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';
import StandUpMemberDetailCardContent from './StandUpMemberDetailCardContent';
import { TeamMember } from './StandUpUserList';

const currentTimestamp = new Date();
currentTimestamp.setMinutes(currentTimestamp.getMinutes() - 6);

interface StandUpMemberDetailProps {
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
  standUpMemberDetailContent?: React.ReactNode;
}

const StandUpMemberDetail = ({
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
  standUpMemberDetailContent
}: StandUpMemberDetailProps) => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: responsiveSpacing,
        border: theme.border.outlinedButton,
        borderRadius: theme.borderRadius.md,
        boxShadow: theme.customShadows.xs
      }}
    >
      <StandUpMemberDetailCardContent
        member={member}
        onBack={onBack}
        onNext={onNext}
        canGoBack={canGoBack}
        canGoNext={canGoNext}
        tipVisible={tipVisible}
        handleClose={handleClose}
        formatStandUpTime={formatStandUpTime}
        theme={theme}
        showEditButton={showEditButton}
        editButtonProps={editButtonProps}
      >
        {standUpMemberDetailContent}
      </StandUpMemberDetailCardContent>
    </Card>
  );
};

export default StandUpMemberDetail;
