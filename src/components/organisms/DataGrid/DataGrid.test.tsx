import { act } from 'react';
import { render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as DataGridStories from './DataGrid.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { EmployeeDataGrid } = composeStories(DataGridStories);

describe('DataGrid', () => {
  test('renders the basic datagrid', async () => {
    await act(async () => {
      render(<EmployeeDataGrid data-testid="custom-element" />);
    });
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
