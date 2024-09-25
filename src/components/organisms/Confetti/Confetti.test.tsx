import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { act } from 'react';
import useConfetti from 'src/hooks/useConfetti';
import ConfettiProvider from 'src/providers/ConfettiProvider';
import ThemeProvider from '../../particles/theme';
import Confetti from './Confetti';
import { Success } from './Confetti.stories';

describe('Confetti', () => {
  it('renders successfully', async () => {
    render(<Success />);
    const alertComponent = await screen.findByRole('alert');
    expect(alertComponent).toBeVisible();
  });
});

const Provider = ({ visible, children }: any) => (
  <ConfettiProvider
    init={{
      visible
    }}
  >
    {children}
  </ConfettiProvider>
);

const DefaultProvider = ({ children }: any) => (
  <ConfettiProvider>{children}</ConfettiProvider>
);

const _Confetti = () => {
  const { hideConfetti, showConfetti, confetti } = useConfetti();

  return (
    <ThemeProvider isDarkMode={false}>
      <Confetti />
      <button
        onClick={(_) => {
          if (confetti.visible) {
            hideConfetti();
          } else {
            showConfetti({
              duration: undefined
            });
          }
        }}
      >
        {confetti.visible ? 'Close' : 'visible'}
      </button>
    </ThemeProvider>
  );
};

describe('<Confetti> Component', () => {
  jest.useFakeTimers();
  it('renders successfully', async () => {
    render(
      <ThemeProvider isDarkMode={false}>
        <ConfettiProvider
          init={
            {
              message: 'This is a test message',
              duration: 1000,
              visible: true,
              type: 'error'
            } as unknown as any
          }
        >
          <Confetti />
        </ConfettiProvider>
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

  it('calls showConfetti() succesfully', () => {
    render(
      <Provider visible={false}>
        <_Confetti />
      </Provider>
    );
    const button = screen.getByRole('button');
    fireEvent.click(button);
  });

  it('inits succesfully', () => {
    render(
      <ThemeProvider isDarkMode={false}>
        <DefaultProvider>
          <Confetti />
        </DefaultProvider>
      </ThemeProvider>
    );
  });

  //I can't figure out how to test the clickaway line, don't want to waste anymore time on it - Dave
  it.todo('handles clickaway');

  it('renders with an  function handler', () => {
    render(
      <Provider visible={false}>
        <_Confetti />
      </Provider>
    );
    const button = screen.getByRole('button');

    fireEvent.click(button);
  });
});
