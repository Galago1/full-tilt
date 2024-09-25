import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import * as ImageUploadStories from './UploadImages.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Default } = composeStories(ImageUploadStories);

describe('UploadImages', () => {
  it('renders the component', () => {
    render(<Default />);
    const buttons = screen.getAllByRole('button');
    expect.arrayContaining(buttons);
  });
});
