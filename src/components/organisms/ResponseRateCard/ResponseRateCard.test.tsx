import { render } from '@testing-library/react';

import * as ResponseRateCardStories from './ResponseRateCard.stories'; //👈  Our stories imported here
import { composeStories } from '@storybook/testing-react';
//👇 composeStories will process all information related to the component (e.g., args)
const { Default } = composeStories(ResponseRateCardStories);

describe('ResponseRateCard', () => {
  it('renders without crashing', () => {
    render(<Default />);
    expect(true);
  });
});
