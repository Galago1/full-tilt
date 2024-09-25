import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as LinearProgressIndicatorStories from './LinearProgressIndicator.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { DisplayValueTop } = composeStories(LinearProgressIndicatorStories);

describe('Spinner', () => {
  test('renders the component', () => {
    render(<DisplayValueTop />);
    const element = screen.getByRole('progressbar');
    expect(element).toBeInTheDocument();
  });
});
