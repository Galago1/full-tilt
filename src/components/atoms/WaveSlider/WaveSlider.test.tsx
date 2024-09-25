import { fireEvent, render } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as WaveSliderStories from './WaveSlider.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Default } = composeStories(WaveSliderStories);

describe('WaveSlider', () => {
  test('renders correctly with default props', () => {
    const { getByText } = render(<Default minLabel="Min" maxLabel="Max" />);

    expect(getByText('Min')).toBeInTheDocument();
    expect(getByText('Max')).toBeInTheDocument();
  });

  test('slider value updates on click', () => {
    const { getByTestId } = render(
      <Default min={0} max={10} step={1} minLabel="Min" maxLabel="Max" />
    );

    const sliderTrack = getByTestId('slider-track');
    fireEvent.click(sliderTrack, { clientX: 50 });
  });

  test('slider value updates on drag', () => {
    const { getByTestId } = render(
      <Default min={0} max={10} step={1} minLabel="Min" maxLabel="Max" />
    );

    const sliderThumb = getByTestId('slider-thumb');
    fireEvent.mouseDown(sliderThumb, { clientX: 0 });
    fireEvent.mouseMove(document, { clientX: 100 });
    fireEvent.mouseUp(document);
  });
});
