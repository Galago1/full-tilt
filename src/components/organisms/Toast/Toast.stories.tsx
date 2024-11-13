import Toast, { ToastrProps } from './Toast';
import { ComponentMeta, Story } from '@storybook/react';
import ThemeProvider from '../../particles/theme';
import ToastProvider from 'src/providers/ToastProvider/ToastProvider';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/Toast',
  component: Toast
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof Toast>;

const Template: Story<any> = (args) => {
  const { init } = args;
  return (
    <ThemeProvider isDarkMode={false}>
      <ToastProvider
        init={{
          duration: undefined,
          position: init?.position || {
            vertical: 'top',
            horizontal: 'center'
          },
          visible: true
        }}
      >
        <Toast />
      </ToastProvider>
    </ThemeProvider>
  );
};

export const Success = Template.bind({});
Success.args = { text: 'Test Success', type: 'primary' };

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  text: 'Test Success',
  type: 'primary',
  init: {
    position: {
      vertical: 'bottom',
      horizontal: 'left'
    }
  }
};

export const Error = Template.bind({});
Error.args = { text: 'Test Error', type: 'error' };
