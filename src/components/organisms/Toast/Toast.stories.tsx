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

const Template: Story<ToastrProps> = (args) => {
  // const { toast, hideToast } = useToast({ ...args });
  // const { showToast } = useToast();
  // showToast(args);
  return (
    <ThemeProvider isDarkMode={false}>
      <ToastProvider
        init={{
          duration: undefined,
          position: {
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

export const Error = Template.bind({});
Error.args = { text: 'Test Error', type: 'error' };
