import { render, screen, fireEvent } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as OKRModalStories from './OKRModal.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args);
const { Default } = composeStories(OKRModalStories) as any;

describe('OKRModal', () => {
  const mockChampions = [
    { value: 'champ1', label: { value: 'Champion 1' } },
    { value: 'champ2', label: { value: 'Champion 2' } }
  ];
  const mockTeams = [
    { value: 'team1', label: { value: 'Team 1' } },
    { value: 'team2', label: { value: 'Team 2' } }
  ];
  const mockCategories = [
    { value: 'category1', label: { value: 'Category 1' } },
    { value: 'category2', label: { value: 'Category 2' } }
  ];
  const mockOnClose = jest.fn();

  it('renders', () => {
    render(
      <Default
        open={true}
        onClose={mockOnClose}
        champions={mockChampions}
        teams={mockTeams}
        categories={mockCategories}
      />
    );
    expect(screen.getByText('Add New OKR')).toBeInTheDocument();
  });

  it('handles the onClose function when the modal is closed', () => {
    render(
      <Default
        open={true}
        onClose={mockOnClose}
        champions={mockChampions}
        teams={mockTeams}
        categories={mockCategories}
      />
    );

    fireEvent.click(screen.getByTestId('close-button'));
    expect(mockOnClose).toHaveBeenCalled();
  });
});
