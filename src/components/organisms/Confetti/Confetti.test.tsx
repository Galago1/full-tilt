import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { act } from 'react';
import useConfetti from 'src/hooks/useConfetti';
import ConfettiProvider from 'src/providers/ConfettiProvider';
import ThemeProvider from '../../particles/theme';
import Confetti from './Confetti';
import { Success } from './Confetti.stories';

describe('Confetti', () => {
  it('renders successfully', async () => {
    await act(async () => {
      render(<Success />);
    });
    const canvasElement = screen.getByTestId('confetti-canvas');
    expect(canvasElement).toBeInTheDocument();
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
    await act(async () => {
      render(
        <ThemeProvider isDarkMode={false}>
          <ConfettiProvider
            init={{
              duration: 1000,
              visible: true
            }}
          >
            <Confetti />
          </ConfettiProvider>
        </ThemeProvider>
      );
    });

    const canvasElement = screen.getByTestId('confetti-canvas');
    expect(canvasElement).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    await waitFor(() => {
      expect(canvasElement).toHaveStyle({ display: 'none' });
    });
  });

  it('calls showConfetti() succesfully', async () => {
    await act(async () => {
      render(
        <Provider visible={false}>
          <_Confetti />
        </Provider>
      );
    });
    const button = screen.getByRole('button');
    fireEvent.click(button);
  });

  it('inits succesfully', async () => {
    await act(async () => {
      render(
        <ThemeProvider isDarkMode={false}>
          <DefaultProvider>
            <Confetti />
          </DefaultProvider>
        </ThemeProvider>
      );
    });
  });

  it('renders with an function handler', async () => {
    await act(async () => {
      render(
        <ThemeProvider isDarkMode={false}>
          <DefaultProvider>
            <Confetti />
          </DefaultProvider>
        </ThemeProvider>
      );
    });
  });
});
