import { render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as FeaturedIconStories from './FeaturedIcon.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args);
const { XSmall, Small, Medium, Large, XLarge } =
  composeStories(FeaturedIconStories);
describe('FeaturedIcon', () => {
  test('renders the XSmall', () => {
    render(<XSmall dual={true} data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
  test('renders the Small', () => {
    render(<Small dual={true} data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
  test('renders the Medium', () => {
    render(<Medium dual={true} data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
  test('renders the Large', () => {
    render(<Large dual={true} data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
  test('renders the XLarge', () => {
    render(<XLarge dual={true} data-testid="custom-element" />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
