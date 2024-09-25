import { ComponentMeta, Story } from '@storybook/react';
import {
  CheckCircleIcon,
  XCloseIcon
} from 'src/components/particles/theme/overrides/CustomIcons';
import Button, { ButtonProps } from './Button';

// import {
//   CheckCircleIcon,
//   XCloseIcon
// } from 'src/components/particles/theme/overrides/CustomIcons';
// // import { CircularProgress } from '../CircularProgress/CircularProgress';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Button/Button',
  component: Button
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({ title: 'Primary' });
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: 'contained',
  label: 'Button CTA'
};

export const Secondary = Template.bind({ title: 'Secondary' });
Secondary.args = {
  variant: 'contained',
  color: 'secondary',
  label: 'Button CTA'
};

// const IconStory: Story<ButtonProps> = ({ data, ...args }: any) => {
//   return <Button {...args} />;
// };

export const StartIcon = Template.bind({});
StartIcon.args = {
  variant: 'contained',
  label: 'Button CTA',
  startIcon: <CheckCircleIcon />
};

export const HideBoxshadow = Template.bind({});
HideBoxshadow.args = {
  variant: 'contained',
  label: 'Button CTA',
  hideBoxshadow: true
};

export const EndIcon = Template.bind({ title: 'EndIcon' });
EndIcon.args = {
  variant: 'contained',
  label: 'Button CTA',
  endIcon: <CheckCircleIcon />
};

// export const LoadingButton = () => {
//   const [isLoading, setIsLoading] = useState(false);

//   // Sets a click handler to change the loading state
//   const handleOnChange = () => {
//     setIsLoading(!isLoading);
//   };
//   return (
//     <Button
//       {...Primary.args}
//       onClick={handleOnChange}
//       endIcon={isLoading && <CircularProgress color="inherit" size={20} />}
//     />
//   );
// };

// export const IconOnly = Template.bind({ title: 'IconOnly' });
// IconOnly.args = {
//   variant: 'contained',
//   label: '',
//   endIcon: <CircularProgress color="inherit" size={20} />
// };

const CloseStory: Story<ButtonProps> = ({ data, ...args }: any) => {
  return <Button {...args} startIcon={<XCloseIcon />} />;
};

export const Close = CloseStory.bind({ title: 'Close' });
Close.args = {
  variant: 'contained',
  label: ''
};
