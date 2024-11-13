import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Theme,
  Typography
} from '@mui/material';
import { Fragment } from 'react';
import { Avatar, Divider } from 'src/components/atoms';
import { AvatarProps } from 'src/components/atoms/Avatar/Avatar';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';
import { TeamMember } from './StandUpUserList';

const getStatusBadgeColor = (standUpCompletedAt: string | null): string => {
  return standUpCompletedAt ? 'success.500' : 'grey.500';
};

interface StandUpUserListContentProps {
  selectedIndex: number | null;
  filteredMembers: TeamMember[];
  setSelectedIndex: (index: number) => void;
  theme: Theme;
  formatStandUpTime: (
    standUpCompletedAt: string | null,
    hideIncomplete?: boolean
  ) => string;
}

const StandUpUserListContent = ({
  selectedIndex,
  filteredMembers,
  setSelectedIndex,
  theme,
  formatStandUpTime
}: StandUpUserListContentProps) => {
  return (
    <List
      sx={{
        flex: 1,
        overflowY: 'auto',
        px: responsiveSpacing
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

        return (
          <Fragment key={member.id}>
            <ListItem
              onClick={() => setSelectedIndex(index)}
              sx={{
                py: 1,
                px: 0.5,
                cursor: 'pointer',
                backgroundColor: isSelected ? 'grey.50' : 'transparent'
              }}
            >
              <Grid container alignItems="center" wrap="nowrap" gap={1}>
                <Grid item sx={{ position: 'relative' }}>
                  <ListItemAvatar>
                    <Avatar {...avatarProps} />
                    <Box
                      sx={{
                        position: 'absolute',
                        right: 0,
                        bottom: 0,
                        width: 10,
                        height: 10,
                        borderRadius: '50%',
                        border: `1px solid ${theme.palette.background.paper}`,
                        backgroundColor: getStatusBadgeColor(
                          member.standUpCompletedAt
                        )
                      }}
                    />
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
                {/* <Grid
                  item
                  sx={{
                    position: 'relative',
                    textWrap: 'nowrap',
                    display: 'flex',
                    alignSelf: 'baseline'
                  }}
                >
                  <Typography variant="caption">
                    {formatStandUpTime(member.standUpCompletedAt, true)}
                  </Typography>
                </Grid> */}
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
