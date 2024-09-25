import { useTheme } from '@mui/material';
import { FieldInputProps, FieldProps, FormikProps } from 'formik';
import { useEffect, useRef, useState } from 'react';

export const useWaveSlider = (
  min: number,
  max: number,
  step: number,
  form: FieldProps['form'],
  field: FieldProps['field'],
  onChange: (
    form: FormikProps<any>,
    field: FieldInputProps<any>,
    value: any
  ) => void,
  disabled: boolean // Pass the disabled prop to the hook
) => {
  const theme = useTheme();
  const [isDragging, setIsDragging] = useState(false);
  const [tempValue, setTempValue] = useState(field.value);
  const tempValueRef = useRef(field.value);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const handleMove = (clientX: number) => {
    if (disabled || !sliderRef.current) return;

    requestAnimationFrame(() => {
      const rect = sliderRef.current!.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.min(Math.max(x / rect.width, 0), 1);
      const newValue =
        Math.round((percentage * (max - min)) / step) * step + min;
      const clampedValue = Math.min(Math.max(newValue, min), max);
      setTempValue(clampedValue);
      tempValueRef.current = clampedValue;
    });
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || !sliderRef.current?.contains(e.target as Node)) return; // Disable mousedown if disabled
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging && !disabled) {
      handleMove(e.clientX);
    }
  };

  const handleMouseUp = () => {
    if (isDragging && !disabled) {
      setIsDragging(false);
      const finalValue = tempValueRef.current;
      form.setFieldValue(field.name, finalValue);
      onChange?.(form, field, finalValue);
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (disabled || !sliderRef.current?.contains(e.target as Node)) return; // Disable touchstart if disabled
    setIsDragging(true);
    handleMove(e.touches[0].clientX);
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

  useEffect(() => {
    if (!isDragging) {
      form.setFieldValue(field.name, tempValue);
      onChange?.(form, field, tempValue);
    }
  }, [tempValue, isDragging]);

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
