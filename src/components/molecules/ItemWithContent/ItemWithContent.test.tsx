import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as ItemWithContentStories from './ItemWithContent.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { ItemOnly } = composeStories(ItemWithContentStories);

describe('ItemWithContent', () => {
  test('renders the component', () => {
    render(<ItemOnly data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
