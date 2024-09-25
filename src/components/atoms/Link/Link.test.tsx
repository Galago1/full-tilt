import { render, screen } from '@testing-library/react';
import Link from './Link';

import { composeStories } from '@storybook/testing-react';
import * as LinkStories from './Link.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Primary } = composeStories(LinkStories);

describe('Link', () => {
  test('renders the link', () => {
    render(<Link>Link</Link>);
    const linkElement = screen.getByText(/Link/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('renders the link, target _blank', () => {
    render(
      <Link color="error" target={'_blank'}>
        The Link
      </Link>
    );
    const linkElement = screen.getByText(/The Link/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders the primary link', () => {
    render(<Primary>Link</Primary>);
    const linkElement = screen.getByText(/Link/i);
    expect(linkElement).toBeInTheDocument();
  });
});
