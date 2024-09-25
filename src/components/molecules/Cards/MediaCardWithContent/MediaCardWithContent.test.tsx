import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as MediaCardWithContentStories from './MediaCardWithContent.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { MediaOnly } = composeStories(MediaCardWithContentStories);

describe('MediaCardWithContent', () => {
  test('renders the component', () => {
    render(<MediaOnly data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
