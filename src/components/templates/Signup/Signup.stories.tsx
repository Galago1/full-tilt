import type { ComponentMeta, Story } from '@storybook/react';
import { useState } from 'react';
import type { SignupProps } from './Signup';
import Signup from './Signup';
import image from 'src/assets/images/testbg.png';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Templates/Signup',
  component: Signup,
  parameters: {
    layout: 'fullscreen'
  }
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof Signup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<SignupProps> = (args) => {
  const [fadeToggle, setFadeToggle] = useState(true);
  const [showSignup, setShowSignup] = useState(args.showSignup ?? true);
  const submitSignup = () => {
    setFadeToggle(false);
    setTimeout(() => {
      setFadeToggle(true);
      setShowSignup(false);
    }, 300);
  };
  const onGoBack = () => {
    setFadeToggle(false);
    setTimeout(() => {
      setFadeToggle(true);
      setShowSignup(true);
    }, 300);
  };
  return (
    <Signup
      {...args}
      submitSignup={submitSignup}
      onGoBack={onGoBack}
      fadeToggle={fadeToggle}
      showSignup={showSignup}
      image={image}
    />
  );
};

export const SignupTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SignupTemplate.args = {};

export const ShowVerifyTemplate = Template.bind({});
ShowVerifyTemplate.args = {
  showSignup: false
};
