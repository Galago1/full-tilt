import type { Story, ComponentMeta } from '@storybook/react';
import type { MediaCardWithContentProps } from './MediaCardWithContent';
import MediaCardWithContent from './MediaCardWithContent';
import img from 'src/assets/images/blurbackground.png';
import { Theme } from '@mui/material';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Cards/Media Cards With Content',
  component: MediaCardWithContent
} as ComponentMeta<typeof MediaCardWithContent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<MediaCardWithContentProps> = (args) => (
  <MediaCardWithContent {...args} />
);

export const InlineText = Template.bind({});
InlineText.args = {
  sx: { width: 300 },
  avatarAndTextProps: {
    title: '$400',

    titleTypography: {
      variant: 'textXlSemibold',
      mr: (theme: Theme) => theme.spacing(1)
    }
  },
  dots: [
    { left: '5%', top: '5%' },
    { left: '5%', top: '5%' }
  ],
  cardContentSx: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  skeletonImageProps: {
    src: img,
    skeletonProps: {
      width: 300,
      height: 300
    }
  }
};

export const VerticalText = Template.bind({});
VerticalText.args = {
  sx: { width: 300 },
  avatarAndTextProps: {
    title: '$400',

    titleTypography: {
      variant: 'textXlSemibold',
      mr: (theme: Theme) => theme.spacing(1)
    },
    subtitle: 'AUD Total'
  },
  skeletonImageProps: {
    src: img,
    skeletonProps: {
      width: 300,
      height: 300
    }
  }
};

export const MediaOnly = Template.bind({});
MediaOnly.args = {
  sx: { width: 300 },
  skeletonImageProps: {
    src: img,
    skeletonProps: {
      width: 300,
      height: 300
    }
  },
  chipProps: {
    label: '35',
    sx: {
      position: 'absolute',
      bottom: (theme: Theme) => theme.spacing(2),
      right: (theme: Theme) => theme.spacing(2),
      '&': {
        backgroundColor: (theme: Theme) => theme.palette.grey[500_80]
      }
    }
  }
};
