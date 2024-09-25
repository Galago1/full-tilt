import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as TimePickerInputBaseStories from './TimePickerInputBase.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Variant } = composeStories(TimePickerInputBaseStories) as any;

describe('TimePickerInputBase', () => {
  test('renders the Variant', () => {
    render(<Variant />);
    const element = screen.getByLabelText('Custom');
    expect(element).toBeInTheDocument();
  });
});
