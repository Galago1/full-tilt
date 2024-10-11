import {
  Avatar,
  Grid,
  GridProps,
  IconButton,
  Typography,
  useTheme
} from '@mui/material';
import { filter } from 'lodash';
import { useState } from 'react';
import { Button, Divider } from 'src/components/atoms';
import { ButtonProps } from 'src/components/atoms/Button/Button';
import AvatarAndText from 'src/components/molecules/AvatarAndText/AvatarAndText';
import { Drawer } from 'src/components/organisms';
import {
  Mail01Icon,
  MarkerPinIcon,
  PhoneIcon,
  TrendUp01Icon,
  UsersIcon,
  XCloseIcon
} from 'src/components/particles/theme/overrides/CustomIcons';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';
import { rowInitials } from 'src/utils/users/initials';

interface Data {
  firstName: string;
  lastName: string;
  name: string;
  role: string;
  group: string;
  birthdate: string;
  workAnniversary: string;
  keyMetric: string;
  address: {
    city: string;
    state: string;
  };
  image: string;
  responsibility: string;
  reportsTo: {
    email: string;
    name: string;
    image: string;
  };
  metric: string;
}

export interface UserProfileCardProps {
  data: Data;
  isOpen: boolean;
  onClose: () => void;
  phoneIconClick?: () => void;
  emailIconClick?: () => void;
  slots: {
    fullProfileButtonProps?: ButtonProps;
    bannerGridProps?: GridProps;
  };
}

