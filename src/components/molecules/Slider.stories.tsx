import { Box, Grid, Stack } from '@mui/material';
import type { ComponentMeta, Story } from '@storybook/react';
import { useEffect, useState } from 'react';
import type { SliderProps } from 'src/components/atoms/Slider/Slider';
import Slider from 'src/components/atoms/Slider/Slider';
import { VolumeMaxIcon } from '../particles/theme/icons/MediaAndDevices/volume-max';
import { VolumeMinIcon } from '../particles/theme/icons/MediaAndDevices/volume-min';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export

export default {
  title: 'Molecules/Slider',
  component: Slider
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // sx: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof Slider>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const TemplateVolumeSlider: Story<{
  volumeSlider: SliderProps;
}> = ({ volumeSlider }) => {
  const [value, setValue] = useState<number>(30);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };
  return (
    <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeMinIcon />
        <Slider value={value} onChange={handleChange} {...volumeSlider} />
        <VolumeMaxIcon />
      </Stack>
    </Box>
  );
};

export const VolumeSlider = TemplateVolumeSlider.bind({});
VolumeSlider.args = {
  volumeSlider: {
    label: 'Volume',
    sx: { color: '#00AB55' }
  }
};

const TemplateTemperatureSlider: Story<{
  temperatureSlider: SliderProps;
}> = ({ temperatureSlider }) => {
  return (
    <Box sx={{ width: 300, marginTop: 10 }}>
      <Slider {...temperatureSlider} />
    </Box>
  );
};
export const TemperatureSlider = TemplateTemperatureSlider.bind({});
TemperatureSlider.args = {
  temperatureSlider: {
    label: 'Temperature',
    sx: { color: '#00AB55' },
    min: 10,
    max: 110,
    marks: true,
    defaultValue: 50,
    step: 10,
    valueLabelDisplay: 'on'
  }
};

const TemplateSizeSlider: Story<{
  smallSlider: SliderProps;
  mediumSlider: SliderProps;
}> = ({ smallSlider, mediumSlider }) => {
  return (
    <Box sx={{ width: 300, marginTop: 10 }}>
      <Slider {...mediumSlider} />
      <Slider {...smallSlider} />
    </Box>
  );
};

export const SizeSlider = TemplateSizeSlider.bind({});
SizeSlider.args = {
  mediumSlider: {
    label: 'Medium',
    sx: { color: '#00AB55' },
    size: 'medium',
    min: 10,
    max: 110,
    marks: true,
    defaultValue: 50,
    step: 10,
    valueLabelDisplay: 'on'
  },
  smallSlider: {
    label: 'Small',
    sx: { color: '#00AB55' },
    size: 'small',
    min: 10,
    max: 110,
    marks: true,
    defaultValue: 50,
    step: 10,
    valueLabelDisplay: 'on'
  }
};

const TemplateSmallStepsSlider: Story<{
  smallStepsSlider: SliderProps;
}> = ({ smallStepsSlider }) => {
  return (
    <Box sx={{ width: 300, marginTop: 10 }}>
      <Slider {...smallStepsSlider} />
    </Box>
  );
};
export const SmallStepsSlider = TemplateSmallStepsSlider.bind({});
SmallStepsSlider.args = {
  smallStepsSlider: {
    label: 'Small steps',
    sx: { color: '#00AB55' },
    defaultValue: 0.00000005,
    min: -0.00000005,
    max: 0.0000001,
    marks: true,
    step: 0.00000001,
    valueLabelDisplay: 'auto'
  }
};

const TemplateCustomMarksSlider: Story<{
  customMarksSlider: SliderProps;
}> = ({ customMarksSlider }) => {
  return (
    <Box sx={{ width: 300, marginTop: 10 }}>
      <Slider {...customMarksSlider} />
    </Box>
  );
};
export const CustomMarksSlider = TemplateCustomMarksSlider.bind({});
const marks = [
  {
    value: 0,
    label: '0°C'
  },
  {
    value: 20,
    label: '20°C'
  },
  {
    value: 37,
    label: '37°C'
  },
  {
    value: 100,
    label: '100°C'
  }
];

CustomMarksSlider.args = {
  customMarksSlider: {
    label: 'Custom Marks',
    sx: { color: '#00AB55' },
    defaultValue: 20,
    marks: marks,
    step: 10,
    valueLabelDisplay: 'auto'
  }
};

const TemplateRestrictedMarksSlider: Story<{
  restrictedMarksSlider: SliderProps;
}> = ({ restrictedMarksSlider }) => {
  return (
    <Box sx={{ width: 300, marginTop: 10 }}>
      <Slider {...restrictedMarksSlider} />
    </Box>
  );
};
export const RestrictedMarksSlider = TemplateRestrictedMarksSlider.bind({});

RestrictedMarksSlider.args = {
  restrictedMarksSlider: {
    label: 'Restricted Marks',
    sx: { color: '#00AB55' },
    defaultValue: 20,
    marks: marks,
    step: null,
    valueLabelDisplay: 'auto'
  }
};

const TemplateRangeSlider: Story<{
  rangeSlider: SliderProps;
}> = ({ rangeSlider }) => {
  const [min, setMin] = useState<number>(250);
  const [max, setMax] = useState<number>(500);
  const [value, setValue] = useState<number[]>([min, max]);
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  useEffect(() => {
    setMin(value[0]);
    setMax(value[1]);
  }, [value]);
  const valueText = (value: number) => `$${value}`;
  return (
    <Grid container direction="column">
      <Grid item>
        <Box sx={{ width: 300, marginTop: 10 }}>
          <Slider
            value={value}
            onChange={handleChange}
            valueLabelFormat={valueText}
            {...rangeSlider}
          />
        </Box>
      </Grid>
      <Grid item>
        <Grid container direction="column">
          <Box
            sx={{
              width: 200,
              marginTop: 5,
              backgroundColor: 'grey.100',
              color: 'black',
              borderRadius: 0,
              padding: 1
            }}
          >
            <Grid item>
              <span>Min: ${min}</span>
            </Grid>
            <Grid item>
              <span>Max: ${max}</span>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
export const RangeSlider = TemplateRangeSlider.bind({});

RangeSlider.args = {
  rangeSlider: {
    sx: { color: '#00AB55' },
    marks: [
      {
        label: '$0',
        value: 0
      },
      {
        label: '250',
        value: 250
      },
      {
        label: '500',
        value: 500
      },
      {
        label: '750',
        value: 750
      },
      {
        label: '1000',
        value: 1000
      }
    ],
    min: 0,
    max: 1000,
    step: 100,
    valueLabelDisplay: 'on'
  }
};
