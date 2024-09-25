import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as LoggedOutLayoutColumnTemplateStories from './LoggedOutLayoutColumn.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { LoggedOutLayoutColumnTemplate } = composeStories(
  LoggedOutLayoutColumnTemplateStories
);

describe('LoggedOutLayoutColumnTemplate', () => {
  test('renders the LoggedOutLayoutColumn template', () => {
    render(<LoggedOutLayoutColumnTemplate data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
