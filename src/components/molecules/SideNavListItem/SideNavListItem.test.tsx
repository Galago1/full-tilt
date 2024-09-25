import { render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as SideNavListItemStories from './SideNavListItem.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { TextAndIcon } = composeStories(SideNavListItemStories);

describe('SideNavListItem', () => {
  test('renders the TextAndIcon Panel', () => {
    render(<TextAndIcon data-testid="custom-elememt" />);
    const element = screen.getByTestId('custom-elememt');
    expect(element).toBeInTheDocument();
  });
});
