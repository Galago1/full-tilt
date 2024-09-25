import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as BoxSelectStories from './BoxSelect.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Default } = composeStories(BoxSelectStories);

describe('BoxSelect', () => {
  it('renders without crashing', () => {
    render(<Default />);
    expect(screen.getByText('Not at all')).toBeInTheDocument();
  });

  it('renders all labels', () => {
    render(<Default />);
    expect(screen.getByText('Not at all')).toBeInTheDocument();
    expect(screen.getByText('Not really')).toBeInTheDocument();
    expect(screen.getByText('Somewhat')).toBeInTheDocument();
    expect(screen.getByText('Yes absolutely')).toBeInTheDocument();
  });
});
