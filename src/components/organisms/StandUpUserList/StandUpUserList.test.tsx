import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import StandUpUserList, { TeamMember } from './StandUpUserList';

// Sample team members data
const teamMembers: TeamMember[] = [
  {
    id: '1',
    imageUrl: 'https://via.placeholder.com/150',
    name: 'John Doe',
    status: 'Active',
    team: 'Development',
    // date: '2024-06-18',
    teamId: '1',
    standUpCompletedAt: '2024-06-18T09:00:00Z',
    standUpContent: ['Did some coding', 'Reviewed PRs'],
    lastSeen: '2024-06-18T08:55:00Z'
  },
  {
    id: '2',
    imageUrl: 'https://via.placeholder.com/150',
    name: 'Jane Smith',
    status: 'Active',
    team: 'Marketing',
    // date: '2024-06-18',
    teamId: '2',
    standUpCompletedAt: null,
    standUpContent: ['Worked on campaign', 'Updated social media'],
    lastSeen: '2024-06-18T08:50:00Z'
  }
];

test('renders StandUpUserList component', () => {
  render(<StandUpUserList teamMembers={teamMembers} />);
});
