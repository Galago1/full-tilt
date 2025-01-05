import { render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as UserProfileCardStories from './UserProfileCard.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Default } = composeStories(UserProfileCardStories);

describe('UserProfileCard', () => {
  test('renders correctly when the drawer is open', () => {
    render(<Default isOpen={true} />);

    expect(screen.getByText('Mollie Hall')).toBeInTheDocument();
    expect(screen.getByText('Lead Developer')).toBeInTheDocument();
    expect(screen.getByText('Product Team')).toBeInTheDocument();
    expect(screen.getByText('Phoenix, AZ')).toBeInTheDocument();
  });
});
