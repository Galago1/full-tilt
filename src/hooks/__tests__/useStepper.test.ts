import { act } from 'react';
import { renderHook } from '@testing-library/react-hooks';
import useStepper from 'src/hooks/useStepper';

describe('stepper', () => {
  test('should handleNext', () => {
    const { result } = renderHook(() => useStepper());

    act(() => {
      result.current.handleNext();
    });

    expect(result.current.activeStep).toBe(1);
  });
  test('should handleNext, remove skipped', () => {
    const { result } = renderHook(() => useStepper([0]));

    act(() => {
      result.current.handleSkip();
    });
    act(() => {
      result.current.handleBack();
    });
    act(() => {
      result.current.handleNext();
    });

    expect(result.current.activeStep).toBe(1);
  });
  test('should handleSkip', () => {
    const { result } = renderHook(() => useStepper([0]));

    act(() => {
      result.current.handleSkip();
    });

    expect(result.current.activeStep).toBe(1);
  });
  test('should handleSkip, not an optional step', () => {
    const { result } = renderHook(() => useStepper());

    expect(() => {
      result.current.handleSkip();
    }).toThrow(Error("You can't skip a step that isn't optional."));
  });

  test('should handleBack', () => {
    const { result } = renderHook(() => useStepper());

    act(() => {
      result.current.handleNext();
      result.current.handleBack();
    });

    expect(result.current.activeStep).toBe(0);
  });

  test('should handleReset', () => {
    const { result } = renderHook(() => useStepper());

    act(() => {
      result.current.handleNext();
      result.current.handleReset();
    });

    expect(result.current.activeStep).toBe(0);
  });
});
