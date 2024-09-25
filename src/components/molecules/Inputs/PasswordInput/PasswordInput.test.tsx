import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react';

import { composeStories } from '@storybook/testing-react';
import * as PasswordInputStories from './PasswordInput.stories'; //👈  Our stories imported here
//👇 composeStories will process all information related to the component (e.g., args)
const { Normal } = composeStories(PasswordInputStories);

describe('PasswordInput', () => {
  test('clicks the icon button', () => {
    render(<Normal data-testid="custom-element" placeholder="password" />);
    const element = screen.getByRole('button');
    fireEvent.mouseDown(element);
    act(() => {
      element.click();
    });
    const input = screen.getByPlaceholderText('password') as HTMLInputElement;
    expect(input.type).toEqual('text');
  });
});
