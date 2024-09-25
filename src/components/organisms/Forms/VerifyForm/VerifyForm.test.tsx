import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { act } from 'react';

import { composeStories } from '@storybook/testing-react';
import * as VerifyFormStories from './VerifyForm.stories'; //👈  Our stories imported here
// import userEvent from '@testing-library/user-event';
// import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup';
//👇 composeStories will process all information related to the component (e.g., args)
const { Blank } = composeStories(VerifyFormStories);

describe('VerifyForm', () => {
  test('focuses on next and previous', async () => {
    render(<Blank />);
    const input1 = screen.getByTestId('mega-input-code1') as HTMLInputElement;
    const input2 = screen.getByTestId('mega-input-code2') as HTMLInputElement;

    await act(() => {
      fireEvent.change(input1, { target: { value: '1' } });
    });
    expect(input1.value).toBe('1');
    expect(input2).toHaveFocus();

    await act(() => {
      fireEvent.change(input2, { target: { value: '1' } });
      fireEvent.change(input2, { target: { value: '' } });
    });
    expect(input1.value).toBe('1');
    expect(input1).toHaveFocus();

    await act(() => {
      fireEvent.change(input1, { target: { value: '' } });
    });
    expect(input1.value).toBe('');
    expect(input1).toHaveFocus();
  });
  test('pastes a value', async () => {
    render(<Blank />);
    const input1 = screen.getByTestId('mega-input-code1') as HTMLInputElement;
    const input2 = screen.getByTestId('mega-input-code2') as HTMLInputElement;
    const input3 = screen.getByTestId('mega-input-code3') as HTMLInputElement;
    const input4 = screen.getByTestId('mega-input-code4') as HTMLInputElement;

    await act(() => {
      fireEvent.paste(input1, {
        clipboardData: { getData: () => '1234' }
      });
    });
    expect(input1.value).toBe('1');
    expect(input2.value).toBe('2');
    expect(input3.value).toBe('3');
    expect(input4.value).toBe('4');
    expect(input4).toHaveFocus();
    // TODO: the required error is triggering for some reason on paste
  });
  test('submits the form', async () => {
    const onSubmit = jest.fn();
    render(<Blank onSubmit={onSubmit} />);

    const input1 = screen.getByTestId('mega-input-code1') as HTMLInputElement;
    const input2 = screen.getByTestId('mega-input-code2') as HTMLInputElement;
    const input3 = screen.getByTestId('mega-input-code3') as HTMLInputElement;
    const input4 = screen.getByTestId('mega-input-code4') as HTMLInputElement;

    await act(async () => {
      await fireEvent.change(input1, { target: { value: '1' } });
      await fireEvent.change(input2, { target: { value: '1' } });
      await fireEvent.change(input3, { target: { value: '1' } });
      await fireEvent.change(input4, { target: { value: '1' } });
    });

    act(() => {
      screen.getByRole('button', { name: 'Verify Code' }).click();
    });

    // await waitFor(() => expect(onSubmit).toHaveBeenCalledWith({ code: '' }));
    await waitFor(() => expect(onSubmit).toHaveBeenCalled());
  });
});
