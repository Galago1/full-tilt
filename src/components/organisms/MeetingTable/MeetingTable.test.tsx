import { render, screen, fireEvent } from '@testing-library/react';
// import MeetingTable from './MeetingTable';
import { composeStories } from '@storybook/testing-react';
import * as MeetingTableStories from './MeetingTable.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args);
const { Default } = composeStories(MeetingTableStories);

const mockData = {
  TeamA: [
    {
      title: 'Meeting 1',
      date: '2024-01-01',
      presenter: 'Alice',
      type: 'weekly',
      imagePath: '/path/to/image1.jpg'
    },
    {
      title: 'Meeting 2',
      date: '2024-02-01',
      presenter: 'Bob',
      type: 'quarterly',
      imagePath: '/path/to/image2.jpg'
    }
  ],
  TeamB: [
    {
      title: 'Meeting 3',
      date: '2024-03-01',
      presenter: 'Charlie',
      type: 'annual',
      imagePath: '/path/to/image3.jpg'
    },
    {
      title: 'Meeting 4',
      date: '2024-04-01',
      presenter: 'David',
      type: 'other',
      imagePath: '/path/to/image4.jpg'
    }
  ]
};

describe('MeetingTable', () => {
  it('renders correctly with initial data', () => {
    render(<Default data={mockData} />);

    // Check if the title is rendered
    expect(screen.getByText('Meetings')).toBeInTheDocument();

    // // Check if the Select component is rendered with the first team
    expect(screen.getByDisplayValue('TeamA')).toBeInTheDocument();

    // // Check if the initial tab is "Weekly"
    expect(screen.getByRole('tab', { name: /Weekly/i })).toHaveAttribute(
      'aria-selected',
      'true'
    );

    // Check if the table rows are rendered
    expect(screen.getByText('Meeting 1')).toBeInTheDocument();
  });

  it('changes tab and updates data correctly', () => {
    render(<Default data={mockData} />);

    // Change the tab to "Quarterly"
    fireEvent.click(screen.getByRole('tab', { name: /Quarterly/i }));

    // Check if the tab is selected
    expect(screen.getByRole('tab', { name: /Quarterly/i })).toHaveAttribute(
      'aria-selected',
      'true'
    );

    // Check if the table rows are updated
    expect(screen.getByText('Meeting 2')).toBeInTheDocument();
  });
});
