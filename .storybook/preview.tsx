import React from 'react';
import inputGlobalStyles from '../src/components/particles/globalStyles';
import ThemeProvider from '../src/components/particles/theme/index';
import CssBaseline from '../src/components/particles/theme/index';
import { useDarkMode } from 'storybook-dark-mode';
import ModalProvider from 'mui-modal-provider';
import BreakpointProvider from '../src/providers/BreakpointProvider/BreakpointProvider';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { StripeKey } from '../src/constants/keys';
const stripePromise = loadStripe(StripeKey);
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/inter/900.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-sZ].*' },
  controls: {
    matchers: {
      // color: /(background|color)$/i,
      date: /Date$/
    }
  },
  options: {
    storySort: {
      order: ['Atoms', 'Molecules', 'Organisms', 'Templates', 'Pages'],
      method: 'configure',
      includeNames: false
    }
    // storySort: (a, b) =>
    //   a[1].kind === b[1].kind
    //     ? 0
    //     : a[1].id.localeCompare(b[1].id, { numeric: true })
  }
};

export const decorators = [
  (Story) => {
    const isDarkMode = useDarkMode();
    return (
      <ThemeProvider isDarkMode={isDarkMode}>
        <CssBaseline />
        {inputGlobalStyles}
        <Elements stripe={stripePromise}>
          <BreakpointProvider>
            <ModalProvider>
              <Story />
            </ModalProvider>
          </BreakpointProvider>
        </Elements>
      </ThemeProvider>
    );
  }
];
