import { render, screen } from '@testing-library/react';
import TextInputBase from './TextInputBase';

import { composeStories } from '@storybook/testing-react';
import * as TextInputBaseStories from './TextInputBase.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Variant } = composeStories(TextInputBaseStories);

describe('TextInputBase', () => {
  test('renders the TextInputBase', () => {
    render(
      <TextInputBase
        label="custom-element"
        field={{} as any}
        form={{} as any}
        meta={{} as any}
      />
    );
    const element = screen.getByLabelText('custom-element');
    expect(element).toBeInTheDocument();
  });
  test('renders the Variant', () => {
    render(<Variant />);
    const element = screen.getByLabelText('Custom');
    expect(element).toBeInTheDocument();
  });
});