const UserProfileCard = ({
  data,
  isOpen,
  onClose,
  phoneIconClick,
  emailIconClick,
  slots
}: UserProfileCardProps) => {
  const { fullProfileButtonProps, bannerGridProps } = slots || {};
  const theme = useTheme();
  const [isTruncated, setIsTruncated] = useState(true);

  const truncateText = (text: string, length: number) =>
    isTruncated && text.length > length
      ? text.substring(0, length) + '...'
      : text;
  const showReadMore = data.responsibility.length > 238;

  return (
    <Drawer
      anchor="right"
      sx={{
        padding: 0,
        '& .MuiCardContent-root': {
          padding: 0,
          // width: theme.spacing(360 / 8)
          width: { xs: '100vw', sm: '100vw', md: theme.spacing(360 / 8) }
        }
      }}
      showActions={false}
      showClose={false}
      onClose={onClose}
      disableScrollLock={true}
      open={isOpen}
      slots={{
        boxProps: {
          sx: {
            // width: { xs: '100%', sm: 320 },
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            p: 0
          }
        },
        drawerHeaderProps: {
          paddingBottom: { xs: 0 }
        }
      }}
    >
      <>
        <Button
          label={<XCloseIcon />}
          variant={'text'}
          sx={{
            '&': {
              position: 'absolute',
              zIndex: 1,
              color: theme.palette.common.white,
              right: 0,
              top: 16
            }
          }}
        />
        <Grid
          sx={{
            position: 'relative',
            backgroundColor: 'greyiron.900',
            width: '100%',
            height: 120,
            ...bannerGridProps?.sx
          }}
          {...bannerGridProps}
        >
          <Avatar
            alt="Bill Gates"
            src={data.image}
            sx={{
              width: 96,
              height: 96,
              position: 'absolute',
              bottom: -60,
              left: 20,
              border: theme.border.userProfileAvatar,
              boxShadow: theme.customShadows.lg
            }}
          >
            {rowInitials({
              name: data.name
            })}
          </Avatar>
        </Grid>
        <Grid padding={theme.spacing(0, 2)}>
          <Grid
            container
            display={'flex'}
            justifyContent={'flex-end'}
            marginTop={3}
            gap={1.5}
          >
            {/* TODO: Make a IconButton variant */}
            {emailIconClick && (
              <IconButton
                sx={{
                  border: theme.border.userProfile,
                  borderRadius: theme.borderRadius.md
                }}
                onClick={emailIconClick}
              >
                <Mail01Icon />
              </IconButton>
            )}
            {phoneIconClick && (
              <IconButton
                sx={{
                  border: theme.border.userProfile,
                  borderRadius: theme.borderRadius.md
                }}
                onClick={phoneIconClick}
              >
                <PhoneIcon />
              </IconButton>
            )}
            {fullProfileButtonProps && <Button {...fullProfileButtonProps} />}
          </Grid>
          <Grid container flexDirection={'column'} sx={{ mt: 2 }}>
            <Typography
              variant="displayXsSemibold"
              sx={{ wordBreak: 'break-all' }}
            >
              {data.name}
            </Typography>
            <Typography
              variant="textMdRegular"
              color="text.secondary"
              sx={{ mt: 1, wordBreak: 'break-all' }}
            >
              {data.role}
            </Typography>
          </Grid>
          <Grid
            container
            gap={0.5}
            alignItems={'center'}
            padding={theme.spacing(2, 0)}
          >
            {data.group && (
              <Grid item>
                {/* TODO: Create a Badge Variant */}
                <Grid
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    border: theme.border.userProfile,
                    borderRadius: theme.borderRadius.sm,
                    '&': {
                      p: 0.25
                    }
                  }}
                >
                  <Grid
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      margin: theme.spacing(0, 0.25)
                    }}
                  >
                    <UsersIcon
                      sx={{
                        width: 12,
                        height: 12,
                        marginRight: 0.25
                      }}
                    />
                    <Typography variant="textXsRegular" color="text.primary">
                      {data.group}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            )}
            {(data.address.city || data.address.state) && (
              <Grid item>
                <Grid
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    border: theme.border.userProfile,
                    borderRadius: theme.borderRadius.sm,
                    '&': {
                      p: 0.25
                    }
                  }}
                >
                  <Grid
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      margin: theme.spacing(0, 0.25)
                    }}
                  >
                    <MarkerPinIcon
                      sx={{
                        width: 12,
                        height: 12,
                        marginRight: 0.25
                      }}
                    />
                    <Typography
                      variant="textXsRegular"
                      color="text.primary"
                      sx={{ wordBreak: 'break-all' }}
                    >
                      {filter([data.address.city, data.address.state]).join(
                        ', '
                      )}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Grid>
          <Grid container flexDirection={'column'} spacing={0}>
            <Grid item>
              <Typography
                variant="textSmMedium"
                paddingBottom={1}
                color="text.secondary"
              >
                Birthday
              </Typography>
            </Grid>
            <Grid item sx={{ mt: 0.5 }}>
              <Typography
                variant="textMdMedium"
                padding={theme.spacing(1, 0)}
                color="text.primary"
              >
                {data.birthdate || 'N/A'}
              </Typography>
            </Grid>
            <Grid item sx={{ mt: 1 }}>
              <Typography
                variant="textSmMedium"
                padding={theme.spacing(1, 0)}
                color="text.secondary"
              >
                Work Anniversary
              </Typography>
            </Grid>
            <Grid item sx={{ mt: 0.5 }}>
              <Typography
                variant="textMdMedium"
                color="text.primary"
                sx={{ mt: 1 }}
              >
                {data.workAnniversary || 'N/A'}
              </Typography>
            </Grid>
          </Grid>
          <Divider
            sx={{
              paddingTop: responsiveSpacing,
              marginBottom: responsiveSpacing
            }}
          />
          <Typography variant="textSmMedium" color="grey.900">
            Responsibility
          </Typography>
          <Grid>
            <Grid item>
              <Typography
                variant="textMdMedium"
                sx={{ whiteSpace: 'pre-line', wordBreak: 'break-all' }}
                color="text.primary"
              >
                {truncateText(data.responsibility, 238)}
              </Typography>
            </Grid>
            {showReadMore && (
              <Grid item marginTop={2.5}>
                {isTruncated && (
                  <Button
                    variant={'text'}
                    color="secondary"
                    onClick={() => setIsTruncated(!isTruncated)}
                  >
                    Read more
                  </Button>
                )}
                {!isTruncated && (
                  <Button
                    variant={'text'}
                    color="secondary"
                    onClick={() => setIsTruncated(!isTruncated)}
                  >
                    Read less
                  </Button>
                )}
              </Grid>
            )}
          </Grid>
          <Grid paddingTop={responsiveSpacing}>
            <Grid item>
              <Typography
                variant="textSmMedium"
                color="grey.900"
                sx={{ wordBreak: 'break-all' }}
              >
                {data.firstName}’s Key Metric
              </Typography>
            </Grid>
            {data.metric && (
              <Grid item display={'flex'} alignItems={'center'} paddingTop={2}>
                {/* TODO: Make a featured icon variant */}
                <Grid
                  sx={{
                    border: theme.border.outlinedButton,
                    borderRadius: theme.borderRadius.md,
                    width: 40,
                    height: 40,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <TrendUp01Icon sx={{ width: 20, height: 20 }} />
                </Grid>
                <Typography
                  variant="textMdMedium"
                  paddingLeft={1.5}
                  color="text.primary"
                  sx={{ wordBreak: 'break-all' }}
                >
                  {data.metric}
                </Typography>
              </Grid>
            )}
          </Grid>
          {data.reportsTo.name && (
            <Grid paddingTop={2}>
              <Grid item marginBottom={2}>
                <Typography variant="textSmRegular" color="grey.900">
                  Reports To
                </Typography>
              </Grid>
              <Grid item display={'flex'}>
                <AvatarAndText
                  gap={1}
                  avatarProps={{
                    alt: data.reportsTo.name,
                    src: data.reportsTo.image,
                    sx: {
                      width: 40,
                      height: 40,
                      border: theme.border.userProfileAvatarTiny
                    }
                  }}
                  title={data.reportsTo.name}
                  subtitle={data.reportsTo.email}
                />
              </Grid>
            </Grid>
          )}
        </Grid>
      </>
    </Drawer>
  );
};

export default UserProfileCard;
