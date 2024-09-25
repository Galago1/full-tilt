import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as AvatarStories from './NewLineText.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args);
const { TwoLines } = composeStories(AvatarStories);
describe('Avatar', () => {
  test('renders the TwoLines', () => {
    render(<TwoLines data-testid="custom-element" />);
    const element = screen.getByText('Line One');
    expect(element).toBeInTheDocument();
  });
});
