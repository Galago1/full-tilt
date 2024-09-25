import { render, screen } from '@testing-library/react';
import FileInputButton from './FileInputButton';

import { composeStories } from '@storybook/testing-react';
import * as FileInputButtonStories from './FileInputButton.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args);
const { Basic } = composeStories(FileInputButtonStories);
describe('FileInputButton', () => {
  test('renders the FileInputButton', () => {
    render(
      <FileInputButton data-testid="custom-element" inputButtonType={'button'}>
        Test
      </FileInputButton>
    );
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
  test('renders the FileInputButton, determinant', () => {
    render(<Basic data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
