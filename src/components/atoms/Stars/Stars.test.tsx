import { fireEvent, render } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as StarsStories from './Stars.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Default } = composeStories(StarsStories);
describe('Stars Component', () => {
  test('renders the correct number of stars', () => {
    const { getAllByRole } = render(<Default totalStars={5} />);
    const stars = getAllByRole('button');
    expect(stars).toHaveLength(5);
  });

  test('highlights stars up to the clicked star', () => {
    const { getAllByRole } = render(<Default totalStars={5} />);
    const stars = getAllByRole('button');

    fireEvent.click(stars[2]);
    for (let i = 0; i <= 2; i++) {
      expect(stars[i].firstChild).toHaveStyle('color: #FFA500');
    }
    for (let i = 3; i < stars.length; i++) {
      expect(stars[i].firstChild).toHaveStyle('color: #E0E0E0');
    }
  });

  test('renders custom number of stars', () => {
    const { getAllByRole } = render(<Default totalStars={10} />);
    const stars = getAllByRole('button');
    expect(stars).toHaveLength(10);
  });
});
