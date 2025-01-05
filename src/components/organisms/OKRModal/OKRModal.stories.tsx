import { Story } from '@storybook/react';
import ThemeProvider from 'src/components/particles/theme';
import OKRModal, { OKRModalProps } from './OKRModal';

const champions = [
  { value: '123', label: { value: 'Bill Gates' } },
  { value: '456', label: { value: 'Steve Jobs' } },
  { value: '789', label: { value: 'Elon Musk' } }
];
const teams = [
  { value: '123', label: { value: 'Leadership' } },
  { value: '456', label: { value: 'Engineering' } },
  { value: '789', label: { value: 'Product' } }
];
const categories = [
  { value: '123', label: { value: 'Marketing' } },
  { value: '456', label: { value: 'Sales' } },
  { value: '789', label: { value: 'Customer Support' } }
];

export default {
  title: 'organisms/OKRModal',
  component: OKRModal
};

const Template: Story<OKRModalProps> = (args) => {
  return (
    <ThemeProvider>
      <OKRModal {...args} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  champions,
  teams,
  categories
};
