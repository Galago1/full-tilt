import { render, screen } from '@testing-library/react';
import { Button } from '@mui/material';

import { composeStories } from '@storybook/testing-react';
import * as TooltipStories from './Tooltip.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Basic } = composeStories(TooltipStories);

describe('Tooltip', () => {
  test('renders the Tooltip', () => {
    render(
      <Basic data-testid="custom-element" title="test" open={true}>
        <Button data-testid="custom-element">test</Button>
      </Basic>
    );
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
