import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import * as ParallaxHeroStories from './ParallaxHero.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Initial } = composeStories(ParallaxHeroStories) as any;

describe('ParallaxHero', () => {
  it('renders successfully', async () => {
    render(<Initial data-testid={'custom-element'} />);
    const element = await screen.findByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
