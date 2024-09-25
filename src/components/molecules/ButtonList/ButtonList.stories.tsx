import type { Story, ComponentMeta } from '@storybook/react';
import type { ButtonListProps } from './ButtonList';
import ButtonList from './ButtonList';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Button List',
  component: ButtonList
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof ButtonList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<ButtonListProps> = (args) => <ButtonList {...args} />;

export const LoginSignup = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LoginSignup.args = {
  buttons: [
    {
      label: 'Login',
      color: 'secondary',
      variant: 'text'
    },
    {
      label: 'Signup',
      color: 'primary',
      variant: 'contained'
    }
  ]
};

export const CancelConfirm = Template.bind({});
CancelConfirm.args = {
  buttons: [
    {
      label: 'Cancel',
      color: 'secondary',
      variant: 'outlined'
    },
    {
      label: 'Confirm',
      color: 'primary',
      variant: 'contained'
    }
  ]
};

export const ThreeButtons = Template.bind({});
ThreeButtons.args = {
  buttons: [
    {
      label: 'Login',
      color: 'secondary',
      variant: 'text'
    },
    {
      label: 'Other',
      color: 'secondary',
      variant: 'contained'
    },
    {
      label: 'Signup',
      color: 'primary',
      variant: 'contained'
    }
  ]
};
