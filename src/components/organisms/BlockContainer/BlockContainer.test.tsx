import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as BlockContainerStories from './BlockContainer.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Default } = composeStories(BlockContainerStories);

describe('Default', () => {
  test('renders the nav', () => {
    render(<Default title="Some text" />);
    const linkElement = screen.getByText(/Some text/i);
    expect(linkElement).toBeInTheDocument();
  });
});
