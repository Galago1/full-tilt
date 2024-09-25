import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as DropdownAnchorStories from './DropdownAnchor.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { IconButtonWithIcon } = composeStories(DropdownAnchorStories);

describe('DropdownAnchor', () => {
  test('renders the IconButtonWithIcon', () => {
    render(<IconButtonWithIcon />);
    const element = screen.getByRole('button');
    expect(element).toBeInTheDocument();
  });
});
