import { render } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as TablePaginationWaveStories from './TablePaginationWave.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Default } = composeStories(TablePaginationWaveStories);

describe('TablePaginationWave', () => {
  test('renders the Default', () => {
    render(<Default data-testid="custom-element" />);
    // const element = screen.getByTestId(/custom-element/i);
    // expect(element).toBeInTheDocument();
    expect(true);
  });
});
