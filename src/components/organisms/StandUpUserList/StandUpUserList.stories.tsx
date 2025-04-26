import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Theme,
  Typography
} from '@mui/material';
import { Story } from '@storybook/react';
import { SelectOption } from 'src/components/atoms/InputBase/SelectInputBase/SelectInputBase';
import { ThemeProvider } from 'src/components/particles';
import { Edit05Icon } from 'src/components/particles/theme/icons/General/edit-05';
import { DateFormat } from 'src/types/dateFns';
import { formatDate } from 'src/utils/date';
import StandUpUserList, {
  StandUpUserListProps,
  TeamMember
} from './StandUpUserList';
import { responsiveSpacingSmall } from 'src/components/particles/theme/spacing';
import { AvatarAndText } from 'src/components/molecules';
import { CardHeaderProps } from 'src/components/molecules/Card/CardHeader/CardHeader';
const image = 'https://robohash.org/WTN.png?set=set1';

export default {
  title: 'Organisms/StandUpUserList',
  component: StandUpUserList
};

const createDate = (offset = 0, format: DateFormat = DateFormat.ISO8601) => {
  const date = new Date();
  date.setDate(date.getDate() + offset);
  // return formatDate(date, DateFormat.ISO8601);
  return formatDate(date, format);
};

const today = createDate(0, DateFormat.MDY);
const standUpCompletedAt = createDate(-1);
const yesterday = createDate(-1);
// const tomorrow = createDate(1);

const activeTimestamp = new Date();
activeTimestamp.setMinutes(activeTimestamp.getMinutes());
const awayTimeStamp = new Date();
awayTimeStamp.setMinutes(awayTimeStamp.getMinutes() - 6);
const offlineTimeStamp = new Date();
offlineTimeStamp.setMinutes(offlineTimeStamp.getMinutes() - 16);

const teamMembers: TeamMember[] = [
  {
    id: 'asdcad',
    name: 'Phoenix Baker First',
    imageUrl: image,
    status: 'Active',
    team: 'Product',
    teamId: 'asdc',
    standUpCompletedAt: null,
    standUpCompletedAtTime: null,
    standUpContent: [
      'Increase team health and trust.',
      'Update our company Vision.',
      'Resolve all material issues.'
    ],
    lastSeen: activeTimestamp.toISOString()
  },
  {
    id: 'asdcadasdcasd',
    name: 'Phoenix Baker',
    imageUrl: image,
    status: 'Active',
    team: 'Product',
    teamId: 'asdc',
    standUpCompletedAt: standUpCompletedAt,
    standUpCompletedAtTime: '12:00 AM',
    standUpContent: [
      'Increase team health and trust.',
      'Update our company Vision.',
      'Resolve all material issues.'
    ],
    lastSeen: activeTimestamp.toISOString()
  },
  {
    id: 'asdcasdcad',
    name: 'Rosalee Melvin',
    status: 'On leave',
    team: 'HR',
    teamId: 'asdasdcc',
    standUpCompletedAt: yesterday,
    standUpCompletedAtTime: '4:34AM',
    standUpContent: [
      'Prepare onboarding materials for new hires.',
      'Review company policies.',
      'Address employee concerns.'
    ],
    lastSeen: awayTimeStamp.toISOString()
  }
];

const Template: Story<StandUpUserListProps> = (args) => (
  <Box sx={{ height: '100vh' }}>
    <ThemeProvider>
      <StandUpUserList {...args} />
    </ThemeProvider>
  </Box>
);

const teamsOptions: SelectOption[] = [
  { value: 'Engineering', label: { value: 'Engineering' } }
];

export const Default = Template.bind({});
Default.args = {
  // sx: { border: 'none', boxShadow: 'none' },

  teamsOptions: teamsOptions,
  teamMembers: teamMembers,
  currentMember: teamMembers[0],
  slots: {
    editButtonProps: {
      label: <Edit05Icon />,
      color: 'secondary',
      variant: 'outlined',
      size: 'small',
      sx: {
        borderRadius: '6px'
      }
    },
    standUpUserListTeamMembersProps: {
      customHeader: (
        <AvatarAndText
          title={'Members'}
          titleTypography={{ variant: 'textMdRegular', lineHeight: '27px' }}
        ></AvatarAndText>
      ),
      sx: {
        border: 'none',
        boxShadow: 'none',
        borderRight: {
          xs: 'none',
          sm: 'none',
          md: (theme: Theme) => theme.border.outlinedButton
        }
      },
      cardSlots: {
        cardContentProps: {
          sx: { px: 2, py: 0 }
        },
        cardHeaderProps: {
          paddingBottom: { xs: 8 / 8 }
        } as CardHeaderProps
      },
      showTeamMembersHeader: false,
      showTeamSelect: false
    },
    standUpMemberDetailProps: {
      sx: {
        border: 'none',
        boxShadow: 'none',
        p: responsiveSpacingSmall,
        '&': {
          pt: { xs: 8 / 8 }
        }
      }
    }
  }
};
export const Controlled = Template.bind({});
Controlled.args = {
  teamMembers: teamMembers,
  teamsOptions: teamsOptions,
  showTeamSelect: false,
  hideShowEditButton: true,
  initialDate: today,
  currentMember: teamMembers[0],
  memberButtonProps: { label: 'Complete Stand Up' },
  slots: {
    standUpMemberDetailContent: (
      <>
        <Typography variant="textXlSemibold">
          Stand Up Content Results
        </Typography>
        <List dense>
          <ListItem key={0}>
            <ListItemIcon sx={{ minWidth: 'auto' }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: 'greyiron.600',
                  flexShrink: 0
                }}
              />
            </ListItemIcon>
            <ListItemText primary={'Stand Up Done!'} />
          </ListItem>
        </List>
      </>
    ),
    editButtonProps: {
      label: <Edit05Icon />,
      color: 'secondary',
      variant: 'outlined',
      size: 'small',
      sx: {
        borderRadius: '6px'
      }
    }
  },
  showEditFor: (member) => {
    return true;
  },
  onEdit: (member) => {}
};
