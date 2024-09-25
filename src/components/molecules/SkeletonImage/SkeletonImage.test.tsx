import { fireEvent, render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as SkeletonImageStories from './SkeletonImage.stories'; //👈  Our stories imported here
import SkeletonImage from './SkeletonImage';
//👇 composeStories will process all information related to the component (e.g., args);
const { Default } = composeStories(SkeletonImageStories);

describe('Skeleton', () => {
  test('renders the Skeleton', () => {
    render(<Default />);
    const element = screen.getByTestId('skeleton-box-image');
    expect(element).toBeInTheDocument();
  });

  const defaultProps = {
    src: 'https://via.placeholder.com/300x200',
    width: '100%',
    height: 200
  };

  it('renders the Image component after the image is loaded', async () => {
    render(<SkeletonImage {...defaultProps} />);
    const skeletonBox = await screen.findByTestId('skeleton-box-image');
    const image = skeletonBox.querySelector('img');
    fireEvent.load(image as any);
    expect(image).toHaveAttribute('src', defaultProps.src);
  });
  it('renders the raw Image component after the image is loaded', async () => {
    render(
      <SkeletonImage {...{ ...defaultProps, raw: true, waitToStyle: true }} />
    );
    const image = await screen.findByTestId('skeleton-raw-image');
    // const image = skeletonBox.querySelector('img');
    fireEvent.load(image as any);
    expect(image).toHaveAttribute('src', defaultProps.src);
  });
  it('renders the Avatar component if avatarProps are provided', async () => {
    render(<SkeletonImage {...defaultProps} avatarProps={{}} />);
    const skeletonBox = await screen.findByTestId('skeleton-avatar-image');
    const avatar = skeletonBox.querySelector('img');
    fireEvent.load(avatar as any);
    expect(avatar).toHaveAttribute('src', defaultProps.src);
  });
});
