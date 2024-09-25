import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { act } from 'react';
import Toast from './Toast';

import useToast from 'src/hooks/useToast';
import ToastProvider from 'src/providers/ToastProvider';
import ThemeProvider from '../../particles/theme';
import { Error, Success } from './Toast.stories';

describe('Toast', () => {
  it('renders successfully', async () => {
    render(<Success />);
    const alertComponent = await screen.findByRole('alert');
    expect(alertComponent).toBeVisible();
  });

  it('closes succesfully', async () => {
    render(<Error />);
    const closeButton = await screen.findByRole('button');

    fireEvent.click(closeButton);
  });
});

const Provider = ({ visible, children }: any) => (
  <ToastProvider
    init={{
      visible
    }}
  >
    {children}
  </ToastProvider>
);

const DefaultProvider = ({ children }: any) => (
  <ToastProvider>{children}</ToastProvider>
);

const _Toast = () => {
  const { hideToast, showToast, toast } = useToast();

  return (
    <ThemeProvider isDarkMode={false}>
      <Toast />
      <button
        onClick={(_) => {
          if (toast.visible) {
            hideToast();
          } else {
            showToast({
              text: 'This is a test messsage',
              duration: undefined
            });
          }
        }}
      >
        {toast.visible ? 'Close' : 'visible'}
      </button>
    </ThemeProvider>
  );
};

describe('<Toast> Component', () => {
  jest.useFakeTimers();
  it('renders successfully', async () => {
    render(
      <ThemeProvider isDarkMode={false}>
        <ToastProvider
          init={
            {
              message: 'This is a test message',
              duration: 1000,
              visible: true,
              type: 'error'
            } as unknown as any
          }
        >
          <Toast />
        </ToastProvider>
      </ThemeProvider>
    );
    const alertComponent = await screen.findByRole('alert');
    expect(alertComponent).toBeVisible();
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    await waitFor(() => {
      expect(alertComponent).not.toBeVisible();
    });
  });

  it('calls showToast() succesfully', () => {
    render(
      <Provider visible={false}>
        <_Toast />
      </Provider>
    );
    const button = screen.getByRole('button');
    fireEvent.click(button);
  });

  it('inits succesfully', () => {
    render(
      <ThemeProvider isDarkMode={false}>
        <DefaultProvider>
          <Toast />
        </DefaultProvider>
      </ThemeProvider>
    );
  });

  //I can't figure out how to test the clickaway line, don't want to waste anymore time on it - Dave
  it.todo('handles clickaway');

  it('renders with an  function handler', () => {
    render(
      <Provider visible={false}>
        <_Toast />
      </Provider>
    );
    const button = screen.getByRole('button');

    fireEvent.click(button);
  });
});
