import { render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as SwipeableImageStories from './SwipeableImage.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Default } = composeStories(SwipeableImageStories);

describe('<SwipeableImage> Component', () => {
  it('renders a Menu in the active state', () => {
    render(<Default />);

    const button = screen.getByTestId('swipeable-prev-button');
    expect(button).toBeVisible();
  });
});
