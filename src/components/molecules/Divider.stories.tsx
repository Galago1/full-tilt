import {
  Avatar,
  Box,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Theme
} from '@mui/material';
import type { ComponentMeta, Story } from '@storybook/react';
import Chip from 'src/components/atoms/Chip/Chip';
import type { DividerProps } from 'src/components/atoms/Divider/Divider';
import Divider from 'src/components/atoms/Divider/Divider';
import {
  ImageIcon,
  UmbrellaIcon,
  WorkIcon
} from 'src/components/particles/theme/overrides/CustomIcons';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Divider',
  component: Divider
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof Divider>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const TemplateInsetDividers: Story<DividerProps> = (args) => {
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper'
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      <Divider {...args} />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
      </ListItem>
      <Divider {...args} />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <UmbrellaIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItem>
    </List>
  );
};

export const InsetDivider = TemplateInsetDividers.bind({});
InsetDivider.args = {
  variant: 'inset',
  component: 'li'
};

const Template: Story<typeof Divider> = (args) => {
  const { children, ...other } = args as any;
  return <Divider {...other}>{children}</Divider>;
};

export const TextDivider = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TextDivider.args = {
  textAlign: 'center',
  children: 'Text'
};

export const ChipDivider = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ChipDivider.args = {
  textAlign: 'center',
  children: <Chip label="Chip"></Chip>
};

const VerticalDividersWithText: Story<{
  dividerFour: DividerProps;
}> = ({ dividerFour }) => {
  const content = (
    <Box sx={{ margin: (theme: Theme) => theme.spacing(1.5) }}>
      {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
       Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
       Sed malesuada lobortis pretium.`}
    </Box>
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container>
        <Grid item xs>
          {content}
        </Grid>
        <Divider {...dividerFour}>VERTICAL</Divider>
        <Grid item xs>
          {content}
        </Grid>
      </Grid>
    </Box>
  );
};

export const VerticalDivider = VerticalDividersWithText.bind({});
VerticalDivider.args = {
  dividerFour: { orientation: 'vertical', flexItem: true }
};
