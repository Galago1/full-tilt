import { render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as VerificationInputStories from './VerificationInput.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Normal } = composeStories(VerificationInputStories);

describe('VerificationInput', () => {
  test('renders the Blank nav', () => {
    render(<Normal data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
