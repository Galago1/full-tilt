import { render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as CommunicationLogFormStories from './CommunicationLogForm.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Blank } = composeStories(CommunicationLogFormStories) as any;

describe('CommunicationLogForm', () => {
  test('submits the form', async () => {
    render(<Blank />);
    const element = await screen.findByRole('button', { name: 'Submit' });
    expect(element).toBeInTheDocument();
  });
});
