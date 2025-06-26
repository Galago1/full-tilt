import { Grid, GridProps, SvgIconProps, Typography } from '@mui/material';
import { FieldInputProps, FieldProps, FormikProps } from 'formik';
import { ChevronRightIcon } from 'src/components/particles/theme/icons/Arrows/chevron-right';
import { ChangeType, useWaveSlider } from './hooks';

export interface WaveSliderProps extends FieldProps {
  min?: number;
  max?: number;
  step?: number;
  minLabel?: string;
  maxLabel?: string;
  onChange?: (
    form: FormikProps<any>,
    field: FieldInputProps<any>,
    value: any,
    changeType: ChangeType
  ) => void;
  disabled?: boolean;
  slots?: {
    sliderArrowContainerGridProps: GridProps;
    sliderArrowGridProps: GridProps;
    chevronIconProps: SvgIconProps;
  };
}

const WaveSlider = ({
  field,
  form,
  min = 0,
  max = 10,
  step = 1,
  minLabel,
  maxLabel,
  onChange,
  slots,
  disabled = false
}: WaveSliderProps) => {
  const {
    sliderArrowContainerGridProps,
    sliderArrowGridProps,
    chevronIconProps
  } = slots ?? {};
  const {
    sliderRef,
    handleMove,
    handleMouseDown,
    markers,
    percentage,
    adjustedPercentage,
    getFillGradient,
    theme
  } = useWaveSlider(min, max, step, form, field, onChange!, disabled);

  return (
    <Grid
      sx={{
        width: '100%',
        padding: `${theme.spacing(2.5)} 0`,
        // opacity: disabled ? 0.5 : 1, // Reduce opacity when disabled
        pointerEvents: disabled ? 'none' : 'auto' // Disable interaction when disabled
      }}
    >
      <Grid
        ref={sliderRef}
        onMouseDown={disabled ? undefined : handleMouseDown}
        onTouchStart={disabled ? undefined : (handleMouseDown as any)}
        onClick={disabled ? undefined : (e: any) => handleMove(e.clientX)}
        data-testid="slider-track"
        sx={{
          position: 'relative',
          height: { xs: theme.spacing(2.5), sm: theme.spacing(3.5) },
          backgroundColor: 'white',
          borderRadius: theme.spacing(1.75),
          overflow: 'visible',
          border: `1px solid ${theme.palette.grey[300]}`,
          width: '100%',
          margin: '0 auto',
          cursor: disabled ? 'not-allowed' : 'pointer' // Change cursor when disabled
        }}
      >
        <Grid
          sx={{
            position: 'absolute',
            height: '100%',
            borderRadius: theme.spacing(1.75),
            width: `${adjustedPercentage}%`,
            backgroundImage: getFillGradient(percentage),

            transition: 'width 0.3s ease, background-color 0.3s ease',
            ...sliderArrowContainerGridProps?.sx
          }}
          {...sliderArrowContainerGridProps}
        />
        <Grid
          {...sliderArrowGridProps}
          sx={{
            position: 'absolute',
            top: '50%',
            left: `${adjustedPercentage}%`,
            transform: 'translate(-50%, -50%)',
            width: { xs: theme.spacing(3.75), sm: theme.spacing(5.5) },
            height: { xs: theme.spacing(3.75), sm: theme.spacing(5.5) },
            backgroundColor: disabled
              ? theme.palette.grey[400]
              : 'secondary.main',
            borderRadius: '50%',
            cursor: disabled ? 'not-allowed' : 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontSize: theme.spacing(2.25),
            transition: 'left 0.3s ease, Grid-shadow 0.2s ease-in-out',
            userSelect: 'none',
            zIndex: 2,
            '&:hover, &:active': {
              GridShadow: disabled
                ? 'none'
                : `0 0 0 ${theme.spacing(1)} rgba(103, 58, 183, 0.2)`
            },
            ...sliderArrowGridProps?.sx
          }}
        >
          <ChevronRightIcon {...chevronIconProps} />
        </Grid>
      </Grid>
      <Grid
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          position: 'relative',
          width: '98%',
          margin: '0 auto'
        }}
      >
        {(markers || []).map((marker: any) => {
          const markerPercentage = ((marker - min) / (max - min)) * 100;
          return (
            <Grid
              key={marker}
              sx={{
                position: 'absolute',
                left: `${markerPercentage}%`,
                transform: 'translateX(-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '&::before': {
                  content: '""',
                  width: '1px',
                  height: theme.spacing(2.5),
                  backgroundColor: 'grey.200',
                  marginBottom: theme.spacing(0.5)
                }
              }}
            >
              <Typography
                variant="textXsRegular"
                color={theme.palette.grey[500]}
              >
                {marker}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
      <Grid
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          marginTop: theme.spacing(8)
        }}
      >
        <Typography
          sx={{
            position: 'relative'
          }}
          variant="textSmMedium"
          color={theme.palette.grey[900]}
        >
          {minLabel}
        </Typography>
        <Typography
          sx={{
            position: 'relative'
          }}
          variant="textSmMedium"
          color={theme.palette.grey[900]}
        >
          {maxLabel}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default WaveSlider;
