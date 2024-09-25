import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as DateInputBaseStories from './DateInputBase.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Variant } = composeStories(DateInputBaseStories);

describe('DateInputBase', () => {
  test('renders the Variant', () => {
    render(<Variant />);
    const element = screen.getByLabelText('Custom');
    expect(element).toBeInTheDocument();
  });
});
