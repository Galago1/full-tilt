import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as RadioGroupStories from './RadioGroup.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { OneOption } = composeStories(RadioGroupStories);

describe('RadioGroup', () => {
  test('renders the RadioGroup', () => {
    render(<OneOption data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
