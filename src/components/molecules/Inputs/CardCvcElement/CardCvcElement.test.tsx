import { render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as CardCvcElementStories from './CardCvcElement.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Blank } = composeStories(CardCvcElementStories);

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { StripeKey } from 'src/constants/keys';
const stripePromise = loadStripe(StripeKey);

// import { CardCvcElement as CVC } from '@stripe/react-stripe-js';

// // Mock the CVC component from '@stripe/react-stripe-js'
// jest.mock('@stripe/react-stripe-js', () => ({
//   CardCvcElement: jest.fn(({ onBlur }) => {
//     return <input data-testid="mocked-cvc" onBlur={onBlur} />;
//   }),
// }));

describe('CardCvcElement', () => {
  test('renders the Blank', () => {
    render(
      <Elements stripe={stripePromise}>
        <Blank data-testid="custom-element" />
      </Elements>
    );
    const element = screen.getByText('CVC');
    expect(element).toBeInTheDocument();
  });
});
