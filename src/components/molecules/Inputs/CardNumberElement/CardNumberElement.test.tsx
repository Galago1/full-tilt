import { render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';
import * as CardNumberElementStories from './CardNumberElement.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Blank } = composeStories(CardNumberElementStories);

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { StripeKey } from 'src/constants/keys';
const stripePromise = loadStripe(StripeKey);

describe('CardNumberElement', () => {
  test('renders the Blank', () => {
    render(
      <Elements stripe={stripePromise}>
        <Blank data-testid="custom-element" />
      </Elements>
    );
    const element = screen.getByText('Card Number');
    expect(element).toBeInTheDocument();
  });
});
