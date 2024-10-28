import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material';
import { Story } from '@storybook/react';
import { Edit05Icon } from 'src/components/particles/theme/overrides/CustomIcons';
import { DateFormat } from 'src/types/dateFns';
import { formatDateIso } from 'src/utils/date';
import StandUpUserList, {
  StandUpUserListProps,
  TeamMember
} from './StandUpUserList';
import { SelectOption } from 'src/components/atoms/InputBase/SelectInputBase/SelectInputBase';
const image = 'https://robohash.org/WTN.png?set=set1';

export default {
  title: 'Organisms/StandUpUserList',
  component: StandUpUserList
};

const createDate = (offset = 0) => {
  const date = new Date();
  date.setDate(date.getDate() + offset);
  return formatDateIso(date, DateFormat.yyyyMMdd);
};

const today = createDate();
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
    standUpContent: [
      'Increase team health and trust.',
      'Update our company Vision.',
      'Resolve all material issues.'
    ],
    lastSeen: activeTimestamp.toISOString()
  },
  {
    id: 'asdcad',
    name: 'Phoenix Baker',
    imageUrl: image,
    status: 'Active',
    team: 'Product',
    teamId: 'asdc',
    standUpCompletedAt: today,
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
    <StandUpUserList {...args} />
  </Box>
);

const teamsOptions: SelectOption[] = [
  { value: 'Engineering', label: { value: 'Engineering' } }
];

export const Default = Template.bind({});
Default.args = {
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
    }
  }
};
export const Controlled = Template.bind({});
Controlled.args = {
  teamMembers: teamMembers,
  teamsOptions: teamsOptions,
  showTeamSelect: false,
  hideShowEditButton: true,
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
    console.log('Edit button clicked for:', member);
    return true;
  },
  onEdit: (member) => {
    console.log('Edit button clicked for:', member);
  }
};
