import { render } from '@testing-library/react';
import OverviewCard from './OverviewCard';

const mockData = {
  Q1: {
    'All Teams': {
      'Productivity & Focus': '78',
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
  }
};

describe('OverviewCard', () => {
  test('renders without crashing', () => {
    const { getByText } = render(
      <OverviewCard
        data={mockData}
        selectedQuarter="Q1"
        onQuarterChange={() => {}}
      />
    );

    expect(getByText('Survey Overview')).toBeInTheDocument();
    expect(getByText('Teams')).toBeInTheDocument();
    expect(getByText('Product Team')).toBeInTheDocument();
    expect(getByText('Productivity & Focus')).toBeInTheDocument();
    expect(getByText('85')).toBeInTheDocument();
  });
});
