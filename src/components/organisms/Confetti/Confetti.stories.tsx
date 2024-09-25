import { ComponentMeta, Story } from '@storybook/react';
import ConfettiProvider from 'src/providers/ConfettiProvider/ConfettiProvider';
import { useWindowSize } from 'usehooks-ts';
import ThemeProvider from '../../particles/theme';
import Confetti, { ConfettiProps } from './Confetti';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/Confetti',
  component: Confetti
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof Confetti>;

const Template: Story<ConfettiProps> = (args) => {
  const window = useWindowSize();
  return (
    <ThemeProvider isDarkMode={false}>
      <ConfettiProvider
        init={{
          duration: undefined,
          width: window.width,
          height: window.height,
          visible: true
        }}
      >
        <Confetti />
      </ConfettiProvider>
    </ThemeProvider>
  );
};

export const Success = Template.bind({});
Success.args = { text: 'Test Success', type: 'primary' };
