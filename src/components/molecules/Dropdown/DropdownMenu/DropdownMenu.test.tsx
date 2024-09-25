import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as DropdownMenuStories from './DropdownMenu.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { WithMenuItemsAndDivider } = composeStories(DropdownMenuStories);

describe('DropdownMenu', () => {
  test('renders the WithMenuItemsAndDivider', () => {
    render(<WithMenuItemsAndDivider data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
