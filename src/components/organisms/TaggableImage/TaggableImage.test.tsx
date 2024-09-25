import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';

import * as TaggableImageStories from './TaggableImage.stories'; //👈  Our stories imported here
import { ThemeProvider } from 'src/components/particles';
import TaggableImage from './TaggableImage';
//👇 composeStories will process all information related to the component (e.g., args)
const { Default } = composeStories(TaggableImageStories);

describe('TaggableImage', () => {
  const defaultProps = {
    width: 200,
    height: 100,
    // imageUrl: image.src,
    selectedTagIndex: -1,
    pillValue: 0 as const,
    isXSmall: false,
    isMobile: false,
    onTagAdd: jest.fn(),
    onSelectTag: jest.fn(),
    onUpdateTag: jest.fn()
  };

  it('renders a Menu in the active state', async () => {
    render(
      <ThemeProvider>
        <Default />
      </ThemeProvider>
    );
    const element = screen.getByTestId('taggable-container');
    expect(element).toBeInTheDocument();
  });
  it('renders existing tags correctly', () => {
    render(
      <ThemeProvider>
        <Default />
      </ThemeProvider>
    );

    const imageDetail = screen.getByTestId('image-detail');
    expect(imageDetail).toBeInTheDocument();
  });

  it('calls onSelectTag when an existing tag is clicked', () => {
    const tags = [
      {
        // pillValue: 0,
        position: { left: 0.25, top: 0.25 },
        added: false
      }
    ];
    render(
      <ThemeProvider>
        <TaggableImage {...defaultProps} tags={tags} />
      </ThemeProvider>
    );
    const imageDetail = screen.getByTestId('image-detail');
    fireEvent.click(imageDetail);
    expect(defaultProps.onSelectTag).toHaveBeenCalledWith(0);
  });

  xit('calls onTagAdd when the image is clicked and pillValue is not 0', () => {
    const newProps = {
      ...defaultProps,
      pillValue: 1 as const
    };
    render(
      <ThemeProvider>
        <TaggableImage {...newProps} />
      </ThemeProvider>
    );
    const taggableContainer = screen.getByTestId('taggable-container');
    fireEvent.click(taggableContainer);
    expect(newProps.onTagAdd).toHaveBeenCalled();
  });

  xit('calls onUpdateTag when the image is clicked and pillValue is 0', () => {
    render(
      <ThemeProvider>
        <TaggableImage {...defaultProps} />
      </ThemeProvider>
    );
    const taggableContainer = screen.getByTestId('taggable-container');
    fireEvent.click(taggableContainer);
    expect(defaultProps.onUpdateTag).toHaveBeenCalled();
  });
});
