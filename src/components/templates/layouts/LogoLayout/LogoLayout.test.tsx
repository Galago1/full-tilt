import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as LogoLayoutTemplateStories from './LogoLayout.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { LogoLayoutTemplate } = composeStories(LogoLayoutTemplateStories);

describe('LogoLayoutTemplate', () => {
  test('renders the LogoLayout template', () => {
    render(<LogoLayoutTemplate data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
