import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as DropdownListStories from './DropdownList.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { WithMenuItemsAndDivider } = composeStories(DropdownListStories);

describe('DropdownList', () => {
  test('renders the DropdownList', () => {
    render(<WithMenuItemsAndDivider />);
    const elements = screen.getAllByRole('menuitem');
    expect(elements.length).toEqual(4);
  });
});
