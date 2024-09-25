import { render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as FilterFormStories from './FilterForm.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { EmptyForm } = composeStories(FilterFormStories) as any;

describe('FilterForm', () => {
  test('submits the form', async () => {
    render(<EmptyForm />);
    const element = await screen.findByRole('button');
    expect(element).toBeInTheDocument();
  });
});
