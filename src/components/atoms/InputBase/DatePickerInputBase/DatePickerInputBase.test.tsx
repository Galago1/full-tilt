import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as DatePickerInputBaseStories from './DatePickerInputBase.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Variant } = composeStories(DatePickerInputBaseStories);

describe('DatePickerInputBase', () => {
  test('renders the Variant', () => {
    render(<Variant />);
    const element = screen.getByLabelText('Custom');
    expect(element).toBeInTheDocument();
  });
});
