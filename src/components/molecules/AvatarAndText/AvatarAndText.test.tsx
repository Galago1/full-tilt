import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as AvatarAndTextStories from './AvatarAndText.stories';
import { WithChildren } from './AvatarAndText.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { WithoutAvatar } = composeStories(AvatarAndTextStories);

describe('AvatarAndText', () => {
  test('renders the AvatarAndText', () => {
    render(<WithoutAvatar data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
describe('AvatarAndTextWithChildren', () => {
  test('renders the AvatarAndText', () => {
    render(<WithChildren data-testid="custom-element" />);
    screen.debug();
    const element = screen.getByTestId('custom-element');
    const svgElement = expect(element).toBeInTheDocument();
  });
});
