import { render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as NoteFormStories from './NoteForm.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Blank } = composeStories(NoteFormStories) as any;

describe('NoteForm', () => {
  test('submits the form', async () => {
    render(<Blank />);
    const element = await screen.findByRole('button');
    expect(element).toBeInTheDocument();
  });
});
