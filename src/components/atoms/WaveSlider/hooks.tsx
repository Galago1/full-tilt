import { useTheme } from '@mui/material';
import { FieldInputProps, FieldProps, FormikProps } from 'formik';
import { useEffect, useRef, useState } from 'react';

export enum ChangeType {
  MOVE = 'move',
  START = 'start',
  END = 'end'
}

export const useWaveSlider = (
  min: number,
  max: number,
  step: number,
  form: FieldProps['form'],
  field: FieldProps['field'],
  onChange: (
    form: FormikProps<any>,
    field: FieldInputProps<any>,
    value: any,
    changeType: ChangeType
  ) => void,
  disabled: boolean
) => {
  const theme = useTheme();
  const [isDragging, setIsDragging] = useState(false);
  const [tempValue, setTempValue] = useState(field.value);
  const tempValueRef = useRef(field.value);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const isInitialMount = useRef(true);

  const updateValue = (newValue: number, changeType: ChangeType) => {
    const clampedValue = Math.min(Math.max(newValue, min), max);
    setTempValue(clampedValue);
    tempValueRef.current = clampedValue;

    if (!isInitialMount.current) {
      form.setFieldValue(field.name, clampedValue);
      onChange?.(form, field, clampedValue, changeType);
    }
  };

  const handleMove = (clientX: number) => {
    if (disabled || !sliderRef.current) return;

    requestAnimationFrame(() => {
      const rect = sliderRef.current!.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.min(Math.max(x / rect.width, 0), 1);
      const newValue =
        Math.round((percentage * (max - min)) / step) * step + min;

      if (isDragging) {
        updateValue(newValue, ChangeType.MOVE);
      }
    });
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || !sliderRef.current?.contains(e.target as Node)) return;
    setIsDragging(true);
    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.min(Math.max(x / rect.width, 0), 1);
    const newValue = Math.round((percentage * (max - min)) / step) * step + min;
    updateValue(newValue, ChangeType.START);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging && !disabled) {
      handleMove(e.clientX);
    }
  };

  const handleMouseUp = () => {
    if (isDragging && !disabled) {
      setIsDragging(false);
      updateValue(tempValueRef.current, ChangeType.END);
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (disabled || !sliderRef.current?.contains(e.target as Node)) return;
    setIsDragging(true);
    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = Math.min(Math.max(x / rect.width, 0), 1);
    const newValue = Math.round((percentage * (max - min)) / step) * step + min;
    updateValue(newValue, ChangeType.START);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging && !disabled) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseMoveWrapper = (e: MouseEvent) => handleMouseMove(e);
    const handleMouseUpWrapper = () => handleMouseUp();
    const handleTouchMoveWrapper = (e: TouchEvent) => handleTouchMove(e);
    const handleTouchEndWrapper = () => handleMouseUp();

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMoveWrapper);
      document.addEventListener('mouseup', handleMouseUpWrapper);
      document.addEventListener('touchmove', handleTouchMoveWrapper);
      document.addEventListener('touchend', handleTouchEndWrapper);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMoveWrapper);
      document.removeEventListener('mouseup', handleMouseUpWrapper);
      document.removeEventListener('touchmove', handleTouchMoveWrapper);
      document.removeEventListener('touchend', handleTouchEndWrapper);
    };
  }, [isDragging, disabled]);

  // Handle external value changes
  useEffect(() => {
    if (!isDragging && field.value !== tempValue) {
      setTempValue(field.value);
      tempValueRef.current = field.value;
    }
  }, [field.value]);

  // Set initial mount to false after first render
  useEffect(() => {
    isInitialMount.current = false;
  }, []);

  const markers = Array.from(
    { length: (max - min) / step + 1 },
    (_, i) => min + i * step
  );

  const percentage = ((tempValue - min) / (max - min)) * 100;
  const adjustedPercentage = percentage * 0.98 + 1;

  const getFillGradient = (percentage: number) => {
    if (percentage <= 23) {
      return theme.palette.gradients.sliderLte30;
    } else if (percentage <= 47) {
      return theme.palette.gradients.sliderLte60;
    } else {
      return theme.palette.gradients.sliderGt60;
    }
  };

  return {
    sliderRef,
    handleMove,
    handleMouseDown,
    handleTouchStart,
    markers,
    percentage,
    adjustedPercentage,
    getFillGradient,
    theme
  };
};
