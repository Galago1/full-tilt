import { render, fireEvent } from '@testing-library/react';
import useKeyboardCombo from '../useKeyboardCombo';
import { Box } from '@mui/material';

describe('useKeyboardCombo', () => {
  it('should run callback on CTRL + K press', () => {
    // Mock callback
    const callback = jest.fn();

    // Wrapper component to use the hook
    const TestComponent = () => {
      useKeyboardCombo('k', callback);

      return <Box>Test Component</Box>;
    };

    render(<TestComponent />);

    // Simulate 'CTRL + K' key press
    fireEvent.keyDown(document, { ctrlKey: true, key: 'l' });

    // Expect callback to be called
    expect(callback).not.toHaveBeenCalled();

    // Simulate 'CTRL + K' key press
    fireEvent.keyDown(document, { ctrlKey: true, key: 'k' });

    // Expect callback to be called
    expect(callback).toHaveBeenCalled();
  });
});
