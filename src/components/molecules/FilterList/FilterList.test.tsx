import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as FilterListStories from './FilterList.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Basic } = composeStories(FilterListStories);

describe('FilterList', () => {
  test('renders the FilterList', async () => {
    render(<Basic />);
    const element = await screen.findByTestId('filter-list');
    expect(element).toBeInTheDocument();
  });
});
