import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as SwitchWithTextStories from './SelectWithText.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { SwitchWithoutDescription } = composeStories(SwitchWithTextStories);

describe('SelectWithText', () => {
  test('renders the SelectWithText', () => {
    render(<SwitchWithoutDescription data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
