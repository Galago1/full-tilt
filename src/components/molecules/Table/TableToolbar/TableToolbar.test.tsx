import { render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as TableToolbarStories from './TableToolbar.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { DefaultTableToolbar } = composeStories(TableToolbarStories);

describe('TableToolbar', () => {
  test('renders the DefaultTableToolbar', () => {
    render(<DefaultTableToolbar data-testid="custom-element" />);
    const element = screen.getByTestId(/custom-element/i);
    expect(element).toBeInTheDocument();
  });
});
