import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as SwitchWithTextStories from './IconWithTooltip.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { WithDescription } = composeStories(SwitchWithTextStories);

describe('IconWithTooltip', () => {
  test('renders the IconWithTooltip', () => {
    render(<WithDescription />);
    const element = screen.getByTitle('info');
    expect(element).toBeInTheDocument();
  });
});
