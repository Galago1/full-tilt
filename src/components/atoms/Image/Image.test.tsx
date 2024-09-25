import { render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as ImageStories from './Image.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args);
const { LayoutImages } = composeStories(ImageStories);
describe('Image', () => {
  test('renders the Image, determinant', () => {
    render(<LayoutImages />);
    const element = screen.getByTestId('box-img');
    expect(element).toBeInTheDocument();
  });
});
