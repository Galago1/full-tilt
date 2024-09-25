import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as NotFoundTemplateStories from './NotFound.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { NotFoundTemplate } = composeStories(NotFoundTemplateStories);

describe('NotFoundTemplate', () => {
  test('clicks the onGoBack action', () => {
    const onGoBack = jest.fn();
    render(<NotFoundTemplate onGoBack={onGoBack} />);

    const element = screen.getByRole('button', { name: 'Go back' });
    element.click();

    expect(onGoBack).toHaveBeenCalled();
  });
  test('clicks the onGoHome action', () => {
    const onGoHome = jest.fn();
    render(<NotFoundTemplate onGoHome={onGoHome} />);

    const element = screen.getByRole('button', { name: 'Take me home' });
    element.click();

    expect(onGoHome).toHaveBeenCalled();
  });
});
