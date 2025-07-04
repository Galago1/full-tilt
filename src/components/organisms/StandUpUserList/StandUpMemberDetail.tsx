import { Theme } from '@mui/material';
import { ButtonProps } from 'src/components/atoms/Button/Button';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';
import StandUpMemberDetailCardContent, {
  StandUpMemberDetailCardContentProps
} from './StandUpMemberDetailCardContent';
import { TeamMember } from './StandUpUserList';
import Card, { CardProps } from '../Card/Card';

const currentTimestamp = new Date();
currentTimestamp.setMinutes(currentTimestamp.getMinutes() - 6);

export interface StandUpMemberDetailProps extends Omit<CardProps, 'slots'> {
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
  standUpMemberDetailContent?: React.ReactNode;
  currentMember: TeamMember;
  memberButtonProps: ButtonProps;
  currentPosition: number;
  totalCount: number;
  slots?: {
    standUpMemberDetailCardContentProps?: Partial<StandUpMemberDetailCardContentProps>;
  };
  cardSlots?: CardProps['slots'];
}

const StandUpMemberDetail = ({
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
  standUpMemberDetailContent,
  currentMember,
  currentPosition,
  totalCount,
  slots,
  cardSlots,
  ...props
}: StandUpMemberDetailProps) => {
  const { standUpMemberDetailCardContentProps } = slots || {};
  return (
    <Card
      {...props}
      slots={cardSlots!}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: responsiveSpacing,
        border: theme.border.outlinedButton,
        borderRadius: theme.borderRadius.md,
        boxShadow: theme.customShadows.xs,
        ...props.sx
      }}
    >
      <StandUpMemberDetailCardContent
        isMember={currentMember && member && currentMember.id === member.id}
        member={member}
        onBack={onBack}
        onNext={onNext}
        canGoBack={canGoBack}
        canGoNext={canGoNext}
        tipVisible={tipVisible}
        handleClose={handleClose}
        theme={theme}
        showEditButton={showEditButton}
        editButtonProps={editButtonProps}
        memberButtonProps={memberButtonProps}
        currentPosition={currentPosition}
        totalCount={totalCount}
        {...standUpMemberDetailCardContentProps}
      >
        {member && member.standUpCompletedAt ? (
          standUpMemberDetailContent
        ) : (
          <></>
        )}
      </StandUpMemberDetailCardContent>
    </Card>
  );
};

export default StandUpMemberDetail;
