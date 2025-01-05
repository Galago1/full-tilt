import { Story } from '@storybook/react';
import image from 'src/assets/images/blurbackground.png';
import ThemeProvider from 'src/components/particles/theme';
import UserProfileCard, { UserProfileCardProps } from './UserProfileCard';

const testData = {
  firstName: 'Mollie',
  lastName: 'Hall',
  name: 'Mollie Hall',
  role: 'Lead Developer',
  group: 'Product Team',
  birthdate: 'November, 24',
  workAnniversary: 'January, 24',
  keyMetric: 'Move 8 points per day.',
  address: {
    city: 'Phoenix',
    state: 'AZ'
  },
  image: image,
  responsibility: `I'm a Product Design`,
  reportsTo: {
    email: 'bill@gates.com',
    name: 'Bill Gates',
    image: image
  },
  metric: 'Move 8 points per day.'
};

export default {
  title: 'Components/UserProfileCard',
  component: UserProfileCard
};

const Template: Story<UserProfileCardProps> = (args) => (
  <ThemeProvider>
    <UserProfileCard {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  data: testData
};
export const EmptyState = Template.bind({});
EmptyState.args = {
  data: {
    ...testData,
    birthdate: '',
    workAnniversary: '',
    // keyMetric: '',
    responsibility: '',
    reportsTo: {},
    metric: ''
  }
};
