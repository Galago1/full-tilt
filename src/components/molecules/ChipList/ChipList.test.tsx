import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as ChipListStories from './ChipList.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { ThreeChips } = composeStories(ChipListStories);

describe('ChipList', () => {
  test('renders the ChipList', () => {
    render(<ThreeChips data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
