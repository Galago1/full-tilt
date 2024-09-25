import { Box } from '@mui/material';
import type { ComponentMeta, Story } from '@storybook/react';
import ParallaxHero, { ParallaxHeroProps } from './ParallaxHero';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Parallax Hero',
  component: ParallaxHero
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof ParallaxHero>;

const Template: Story<ParallaxHeroProps> = (args) => {
  return (
    <Box sx={{ width: '100%', height: 1500 }}>
      <ParallaxHero {...args} />
    </Box>
  );
};

export const Initial = Template.bind({});
Initial.args = {
  headerBoxProps: {
    backgroundImage: 'url(https://source.unsplash.com/random/1920x1080)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'inherit',
    height: '50vh',
    width: '100%',
    position: 'relative',
    overflowX: 'hidden',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transformStyle: 'preserve-3d',
    zIndex: '-1'
  },
  boxSx: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto',
    width: '100%',
    maxWidth: '600px',
    textAlign: 'center',
    color: 'white'
  },
  avatarAndTextProps: {
    title: 'Bill Gates',
    subtitle: 'Founder of TMI',
    titleTypography: {
      variant: 'display2xlBold'
    },
    subtitleTypography: {
      variant: 'displayXlBold'
    }
  }
};

export const ImageOnly = Template.bind({});
ImageOnly.args = {
  headerBoxProps: {
    backgroundImage: 'url(https://source.unsplash.com/random/1920x1080)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'inherit',

    height: 400,
    width: '100%',
    position: 'relative',
    overflowX: 'hidden',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transformStyle: 'preserve-3d',
    zIndex: '-1'
  }
};
