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
  const [year, setYear] = useState(() => new Date().getFullYear());

  const handleQuarterChange = (quarter: Quarter) => {
    // Handle year changes when going between Q4 and Q1
    if (selectedQuarter === 'q4' && quarter === 'q1') {
      setYear((prev) => prev + 1);
    } else if (selectedQuarter === 'q1' && quarter === 'q4') {
      setYear((prev) => prev - 1);
    }
    setSelectedQuarter(quarter);
  };

  return (
    <ThemeProvider>
      <OverviewCard
        {...args}
        selectedQuarter={selectedQuarter}
        // selectedQuarter={undefined}
        onQuarterChange={handleQuarterChange}
        year={year}
        fiscalYearStartDate={new Date(2024, 0, 1)} // January 1st as fiscal year start
        // fiscalYearStartDate={undefined} // January 1st as fiscal year start
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
  data: mockData,
  middleButtonProps: {},
  // Set fiscal year to start on July 1st
  fiscalYearStartDate: new Date(2025, 6, 1) // July 1st
};

export const JanuaryFiscalYear = Template.bind({});
JanuaryFiscalYear.args = {
  ...Default.args,
  // Set fiscal year to start on January 1st
  fiscalYearStartDate: new Date(2025, 0, 1) // January 1st
};

export const OctoberFiscalYear = Template.bind({});
OctoberFiscalYear.args = {
  ...Default.args,
  // Set fiscal year to start on October 1st
  fiscalYearStartDate: new Date(2025, 9, 1) // October 1st
};
