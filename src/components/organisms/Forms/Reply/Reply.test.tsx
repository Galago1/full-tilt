import { render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as ReplyStories from './Reply.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Default } = composeStories(ReplyStories);

describe('Reply Component', () => {
  it('renders the Your Reply text', () => {
    render(<Default />);
    const replyText = screen.getByText('Your Reply');
    expect(replyText).toBeInTheDocument();
  });
});
