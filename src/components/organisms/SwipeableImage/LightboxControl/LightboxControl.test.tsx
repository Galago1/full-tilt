import { fireEvent, render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as ControlButtonsStories from './LightboxControl.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { ControlButtons } = composeStories(ControlButtonsStories);

describe('LightboxControl', () => {
  it('renders the LightboxControl component and tests the onclick handlers', () => {
    const onNext = jest.fn();
    const onPrevious = jest.fn();
    render(<ControlButtons onNext={onNext} onPrevious={onPrevious} />);

    const buttons = screen.getAllByRole('button');
    expect.arrayContaining(buttons);
    buttons.forEach((button) => {
      fireEvent.click(button);
    });
    expect(onNext).toHaveBeenCalledTimes(1);
    expect(onPrevious).toHaveBeenCalledTimes(1);
  });
});
