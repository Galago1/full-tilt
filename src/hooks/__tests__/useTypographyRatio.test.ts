import { renderHook, RenderHookOptions } from '@testing-library/react-hooks';
import { act } from 'react';
import useTypographyRatio from '../useTypographyRatio';

interface CustomRenderHookOptions<TProps> extends RenderHookOptions<TProps> {
  window?: Window;
}

describe('useTypographyRatio', () => {
  let mockWindow: any;
  const testThis = {
    window: mockWindow
  } as CustomRenderHookOptions<unknown>;

  beforeEach(() => {
    // Mock the window object
    mockWindow = {
      screen: { width: 1920 },
      devicePixelRatio: 1,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn()
    };
  });

  test('should return the correct ratio for large screens', () => {
    const { result } = renderHook(() => useTypographyRatio(), testThis);

    expect(result.current).toBe(1);
  });

  xtest('should return the correct ratio for smaller screens', () => {
    mockWindow.screen.width = 1024;
    const { result } = renderHook(() => useTypographyRatio(), testThis);

    expect(result.current).toBeGreaterThan(1);
    expect(result.current).toBe(1728 / (1024 * mockWindow.devicePixelRatio));
  });

  xtest('should add and remove event listeners', () => {
    renderHook(() => useTypographyRatio(), testThis);

    expect(mockWindow.addEventListener).toHaveBeenCalledTimes(1);
    expect(mockWindow.removeEventListener).toHaveBeenCalledTimes(1);
  });

  xtest('should update ratio on window resize', () => {
    const { result, rerender } = renderHook(
      () => useTypographyRatio(),
      testThis
    );

    act(() => {
      mockWindow.screen.width = 800;
      mockWindow.addEventListener.mock.calls[0][1](); // Simulate resize event
    });

    rerender();

    expect(result.current).toBeGreaterThan(1);
    expect(result.current).toBe(1728 / (800 * mockWindow.devicePixelRatio));
  });
});

// import { renderHook, act } from '@testing-library/react-hooks';
// import useTypographyRatio from '../useTypographyRatio'; // Adjust the import path as necessary

// describe('useTypographyRatio', () => {
//   beforeAll(() => {
//     // Mock debounce to execute the function immediately
//     jest.mock('@mui/material', () => ({
//       debounce: jest.fn((fn) => fn)
//     }));
//   });

//   it('sets initial ratio based on screen width and device pixel ratio', () => {
//     // Mock window properties
//     Object.defineProperty(window, 'screen', {
//       value: { width: 800 }
//     });
//     Object.defineProperty(window, 'devicePixelRatio', {
//       value: 2
//     });

//     // Render the hook
//     const { result } = renderHook(() => useTypographyRatio());

//     // Since 800 * 2 < 1728, expect a ratio greater than 1
//     expect(result.current).toBeGreaterThan(1);
//   });

//   it('updates ratio on window resize', () => {
//     // Initial mock
//     Object.defineProperty(window, 'screen', {
//       value: { width: 800 }
//     });
//     Object.defineProperty(window, 'devicePixelRatio', {
//       value: 2
//     });

//     // Render the hook
//     const { result } = renderHook(() => useTypographyRatio());

//     // Update mock for resize simulation
//     act(() => {
//       Object.defineProperty(window, 'screen', {
//         value: { width: 900 }
//       });
//       Object.defineProperty(window, 'devicePixelRatio', {
//         value: 1
//       });
//       window.dispatchEvent(new Event('resize'));
//     });

//     // Check if the ratio has been updated correctly
//     expect(result.current).toBe(1728 / (900 * 1));
//   });

//   it('cleans up resize event listener on unmount', () => {
//     // Spy on addEventListener and removeEventListener
//     const addSpy = jest.spyOn(window, 'addEventListener');
//     const removeSpy = jest.spyOn(window, 'removeEventListener');

//     // Render and unmount the hook
//     const { unmount } = renderHook(() => useTypographyRatio());
//     unmount();

//     // Expect the resize listener to be added and then removed
//     expect(addSpy).toHaveBeenCalledWith('resize', expect.any(Function));
//     expect(removeSpy).toHaveBeenCalledWith('resize', expect.any(Function));
//   });
// });
