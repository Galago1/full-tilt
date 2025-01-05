import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import * as DrawerContentStories from './DrawerContent.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Default } = composeStories(DrawerContentStories) as any;

describe('DrawerContent', () => {
  it('renders successfully', async () => {
    render(<Default />);
    expect(true);
  });
});
