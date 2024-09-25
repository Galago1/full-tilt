import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as PrivacyTemplateStories from './Privacy.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { PrivacyTemplate } = composeStories(PrivacyTemplateStories);

describe('PrivacyTemplate', () => {
  test('renders the privacy template', () => {
    render(
      <PrivacyTemplate
        loggedOutLayoutColumnProps={{
          'data-testid': 'custom-element'
        }}
      />
    );
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
