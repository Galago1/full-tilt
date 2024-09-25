import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import * as GenericMenuList from './GenericMenuList.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Default } = composeStories(GenericMenuList) as any;

describe('Pricing Text', () => {
  test('Renders the price', () => {
    render(<Default data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
