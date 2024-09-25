import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as CircularProgressIndicatorStories from './CircularProgressIndicator.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Percent75 } = composeStories(CircularProgressIndicatorStories);

describe('Spinner', () => {
  test('renders the component', () => {
    render(<Percent75 data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
