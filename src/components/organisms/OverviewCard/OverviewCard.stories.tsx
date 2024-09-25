import { Meta, Story } from '@storybook/react';
import { useState } from 'react';
import OverviewCard, { OverviewCardProps } from './OverviewCard';

export default {
  title: 'Organisms/OverviewCard',
  component: OverviewCard
} as Meta;

const Template: Story<OverviewCardProps> = (args) => {
  const [selectedQuarter, setSelectedQuarter] =
    useState<'Q1' | 'Q2' | 'Q3' | 'Q4'>('Q1');

  const handleQuarterChange = (quarter: 'Q1' | 'Q2' | 'Q3' | 'Q4') => {
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
  data: {
    Q1: {
      'All Teams': {
        'Productivity & Focus': '0',
        'Company Collaboration': '66',
        'Project Management': '34',
        'Employee Engagement': '92',
        'Training & Development': '57',
        'Roadmap & Strategy': '88',
        'Innovation & Creativity': '64',
        'Customer Insights': '95',
        'Process Improvement': '72',
        'Leadership & Management': '81',
        'Customer Testing & Feedback': '68',
        'Company Culture': '44'
      },
      'Product Team': {
        'Productivity & Focus': '52',
        'Company Collaboration': '78',
        'Project Management': '64',
        'Employee Engagement': '90',
        'Training & Development': '83',
        'Roadmap & Strategy': '45',
        'Innovation & Creativity': '76',
        'Customer Insights': '91',
        'Process Improvement': '54',
        'Leadership & Management': '85',
        'Customer Testing & Feedback': '99',
        'Company Culture': '63'
      },
      'Customer Success Team': {
        'Productivity & Focus': '61',
        'Company Collaboration': '73',
        'Project Management': '82',
        'Employee Engagement': '89',
        'Training & Development': '57',
        'Roadmap & Strategy': '64',
        'Innovation & Creativity': '79',
        'Customer Insights': '94',
        'Process Improvement': '58',
        'Leadership & Management': '67',
        'Customer Testing & Feedback': '93',
        'Company Culture': '72'
      },
      'Sales Team': {
        'Productivity & Focus': '74',
        'Company Collaboration': '89',
        'Project Management': '65',
        'Employee Engagement': '92',
        'Training & Development': '49',
        'Roadmap & Strategy': '53',
        'Innovation & Creativity': '88',
        'Customer Insights': '76',
        'Process Improvement': '61',
        'Leadership & Management': '84',
        'Customer Testing & Feedback': '94',
        'Company Culture': '90'
      },
      Interns: {
        'Productivity & Focus': '63',
        'Company Collaboration': '48',
        'Project Management': '70',
        'Employee Engagement': '59',
        'Training & Development': '77',
        'Roadmap & Strategy': '44',
        'Innovation & Creativity': '91',
        'Customer Insights': '85',
        'Process Improvement': '66',
        'Leadership & Management': '49',
        'Customer Testing & Feedback': '77',
        'Company Culture': '54'
      }
    },
    Q2: {
      'All Teams': {
        'Productivity & Focus': '79',
        'Company Collaboration': '67',
        'Project Management': '35',
        'Employee Engagement': '93',
        'Training & Development': '58',
        'Roadmap & Strategy': '89',
        'Innovation & Creativity': '65',
        'Customer Insights': '96',
        'Process Improvement': '73',
        'Leadership & Management': '80',
        'Customer Testing & Feedback': '69',
        'Company Culture': '45'
      },
      'Product Team': {
        'Productivity & Focus': '53',
        'Company Collaboration': '77',
        'Project Management': '65',
        'Employee Engagement': '91',
        'Training & Development': '82',
        'Roadmap & Strategy': '46',
        'Innovation & Creativity': '77',
        'Customer Insights': '92',
        'Process Improvement': '55',
        'Leadership & Management': '86',
        'Customer Testing & Feedback': '98',
        'Company Culture': '64'
      },
      'Customer Success Team': {
        'Productivity & Focus': '62',
        'Company Collaboration': '74',
        'Project Management': '83',
        'Employee Engagement': '88',
        'Training & Development': '58',
        'Roadmap & Strategy': '65',
        'Innovation & Creativity': '78',
        'Customer Insights': '95',
        'Process Improvement': '57',
        'Leadership & Management': '68',
        'Customer Testing & Feedback': '94',
        'Company Culture': '73'
      },
      'Sales Team': {
        'Productivity & Focus': '75',
        'Company Collaboration': '90',
        'Project Management': '66',
        'Employee Engagement': '93',
        'Training & Development': '50',
        'Roadmap & Strategy': '54',
        'Innovation & Creativity': '89',
        'Customer Insights': '77',
        'Process Improvement': '60',
        'Leadership & Management': '85',
        'Customer Testing & Feedback': '95',
        'Company Culture': '91'
      },
      Interns: {
        'Productivity & Focus': '64',
        'Company Collaboration': '49',
        'Project Management': '71',
        'Employee Engagement': '60',
        'Training & Development': '76',
        'Roadmap & Strategy': '45',
        'Innovation & Creativity': '90',
        'Customer Insights': '86',
        'Process Improvement': '67',
        'Leadership & Management': '50',
        'Customer Testing & Feedback': '78',
        'Company Culture': '55'
      }
    },
    Q3: {
      'All Teams': {
        'Productivity & Focus': '80',
        'Company Collaboration': '69',
        'Project Management': '37',
        'Employee Engagement': '94',
        'Training & Development': '60',
        'Roadmap & Strategy': '91',
        'Innovation & Creativity': '67',
        'Customer Insights': '98',
        'Process Improvement': '75',
        'Leadership & Management': '82',
        'Customer Testing & Feedback': '71',
        'Company Culture': '49'
      },
      'Product Team': {
        'Productivity & Focus': '54',
        'Company Collaboration': '79',
        'Project Management': '66',
        'Employee Engagement': '92',
        'Training & Development': '84',
        'Roadmap & Strategy': '47',
        'Innovation & Creativity': '78',
        'Customer Insights': '93',
        'Process Improvement': '56',
        'Leadership & Management': '87',
        'Customer Testing & Feedback': '97',
        'Company Culture': '65'
      },
      'Customer Success Team': {
        'Productivity & Focus': '63',
        'Company Collaboration': '75',
        'Project Management': '84',
        'Employee Engagement': '90',
        'Training & Development': '59',
        'Roadmap & Strategy': '66',
        'Innovation & Creativity': '80',
        'Customer Insights': '96',
        'Process Improvement': '59',
        'Leadership & Management': '69',
        'Customer Testing & Feedback': '94',
        'Company Culture': '74'
      },
      'Sales Team': {
        'Productivity & Focus': '76',
        'Company Collaboration': '91',
        'Project Management': '67',
        'Employee Engagement': '94',
        'Training & Development': '51',
        'Roadmap & Strategy': '55',
        'Innovation & Creativity': '89',
        'Customer Insights': '78',
        'Process Improvement': '62',
        'Leadership & Management': '86',
        'Customer Testing & Feedback': '96',
        'Company Culture': '92'
      },
      Interns: {
        'Productivity & Focus': '65',
        'Company Collaboration': '50',
        'Project Management': '72',
        'Employee Engagement': '61',
        'Training & Development': '78',
        'Roadmap & Strategy': '46',
        'Innovation & Creativity': '89',
        'Customer Insights': '87',
        'Process Improvement': '68',
        'Leadership & Management': '51',
        'Customer Testing & Feedback': '79',
        'Company Culture': '56'
      }
    },
    Q4: {
      'All Teams': {
        'Productivity & Focus': '81',
        'Company Collaboration': '71',
        'Project Management': '39',
        'Employee Engagement': '95',
        'Training & Development': '62',
        'Roadmap & Strategy': '92',
        'Innovation & Creativity': '69',
        'Customer Insights': '99',
        'Process Improvement': '77',
        'Leadership & Management': '84',
        'Customer Testing & Feedback': '73',
        'Company Culture': '50'
      },
      'Product Team': {
        'Productivity & Focus': '55',
        'Company Collaboration': '80',
        'Project Management': '67',
        'Employee Engagement': '93',
        'Training & Development': '85',
        'Roadmap & Strategy': '48',
        'Innovation & Creativity': '79',
        'Customer Insights': '94',
        'Process Improvement': '57',
        'Leadership & Management': '88',
        'Customer Testing & Feedback': '98',
        'Company Culture': '66'
      },
      'Customer Success Team': {
        'Productivity & Focus': '64',
        'Company Collaboration': '76',
        'Project Management': '85',
        'Employee Engagement': '91',
        'Training & Development': '60',
        'Roadmap & Strategy': '67',
        'Innovation & Creativity': '81',
        'Customer Insights': '97',
        'Process Improvement': '60',
        'Leadership & Management': '71',
        'Customer Testing & Feedback': '95',
        'Company Culture': '75'
      },
      'Sales Team': {
        'Productivity & Focus': '77',
        'Company Collaboration': '92',
        'Project Management': '68',
        'Employee Engagement': '96',
        'Training & Development': '52',
        'Roadmap & Strategy': '56',
        'Innovation & Creativity': '90',
        'Customer Insights': '79',
        'Process Improvement': '63',
        'Leadership & Management': '87',
        'Customer Testing & Feedback': '97',
        'Company Culture': '93'
      },
      Interns: {
        'Productivity & Focus': '66',
        'Company Collaboration': '51',
        'Project Management': '73',
        'Employee Engagement': '62',
        'Training & Development': '79',
        'Roadmap & Strategy': '47',
        'Innovation & Creativity': '88',
        'Customer Insights': '88',
        'Process Improvement': '69',
        'Leadership & Management': '52',
        'Customer Testing & Feedback': '80',
        'Company Culture': '57'
      }
    }
  }
};
