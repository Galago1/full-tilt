import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as TermsTemplateStories from './Terms.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { TermsTemplate } = composeStories(TermsTemplateStories);

describe('TermsTemplate', () => {
  test('renders the terms template', () => {
    render(
      <TermsTemplate
        loggedOutLayoutColumnProps={{ 'data-testid': 'custom-element' }}
      />
    );
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
