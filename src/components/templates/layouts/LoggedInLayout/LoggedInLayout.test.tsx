import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as LoggedInLayoutTemplateStories from './LoggedInLayout.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { LoggedInLayoutTemplate } = composeStories(
  LoggedInLayoutTemplateStories
);

describe('LoggedInLayoutTemplate', () => {
  test('renders the LoggedInLayout template', () => {
    render(<LoggedInLayoutTemplate data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
