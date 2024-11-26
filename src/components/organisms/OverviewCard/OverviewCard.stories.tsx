import { Meta, Story } from '@storybook/react';
import { useState } from 'react';
import OverviewCard, { OverviewCardProps } from './OverviewCard';
import { Quarter } from 'src/types/other';
import { mockData } from './helpers';

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
    <OverviewCard
      {...args}
      selectedQuarter={selectedQuarter}
      onQuarterChange={handleQuarterChange}
    />
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
