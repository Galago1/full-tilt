import { render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as ItemListStories from './ItemList.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Blank } = composeStories(ItemListStories);

describe('ItemList', () => {
  test('submits the ItemList', () => {
    render(<Blank data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
