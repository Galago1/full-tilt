import { render, screen } from '@testing-library/react';
import TextAreaInputBase from './TextAreaInputBase';

import { composeStories } from '@storybook/testing-react';
import * as TextAreaInputBaseStories from './TextAreaInputBase.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Required } = composeStories(TextAreaInputBaseStories);

describe('TextAreaInputBase', () => {
  test('renders the TextAreaInputBase', () => {
    render(
      <TextAreaInputBase
        label="custom-element"
        field={{ name: 'decription' } as any}
        form={{ errors: {} } as any}
        meta={{} as any}
      />
    );
    const element = screen.getByLabelText('custom-element');
    expect(element).toBeInTheDocument();
  });
  test('renders the Required', () => {
    render(<Required data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
