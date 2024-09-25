import { useState, useRef, KeyboardEvent } from 'react';
import { Box, ButtonBase, Theme, useTheme } from '@mui/material';

const styles = {
  box1: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 0.375rem'
  },
  box2: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: '50%',
    border: (theme: Theme) => theme.border.colorPicker
  },
  button: {
    borderRadius: '50%',
    width: 28,
    height: 28,
    '&:focus': {
      outline: 'none'
    }
  }
};

export interface ColorPickerProps {
  colors: string[];
}

const ColorPicker = ({ colors }: ColorPickerProps) => {
  const [selectedColor, setSelectedColor] = useState<string>(colors[0]);
  const [focusedColor, setFocusedColor] = useState<string>(colors[0]);
  const buttonRefs = useRef<HTMLButtonElement[]>([]);

  const handleColorSelect = (color: string): void => {
    setSelectedColor(color);
    setFocusedColor(color);
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number
  ): void => {
    let nextIndex: number | undefined = undefined;
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      nextIndex = (index + 1) % colors.length;
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      nextIndex = (index - 1 + colors.length) % colors.length;
    } else if (event.key === 'Tab') {
      if (index === colors.length - 1 && !event.shiftKey) {
        // Allow default tab behavior to move to the next element
        return;
      } else if (index === 0 && event.shiftKey) {
        // Allow default shift+tab behavior to move to the previous element
        return;
      } else if (!event.shiftKey) {
        event.preventDefault();
        nextIndex = (index + 1) % colors.length;
      } else {
        event.preventDefault();
        nextIndex = (index - 1 + colors.length) % colors.length;
      }
    }

    if (nextIndex !== undefined) {
      buttonRefs.current[nextIndex]?.focus();
      handleColorSelect(colors[nextIndex]);
    }
  };

  return (
    <Box display="flex" alignItems="center">
      {colors.map((color, index) => (
        <Box key={index} sx={styles.box1}>
          {(selectedColor === color || focusedColor === color) && (
            <Box sx={styles.box2} />
          )}
          <ButtonBase
            ref={(el) => (buttonRefs.current[index] = el!)}
            onClick={() => handleColorSelect(color)}
            onFocus={() => setFocusedColor(color)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            sx={{
              ...styles.button,
              backgroundColor: color,
              '&:hover': {
                backgroundColor: color
              }
            }}
            aria-label={`select ${color}`}
          />
        </Box>
      ))}
    </Box>
  );
};

export default ColorPicker;
