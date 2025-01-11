import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as ListPopoverStories from './ListPopover.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Blank } = composeStories(ListPopoverStories) as any;
describe('ListPopover', () => {
  test('submits the ListPopover', async () => {
    const onSubmit = jest.fn();
    render(<Blank data-testid="custom-element" onSubmit={onSubmit} />);
    expect(screen.getByTestId('custom-element')).toBeInTheDocument();
  });
});
