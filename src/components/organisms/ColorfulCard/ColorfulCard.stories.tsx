import { Story } from '@storybook/react';
import ThemeProvider from 'src/components/particles/theme';
import ColorfulCard, { ColorfulCardProps } from './ColorfulCard';

export default {
  title: 'organisms/ColorfulCard',
  component: ColorfulCard,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' }
  }
};
const Template: Story<ColorfulCardProps> = (args) => {
  return (
    <ThemeProvider>
      <ColorfulCard {...args} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  progress: 100
};

export const Red = Template.bind({});
Red.args = {
  backgroundColor: '#982512',
  color: '#e5391c',
  progress: 64
};

export const Black = Template.bind({});
Black.args = {
  backgroundColor: '#1A1A1E',
  color: '#1A1A1E',
  progress: 27
};
