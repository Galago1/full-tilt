import type { ComponentMeta, Story } from '@storybook/react';
import { useState } from 'react';
import type { LoginProps } from './Login';
import Login from './Login';
import image from 'src/assets/images/testbg.png';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Templates/Login',
  component: Login,
  parameters: {
    layout: 'fullscreen'
  }
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof Login>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<LoginProps> = (args) => {
  const [fadeToggle, setFadeToggle] = useState(true);
  const [showLogin, setShowLogin] = useState(args.showLogin ?? true);
  const submitLogin = () => {
    setFadeToggle(false);
    setTimeout(() => {
      setFadeToggle(true);
      setShowLogin(false);
    }, 300);
  };
  const onGoBack = () => {
    setFadeToggle(false);
    setTimeout(() => {
      setFadeToggle(true);
      setShowLogin(true);
    }, 300);
  };
  return (
    <Login
      {...args}
      submitLogin={submitLogin}
      onGoBack={onGoBack}
      fadeToggle={fadeToggle}
      showLogin={showLogin}
      image={image}
    />
  );
};

export const LoginTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LoginTemplate.args = {};

export const ShowVerifyTemplate = Template.bind({});
ShowVerifyTemplate.args = {
  showLogin: false
};
