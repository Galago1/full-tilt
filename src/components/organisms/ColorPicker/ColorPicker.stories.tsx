import { Story } from '@storybook/react';
import { ThemeProvider } from 'src/components/particles';
import { COLOR_PICKER_COLORS } from '.';
import ColorPicker, { ColorPickerProps } from './ColorPicker';

export default {
  title: 'Example/ColorPicker',
  component: ColorPicker
};

const Template: Story<ColorPickerProps> = (args) => (
  <ThemeProvider>
    <ColorPicker {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  colors: COLOR_PICKER_COLORS
};
