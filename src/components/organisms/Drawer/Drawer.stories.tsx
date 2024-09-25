import { Box, Grid, Theme, Typography } from '@mui/material';
import type { Story, ComponentMeta } from '@storybook/react';
import Button from 'src/components/atoms/Button/Button';
import Divider from 'src/components/atoms/Divider/Divider';
import AvatarAndText from 'src/components/molecules/AvatarAndText/AvatarAndText';
import { WithClosebutton } from 'src/components/molecules/AvatarAndText/AvatarAndText.stories';
import ButtonList from 'src/components/molecules/ButtonList/ButtonList';
import { useState } from 'react';
import type { DrawerProps } from './Drawer';
import Drawer from './Drawer';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/Drawer',
  component: Drawer
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof Drawer>;

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const Content = () => (
  <Grid container flexDirection={'column'}>
    <Grid item>
      <Typography variant={'textSmRegular'} fontWeight={'medium'}>
        Label
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant={'textSmRegular'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio dictumst
        tempus magna elit cras posuere cursus pulvinar id. Facilisis at eu amet
        ornare enim arcu malesuada rutrum a.
      </Typography>
    </Grid>
    <Grid item sx={{ pt: 2 }}>
      <Box
        sx={{
          backgroundColor: (theme: Theme) => theme.palette.grey[50],
          borderRadius: 0,
          width: { xs: '100%' },
          height: 80
        }}
      ></Box>
    </Grid>
  </Grid>
);

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<DrawerProps> = (args) => {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      setState({ ...state, [anchor]: open });
    };

  return (
    <>
      <Button
        onClick={toggleDrawer(args.anchor as Anchor, true)}
        data-testid="open-drawer"
        label={args.anchor}
        variant={'contained'}
      />

      <Drawer
        {...args}
        onClose={toggleDrawer(args.anchor as Anchor, false)}
        disableScrollLock={true}
        open={state[args.anchor as Anchor]}
      />
    </>
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  showActions: true,
  hideBackdrop: true,
  showHeader: true,
  slots: {
    drawerHeaderProps: {
      slots: {
        avatarAndTextProps: {
          title: 'Drawer Header'
          // subtitle: 'Subtitle'
        }
      }
    }
  },
  children: (
    <>
      <Grid
        data-testid="custom-element"
        container
        flexDirection={'column'}
        sx={{ height: '100%', maxWidth: { xs: 352, sm: 352, md: 400 } }}
        flexWrap={'nowrap'}
      >
        {/* content */}
        <Grid item flexGrow={1}>
          <Content />
          <Divider sx={{ my: 3 }} />
          <Content />
          <Divider sx={{ my: 3 }} />
          <Content />
        </Grid>
      </Grid>
    </>
  ),
  anchor: 'left'
};

export const PositionedBottom = Template.bind({});
PositionedBottom.args = {
  showActions: true,
  hideBackdrop: true,
  children: (
    <>
      <Grid
        container
        flexDirection={'column'}
        sx={{ height: '100%', maxWidth: { xs: '100%' } }}
        flexWrap={'nowrap'}
      >
        {/* content */}
        <Grid
          item
          sx={{
            // paddingX: responåsiveStyleBase,
            pt: { xs: 0, sm: 0, md: 0 }
          }}
          // flexGrow={1}
        >
          <Content />
          <Divider sx={{ my: 3 }} />
          <Content />
          <Divider sx={{ my: 3 }} />
          <Content />
        </Grid>
      </Grid>
    </>
  ),
  anchor: 'bottom'
};

export const PositionedRight = Template.bind({});
PositionedRight.args = {
  showActions: true,
  hideBackdrop: true,
  children: (
    <>
      <Grid
        data-testid="custom-element"
        container
        flexDirection={'column'}
        sx={{ height: '100%', maxWidth: { xs: 352, sm: 352, md: 400 } }}
        flexWrap={'nowrap'}
      >
        {/* content */}
        <Grid item flexGrow={1}>
          <Content />
          <Divider sx={{ my: 3 }} />
          <Content />
          <Divider sx={{ my: 3 }} />
          <Content />
        </Grid>
      </Grid>
    </>
  ),
  anchor: 'right'
};
