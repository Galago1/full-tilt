import { render, screen } from '@testing-library/react';
import MegaInputBase from './MegaInputBase';

import { composeStories } from '@storybook/testing-react';
import * as MegaInputBaseStories from './MegaInputBase.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Required } = composeStories(MegaInputBaseStories);

describe('MegaInputBase', () => {
  test('renders the MegaInputBase', () => {
    render(
      <MegaInputBase
        data-testid="custom-element"
        field={{} as any}
        form={{} as any}
        meta={{} as any}
      />
    );
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
  test('renders the Required', () => {
    render(<Required placeholder="0" />);
    const element = screen.getByPlaceholderText('0');
    expect(element).toBeInTheDocument();
  });
});
