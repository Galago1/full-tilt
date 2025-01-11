import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import { act } from 'react';
import * as MeetingsCardStories from './MeetingsCard.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Blank } = composeStories(MeetingsCardStories);

describe('MeetingsCard', () => {
  test('renders the login template', async () => {
    render(<Blank data-testid="custom-element" />);
    await act(() => {
      const element = screen.getByTestId('custom-element');
      expect(element).toBeInTheDocument();
    });
  });
});
