import { render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as TabsStories from './TabPanel.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Displayed } = composeStories(TabsStories);

describe('TabPanel', () => {
  test('renders the Displayed Panel', () => {
    render(<Displayed />);
    const element = screen.getByText(/Displayed/i);
    expect(element).toBeInTheDocument();
  });
});
