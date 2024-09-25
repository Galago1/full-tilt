import { render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as PatternInputBaseStories from './PatternInputBase.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Normal } = composeStories(PatternInputBaseStories);

describe('PatternInputBase', () => {
  test('renders the Normal', () => {
    render(<Normal />);
    const element = screen.getByText('Custom');
    expect(element).toBeInTheDocument();
  });
});
