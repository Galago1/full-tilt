import { act } from 'react';
import { renderHook } from '@testing-library/react-hooks';
import useScrollLock from '../useScrollLock';

describe('useScrollLock', () => {
  let observerCallback: any;
  const originalMutationObserver = global.MutationObserver;

  beforeEach(() => {
    (global as any).MutationObserver = class {
      constructor(callback: any) {
        observerCallback = callback;
      }

      observe() {}
      disconnect() {}
    };
  });

  afterEach(() => {
    global.MutationObserver = originalMutationObserver;
    observerCallback = null;
  });

  it('should lock scroll when body overflow is set to hidden', () => {
    const { unmount } = renderHook(() => useScrollLock());

    act(() => {
      global.document.body.style.overflow = 'hidden';
      observerCallback([{ attributeName: 'style' }]);
    });

    expect(global.document.body.style.touchAction).toBe('none');

    unmount();
  });

  it('should unlock scroll when body overflow is not set to hidden', () => {
    const { unmount } = renderHook(() => useScrollLock());

    act(() => {
      global.document.body.style.overflow = 'auto';
      observerCallback([{ attributeName: 'style' }]);
    });

    expect(global.document.body.style.touchAction).toBe('');

    unmount();
  });
});
