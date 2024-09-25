import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import * as SectionFooterStories from './SectionFooter.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { ShowAllButtons } = composeStories(SectionFooterStories) as any;

describe('SectionFooter', () => {
  it('renders successfully', async () => {
    render(<ShowAllButtons data-testid={'custom-element'} />);
    const element = await screen.findByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
