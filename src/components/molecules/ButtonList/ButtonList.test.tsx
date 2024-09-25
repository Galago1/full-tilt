import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as ButtonListStories from './ButtonList.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { CancelConfirm } = composeStories(ButtonListStories);

describe('ButtonList', () => {
  test('renders the ButtonList', () => {
    render(<CancelConfirm data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
