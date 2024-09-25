import { render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as TableSnackbarStories from './TableSnackbar.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { DefaultTableSnackbar } = composeStories(TableSnackbarStories);

describe('TableSnackbar', () => {
  test('renders the DefaultTableSnackbar', () => {
    render(<DefaultTableSnackbar data-testid="custom-element" />);
    const element = screen.getByTestId(/custom-element/i);
    expect(element).toBeInTheDocument();
  });
});
