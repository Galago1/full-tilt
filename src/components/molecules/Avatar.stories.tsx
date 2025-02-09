import { AvatarGroup, Stack, Theme } from '@mui/material';
import type { ComponentMeta, Story } from '@storybook/react';
import image from 'src/assets/images/blurbackground.png';
import type { AvatarProps } from 'src/components/atoms/Avatar/Avatar';
import Avatar from 'src/components/atoms/Avatar/Avatar';
import Badge from 'src/components/atoms/Badge/Badge';
import { User01Icon } from '../particles/theme/icons/Users/user-01';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Avatar',
  component: Avatar
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // sx: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof Avatar>;

const TemplateGroupedAvatar: Story<{
  avatarOne: AvatarProps;
  avatarTwo: AvatarProps;
  avatarThree: AvatarProps;
  avatarFour: AvatarProps;
  avatarFive: AvatarProps;
  avatarSix: AvatarProps;
}> = ({
  avatarOne,
  avatarTwo,
  avatarThree,
  avatarFour,
  avatarFive,
  avatarSix
}) => {
  return (
    <AvatarGroup max={4}>
      <Avatar {...avatarOne} />
      <Avatar {...avatarTwo} />
      <Avatar {...avatarThree} />
      <Avatar {...avatarFour} />
      <Avatar {...avatarFive} />
      <Avatar {...avatarSix} />
      <Avatar {...avatarSix} />
    </AvatarGroup>
  );
};

export const GroupedAvatars = TemplateGroupedAvatar.bind({});
GroupedAvatars.args = {
  avatarOne: {
    alt: 'Eduardo',
    src: image as unknown as string
  },
  avatarTwo: {
    children: <>OP</>,
    sx: { bgcolor: '#1890FF', color: 'white' }
  },
  avatarThree: {
    alt: 'Eduardo',
    src: image as unknown as string
  },
  avatarFour: {
    children: <>CP</>,
    sx: { bgcolor: '#54D632', color: 'black' }
  },
  avatarFive: {
    children: <>ZP</>,
    sx: { bgcolor: '#FFC107', color: 'black' }
  },
  avatarSix: {
    children: <>OH</>,
    sx: { bgcolor: '#FF4842', color: 'white' }
  }
};

const TemplateBadgeAvatar: Story<{
  avatarOne: AvatarProps;
  avatarTwo: AvatarProps;
  avatarThree: AvatarProps;
  avatarFour: AvatarProps;
  avatarFive: AvatarProps;
}> = ({ avatarOne, avatarTwo, avatarThree, avatarFour, avatarFive }) => {
  return (
    <Stack direction="row" spacing={2}>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={<Avatar {...avatarOne} />}
      >
        <Avatar {...avatarTwo} />
      </Badge>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
        color="success"
      >
        <Avatar {...avatarTwo} />
      </Badge>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={<Avatar {...avatarThree} />}
      >
        <Avatar {...avatarTwo} />
      </Badge>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={<Avatar {...avatarFour} />}
      >
        <Avatar {...avatarTwo} />
      </Badge>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={<Avatar {...avatarFive} />}
      >
        <Avatar {...avatarTwo} />
      </Badge>
    </Stack>
  );
};

export const BadgeAvatars = TemplateBadgeAvatar.bind({});
BadgeAvatars.args = {
  avatarOne: {
    alt: 'Eduardo',
    src: image as unknown as string,
    sx: {
      width: (theme: Theme) => theme.spacing(2.75),
      height: (theme: Theme) => theme.spacing(2.75),
      border: `2px solid black`
    }
  },
  avatarTwo: {
    alt: 'Eduardo',
    src: image as unknown as string
  },
  avatarThree: {
    children: <User01Icon />,
    sx: {
      bgcolor: 'white',
      color: '#FFC107',
      width: (theme: Theme) => theme.spacing(1.875),
      height: (theme: Theme) => theme.spacing(1.875)
    }
  },
  avatarFour: {
    children: <User01Icon />,
    sx: {
      bgcolor: 'white',
      color: '#FF4842',
      width: (theme: Theme) => theme.spacing(1.875),
      height: (theme: Theme) => theme.spacing(1.875)
    }
  },
  avatarFive: {
    sx: {
      bgcolor: 'white',
      width: (theme: Theme) => theme.spacing(1.875),
      height: (theme: Theme) => theme.spacing(1.875),
      border: `2px solid grey`
    }
  }
};
