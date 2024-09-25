import { render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as SecondNavStories from './SecondNav.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { FiveButtons } = composeStories(SecondNavStories);

describe('SecondNav', () => {
  test('renders the FiveButtons nav', () => {
    render(<FiveButtons />);
    const elements = screen.getAllByRole('button');
    expect(elements.length).toEqual(5);
  });
});
