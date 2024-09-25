import type { ComponentMeta, Story } from '@storybook/react';
import { useState } from 'react';
import type { TabsProps } from './Tabs';
import Tabs from './Tabs';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Tabs',
  component: Tabs
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof Tabs>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<TabsProps> = (args) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return <Tabs {...args} value={value} onChange={handleChange} />;
};

export const Primary = Template.bind({});
Primary.args = {
  tabs: [{ label: 'Uno' }, { label: 'Dos' }, { label: 'Tres' }]
};

export const Secondary = Template.bind({});
Secondary.args = {
  tabs: [{ label: 'Uno' }, { label: 'Dos' }, { label: 'Tres' }],
  textColor: 'secondary',
  hideIndicator: true
};

export const HideIndicator = Template.bind({});
HideIndicator.args = {
  tabs: [{ label: 'Uno' }, { label: 'Dos' }, { label: 'Tres' }],
  hideIndicator: true
};

export const ShowBackground = Template.bind({});
ShowBackground.args = {
  tabs: [{ label: 'Uno' }, { label: 'Dos' }, { label: 'Tres' }],
  showBackground: true
};

export const ShowBackgroundWithoutIndicator = Template.bind({});
ShowBackgroundWithoutIndicator.args = {
  tabs: [{ label: 'Uno' }, { label: 'Dos' }, { label: 'Tres' }],
  hideIndicator: true,
  showBackground: true
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  sx: {
    padding: 0.5,
    '&.show-background .MuiTab-root.Mui-selected': {
      backgroundColor: 'primary.lighter'
    }
  },
  tabs: [
    { label: 'My details' },
    { label: 'Profile' },
    { label: 'Password' },
    { label: 'Team' },
    { label: 'Plan' },
    { label: 'Other' }
  ],
  hideIndicator: true,
  showBackground: true,
  showMobileDropdown: false,
  variant: 'fullWidth'
};

export const FullWidthAndBorder = Template.bind({});
FullWidthAndBorder.args = {
  sx: {
    backgroundColor: 'grey.25',
    border: (theme) => `1px solid ${theme.palette.grey[200]}`,
    padding: 0.5,
    '&.show-background .MuiTab-root.Mui-selected': {
      backgroundColor: 'primary.lighter'
    }
  },
  tabs: [
    { label: 'My details' },
    { label: 'Profile' },
    { label: 'Password' },
    { label: 'Team' },
    { label: 'Plan' },
    { label: 'Other' }
  ],
  hideIndicator: true,
  showBackground: true,
  showMobileDropdown: false,
  variant: 'fullWidth'
};

export const Scrollable = Template.bind({});
Scrollable.args = {
  sx: {
    padding: 0.5,
    '&.show-background .MuiTab-root.Mui-selected': {
      backgroundColor: 'primary.lighter'
    },
    '& .MuiTab-root': {
      minWidth: (theme) => theme.spacing(30)
    }
  },
  color: 'primary',
  tabs: [
    { label: 'My details' },
    { label: 'Profile' },
    { label: 'Password' },
    { label: 'Team' },
    { label: 'Plan' },
    { label: 'Other' }
  ],
  showBackground: true,
  showMobileDropdown: false,
  scrollButtons: false,
  hideIndicator: true,
  variant: 'scrollable'
};
export const ScrollableAndBorder = Template.bind({});
ScrollableAndBorder.args = {
  sx: {
    backgroundColor: 'grey.25',
    border: (theme) => `1px solid ${theme.palette.grey[200]}`,
    padding: 0.5,
    '&.show-background .MuiTab-root.Mui-selected': {
      backgroundColor: 'primary.lighter'
    },
    '& .MuiTab-root': {
      minWidth: (theme) => theme.spacing(30)
    }
  },
  color: 'primary',
  tabs: [
    { label: 'My details' },
    { label: 'Profile' },
    { label: 'Password' },
    { label: 'Team' },
    { label: 'Plan' },
    { label: 'Other' }
  ],
  showBackground: true,
  showMobileDropdown: false,
  scrollButtons: false,
  hideIndicator: true,
  variant: 'scrollable'
};

export const BottomBorder = Template.bind({});
BottomBorder.args = {
  tabs: [{ label: 'Uno' }, { label: 'Dos' }, { label: 'Tres' }],
  showBackground: true,
  showBottomBorder: true,
  variant: 'fullWidth'
};

export const PrimaryVertical = Template.bind({});
PrimaryVertical.args = {
  tabs: [{ label: 'Uno' }, { label: 'Dos' }, { label: 'Tres' }],
  showBackground: true,
  hideIndicator: true,
  orientation: 'vertical'
};

export const SecondaryVertical = Template.bind({});
SecondaryVertical.args = {
  tabs: [{ label: 'Uno' }, { label: 'Dos' }, { label: 'Tres' }],
  textColor: 'secondary',
  showBackground: true,
  hideIndicator: true,
  orientation: 'vertical'
};
