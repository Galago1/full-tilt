import { render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as VerifyFormStories from './Accordion.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { InitiallyClosed } = composeStories(VerifyFormStories);

describe('Accordion', () => {
  test('submits the form', async () => {
    render(<InitiallyClosed data-testid="custom-element" />);
    const element = await screen.findByRole('button');
    expect(element).toBeInTheDocument();
  });
});
