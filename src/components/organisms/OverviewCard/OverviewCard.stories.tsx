import { Meta, Story } from '@storybook/react';
import { useState } from 'react';
import { ThemeProvider } from 'src/components/particles';
import { Quarter } from 'src/types/other';
import { mockData } from './helpers';
import OverviewCard, { OverviewCardProps } from './OverviewCard';

export default {
  title: 'Organisms/OverviewCard',
  component: OverviewCard
} as Meta;

const Template: Story<OverviewCardProps> = (args) => {
  const [selectedQuarter, setSelectedQuarter] = useState<Quarter>('q1');

  const handleQuarterChange = (quarter: Quarter) => {
    setSelectedQuarter(quarter);
  };

  return (
    <ThemeProvider>
      <OverviewCard
        {...args}
        selectedQuarter={selectedQuarter}
        onQuarterChange={handleQuarterChange}
      />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  slots: {
    tableContainerProps: {
      sx: {
        minWidth: 'calc(100vw - 32px)'
      }
    }
  },
  showSwitches: false,
  data: mockData
};
