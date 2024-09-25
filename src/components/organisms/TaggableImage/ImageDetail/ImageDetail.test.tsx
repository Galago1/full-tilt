import { render, screen } from '@testing-library/react';

// import { Default } from './ImageDetail.stories';
import { composeStories } from '@storybook/testing-react';
import * as ImageDetailStories from './ImageDetail.stories'; //👈  Our stories imported here
import ThemeProvider from 'src/components/particles/theme';
//👇 composeStories will process all information related to the component (e.g., args)
const { Default } = composeStories(ImageDetailStories);

describe('ImageDetail', () => {
  it('renders image detail buttons', () => {
    render(
      <ThemeProvider isDarkMode={false}>
        <Default />
      </ThemeProvider>
    );

    const buttons = screen.getAllByRole('button');
    expect.arrayContaining(buttons);
    expect(buttons).toBeVisible;
  });
});
