import type { ComponentMeta, Story } from '@storybook/react';
import SurveyFooter, { SurveyFooterProps } from './SurveyFooter';
import { ThemeProvider } from 'src/components/particles';

export default {
  title: 'Atoms/SurveyFooter',
  component: SurveyFooter,
  argTypes: {
    totalSteps: { control: 'number', min: 2, max: 10 }
  }
} as ComponentMeta<typeof SurveyFooter>;

const Template: Story<SurveyFooterProps> = (args) => (
  <ThemeProvider>
    <SurveyFooter {...args} />
  </ThemeProvider>
);
export const Default = Template.bind({});
Default.args = {
  totalSteps: 5
};

export const TwoSteps = Template.bind({});
TwoSteps.args = {
  totalSteps: 2
};

export const TenSteps = Template.bind({});
TenSteps.args = {
  totalSteps: 10
};
