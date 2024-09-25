import { render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as PillsStories from './Pills.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Default } = composeStories(PillsStories);

describe('Pills', () => {
  it('renders a Menu in the active state', () => {
    render(<Default />);

    const moveButton = screen.getByRole('tab', { name: 'Move' });
    expect(moveButton).toBeVisible();
    const removeButton = screen.getByRole('tab', { name: 'Remove' });
    expect(removeButton).toBeVisible();
  });
});
