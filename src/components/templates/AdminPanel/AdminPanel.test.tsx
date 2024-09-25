import { composeStories } from '@storybook/testing-react';
import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react';
import * as AdminPanelTemplateStories from './AdminPanel.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { AdminPanelTemplate } = composeStories(AdminPanelTemplateStories);

describe('AdminPanelTemplate', () => {
  test('change tab', async () => {
    render(<AdminPanelTemplate />);
    const element = screen.getByRole('tab', { name: 'All collections' });
    act(() => element.click());

    await waitFor(() => {
      const table = screen.getByRole('table');
      expect(table).toBeInTheDocument();
    });
  });
});
