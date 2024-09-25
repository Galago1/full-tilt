import type { Story, ComponentMeta } from '@storybook/react';
import type { SecondNavProps } from './SecondNav';
import SecondNav from './SecondNav';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/Second Nav',
  component: SecondNav
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof SecondNav>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<SecondNavProps> = (args) => <SecondNav {...args} />;

export const TwoButtons = Template.bind({});
TwoButtons.args = {
  slots: {
    buttonListProps: {
      buttons: [
        {
          label: 'Overview',
          color: 'secondary',
          variant: 'text'
        },
        {
          label: 'Orders',
          color: 'inherit',
          variant: 'contained',
          hideBoxshadow: true
        }
      ]
    }
  }
};

export const ThreeButtons = Template.bind({});
ThreeButtons.args = {
  slots: {
    buttonListProps: {
      buttons: [
        {
          label: 'Overview',
          color: 'secondary',
          variant: 'text'
        },
        {
          label: 'Notifications',
          color: 'secondary',
          variant: 'text'
        },
        {
          label: 'Analytics',
          color: 'inherit',
          variant: 'contained',
          hideBoxshadow: true
        }
      ]
    }
  }
};

export const NavWithBreadCrumbs = Template.bind({});
NavWithBreadCrumbs.args = {
  slots: {
    buttonListProps: {
      buttons: [
        {
          label: 'Overview',
          color: 'secondary',
          variant: 'text'
        },
        {
          label: 'Notifications',
          color: 'secondary',
          variant: 'text'
        },
        {
          label: 'Analytics',
          color: 'inherit',
          variant: 'contained',
          hideBoxshadow: true
        }
      ]
    },
    breadcrumbsProps: {
      breadcrumbs: [
        {
          label: 'Home',
          href: '/'
        },
        {
          label: 'Page 1',
          href: '/page1'
        },
        {
          label: 'Page 2',
          href: '/page2'
        }
      ]
    }
  }
};

export const FiveButtons = Template.bind({});
FiveButtons.args = {
  slots: {
    buttonListProps: {
      buttons: [
        {
          label: 'Overview',
          color: 'secondary',
          variant: 'text'
        },
        {
          label: 'Notifications',
          color: 'secondary',
          variant: 'text'
        },
        {
          label: 'Analytics',
          color: 'secondary',
          variant: 'text'
        },
        {
          label: 'Orders',
          color: 'inherit',
          variant: 'contained',
          hideBoxshadow: true
        },
        {
          label: 'Reports',
          color: 'secondary',
          variant: 'text'
        }
      ]
    }
  }
};
