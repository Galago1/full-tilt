import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import * as ColorfulCardStories from './ColorfulCard.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args);
const { Default } = composeStories(ColorfulCardStories);

describe('ColorfulCard', () => {
  it('renders', async () => {
    render(<Default progress={50} data-testid="custom-element" />);
    const alertComponent = await screen.findByTestId('custom-element');
    expect(alertComponent).toBeVisible();
  });
});
