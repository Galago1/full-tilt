import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as DateRangePickerInputBaseStories from './DateRangePickerInputBase.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Variant } = composeStories(DateRangePickerInputBaseStories);

describe('DateRangePickerInputBase', () => {
  test('renders the Variant', () => {
    render(<Variant />);
    expect(screen.getByLabelText('Check-in')).toBeInTheDocument();
    expect(screen.getByLabelText('Check-out')).toBeInTheDocument();
  });
});
