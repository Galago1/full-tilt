import {
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  useTheme
} from '@mui/material';
import { Fragment } from 'react';
import { Avatar, Badge } from 'src/components/atoms';
import { AvatarProps } from 'src/components/atoms/Avatar/Avatar';
import { VerifiedTickIcon } from 'src/components/particles/theme/overrides/CustomIcons';
import { rowInitials } from 'src/utils/users/initials';
import { TeamMember } from './StandUpUserList';

interface StandUpUserListContentProps {
  selectedIndex?: number | null;
  filteredMembers?: TeamMember[];
  setSelectedIndex?: (index: number) => void;
}

const StandUpUserListContent = ({
  selectedIndex,
  filteredMembers,
  setSelectedIndex
}: StandUpUserListContentProps) => {
  const theme = useTheme();
  const grey700 = theme.palette.grey[800];
  return (
    <List
      sx={{
        flex: 1,
        overflowY: 'auto',
        py: 0
      }}
    >
      {(filteredMembers || []).map((member, index) => {
        const avatarProps: AvatarProps = {
          alt: member.name,
          src: member.imageUrl,
          sx: { width: 20, height: 20, fontSize: 14 },
          children: rowInitials({ name: member.name }, true)
        };

        const isSelected = selectedIndex === index;

        return (
          <Fragment key={member.id}>
            <ListItem
              onClick={() => setSelectedIndex?.(index)}
              sx={{
                py: 3 / 8,
                px: 0.5,
                cursor: 'pointer',
                borderRadius: (theme) => theme.borderRadius.xs,
                backgroundColor: isSelected ? 'grey.50' : 'transparent',
                '&:hover': {
                  backgroundColor: 'grey.50'
                }
              }}
            >
              <Grid container alignItems="center" wrap="nowrap">
                <Grid item sx={{ position: 'relative' }}>
                  <ListItemAvatar>
                    <Avatar {...avatarProps} />
                  </ListItemAvatar>
                </Grid>
                <Grid item xs zeroMinWidth>
                  <ListItemText
                    primary={member.name}
                    primaryTypographyProps={{
                      noWrap: true,
                      variant: 'textSmMedium'
                    }}
                    sx={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}
                  />
                </Grid>
                <Grid item sx={{ position: 'relative' }}>
                  <ListItemAvatar>
                    <Badge
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                      badgeContent={
                        member.standUpCompletedAt ? (
                          <VerifiedTickIcon
                            sx={{ width: 16, height: 16 }}
                            fill={grey700}
                          />
                        ) : undefined
                      }
                      sx={{
                        '& .MuiBadge-badge': {
                          p: 0,
                          height: 4,
                          width: 4,
                          minWidth: 4,
                          transform: 'none'
                        }
                      }}
                    ></Badge>
                  </ListItemAvatar>
                </Grid>
              </Grid>
            </ListItem>
          </Fragment>
        );
      })}
    </List>
  );
};

export default StandUpUserListContent;
