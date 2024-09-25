import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react';
import useParallaxShift from '../useParallaxShift';

describe('useParallaxShift', () => {
  const originalAddEventListener = window.addEventListener;
  const originalRemoveEventListener = window.removeEventListener;

  beforeEach(() => {
    window.addEventListener = jest.fn();
    window.removeEventListener = jest.fn();
  });

  afterEach(() => {
    window.addEventListener = originalAddEventListener;
    window.removeEventListener = originalRemoveEventListener;
  });

  it('should add and remove event listeners on mount and unmount', () => {
    const { unmount } = renderHook(() => useParallaxShift());

    expect(window.addEventListener).toHaveBeenCalledWith(
      'scroll',
      expect.any(Function)
    );

    unmount();

    expect(window.removeEventListener).toHaveBeenCalledWith(
      'scroll',
      expect.any(Function)
    );
  });

  it('should update offset value when window is scrolled', () => {
    let handler: any;
    window.addEventListener = (event: any, eventHandler: any) => {
      handler = eventHandler;
    };

    const { result } = renderHook(() => useParallaxShift());

    act(() => {
      window.pageYOffset = 100;
      handler();
    });

    expect(result.current.offset).toBe(100);

    act(() => {
      window.pageYOffset = 250;
      handler();
    });

    expect(result.current.offset).toBe(250);
  });
});
