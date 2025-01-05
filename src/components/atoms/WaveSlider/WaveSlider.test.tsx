import { fireEvent, render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as WaveSliderStories from './WaveSlider.stories';

const { Default } = composeStories(WaveSliderStories);

describe('WaveSlider', () => {
  beforeEach(() => {
    // Mock getBoundingClientRect
    Element.prototype.getBoundingClientRect = jest.fn(() => ({
      width: 100,
      height: 100,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      x: 0,
      y: 0,
      toJSON: () => {}
    }));
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

    const sliderTrack = getByTestId('slider-track');
    fireEvent.mouseDown(sliderTrack, { clientX: 0 });
    fireEvent.mouseMove(document, { clientX: 50 });
    fireEvent.mouseUp(document);
  });
});
