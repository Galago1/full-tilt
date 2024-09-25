import { render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as MasonryListStories from './MasonryList.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { ThreeColumns } = composeStories(MasonryListStories);

describe('MasonryList', () => {
  test('renders the ThreeColumns list', () => {
    render(<ThreeColumns data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
