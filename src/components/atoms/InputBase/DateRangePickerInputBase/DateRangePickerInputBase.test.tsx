import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as DateRangePickerInputBaseStories from './DateRangePickerInputBase.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Variant } = composeStories(DateRangePickerInputBaseStories);

describe('DateRangePickerInputBase', () => {
  test('renders the Variant', () => {
    // render(<Variant />);
    // const element = screen.getByLabelText('Custom');
    // expect(element).toBeInTheDocument();

    render(<Variant />);
    const element = screen.getByTestId('custom-date-range-picker');
    expect(element).toBeInTheDocument();
  });
});
