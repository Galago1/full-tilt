import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as RockStatusFormStories from './RockStatusForm.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Blank } = composeStories(RockStatusFormStories) as any;
describe('RockStatusForm', () => {
  test('submits the RockStatusForm', async () => {
    const onSubmit = jest.fn();
    render(<Blank data-testid="custom-element" onSubmit={onSubmit} />);
    expect(screen.getByTestId('custom-element')).toBeInTheDocument();
  });
});
