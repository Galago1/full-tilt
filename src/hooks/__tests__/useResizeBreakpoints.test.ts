import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react';
import breakpoints from 'src/components/particles/theme/breakpoints';
import useResizeBreakpoints from '../useResizeBreakpoints'; // Adjust the import path as necessary

// Mocking debounce to execute the function immediately for testing
jest.mock('@mui/material', () => ({
  debounce: jest.fn((fn) => fn)
}));

describe('useResizeBreakpoints', () => {
  // Mocking window properties
  beforeAll(() => {
    Object.defineProperty(window, 'screen', {
      writable: true,
      value: { width: 800 }
    });
    Object.defineProperty(window, 'devicePixelRatio', {
      writable: true,
      value: 2
    });
  });

  it('initializes with original breakpoints', () => {
    const { result } = renderHook(() => useResizeBreakpoints());

    expect(result.current).toEqual(breakpoints);
  });

  xit('updates breakpoints on window resize', () => {
    const { result } = renderHook(() => useResizeBreakpoints());

    // Simulate a window resize
    act(() => {
      (window.screen as any).width = 1024;
      window.devicePixelRatio = 1;
      window.dispatchEvent(new Event('resize'));
    });

    // Calculate expected breakpoints based on the mock
    const targetScreenWidth = 1536;
    const currentScreenWidth = 1024 * 1; // New mocked values
    const originalResult = 1728 * 1; // New mocked devicePixelRatio
    const ratio = targetScreenWidth / originalResult;
    const screenWidth = currentScreenWidth * ratio;

    const expectedBreakpoints = {
      values: {
        xs: 0,
        sm: screenWidth * 0.25,
        md: screenWidth * 0.5,
        lg: screenWidth * 0.75,
        xl: screenWidth
      }
    };

    expect(result.current).toEqual(expectedBreakpoints);
  });
});
