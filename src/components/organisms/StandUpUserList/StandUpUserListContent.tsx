import {
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@mui/material';
import { Fragment } from 'react';
import { Avatar, Badge, Divider } from 'src/components/atoms';
import { AvatarProps } from 'src/components/atoms/Avatar/Avatar';
import { VerifiedTickIcon } from 'src/components/particles/theme/overrides/CustomIcons';
import { TeamMember } from './StandUpUserList';

interface StandUpUserListContentProps {
  selectedIndex: number | null;
  filteredMembers: TeamMember[];
  setSelectedIndex: (index: number) => void;
}

const StandUpUserListContent = ({
  selectedIndex,
  filteredMembers,
  setSelectedIndex
}: StandUpUserListContentProps) => {
  return (
    <List
      sx={{
        flex: 1,
        overflowY: 'auto',
        px: 2
      }}
    >
      {filteredMembers.map((member, index) => {
        const avatarProps: AvatarProps = {
          alt: member.name,
          src: member.imageUrl,
          children: member.name
            .split(' ')
            .map((n) => n[0])
            .join('')
        };

        const isSelected = selectedIndex === index;
        console.log('member.standUpCompletedAt', member.standUpCompletedAt);

        return (
          <Fragment key={member.id}>
            <ListItem
              onClick={() => setSelectedIndex(index)}
              sx={{
                py: 1,
                px: 0.5,
                cursor: 'pointer',
                backgroundColor: isSelected ? 'grey.50' : 'transparent',
                '&:hover': {
                  backgroundColor: 'grey.50'
                }
              }}
            >
              <Grid container alignItems="center" wrap="nowrap" gap={1}>
                <Grid item sx={{ position: 'relative' }}>
                  <ListItemAvatar>
                    <Badge
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                      badgeContent={
                        member.standUpCompletedAt ? (
                          <VerifiedTickIcon sx={{ width: 20, height: 20 }} />
                        ) : undefined
                      }
                      sx={{
                        '& .MuiBadge-badge': {
                          p: 0,
                          height: 10,
                          width: 10,
                          minWidth: 10,
                          transform: 'none'
                        }
                      }}
                    >
                      <Avatar {...avatarProps} />
                    </Badge>
                  </ListItemAvatar>
                </Grid>
                <Grid item xs zeroMinWidth>
                  <ListItemText
                    primary={member.name}
                    primaryTypographyProps={{
                      noWrap: true,
                      variant: 'body2',
                      sx: { fontWeight: 'bold' }
                    }}
                    secondary={member.team}
                    sx={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}
                  />
                </Grid>
              </Grid>
            </ListItem>
            {index !== filteredMembers.length - 1 && <Divider />}
          </Fragment>
        );
      })}
    </List>
  );
};

export default StandUpUserListContent;
