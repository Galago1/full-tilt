import { FormControl, FormControlLabel, RadioGroup } from '@mui/material';
import type { ComponentMeta, Story } from '@storybook/react';
import type { RadioButtonProps } from './RadioButton';
import RadioButton from './RadioButton';
import { Box } from '@mui/material';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/RadioButton',
  component: RadioButton
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof RadioButton>;

// Basic
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const TemplateBasic: Story<{
  radioOne: RadioButtonProps;
  radioTwo: RadioButtonProps;
  radioThree: RadioButtonProps;
}> = ({ radioOne, radioTwo, radioThree }) => {
  return (
    <FormControl>
      <RadioGroup defaultValue="radioOne" row>
        <FormControlLabel control={<RadioButton {...radioOne} />} label="" />
        <FormControlLabel control={<RadioButton {...radioTwo} />} label="" />
        <FormControlLabel control={<RadioButton {...radioThree} />} label="" />
      </RadioGroup>
    </FormControl>
  );
};

export const Basic = TemplateBasic.bind({});
Basic.args = {
  radioOne: { value: 'radioOne' },
  radioTwo: { value: 'radioTwo' },
  radioThree: {
    disabled: true,
    value: 'radioThree'
  }
};
const TemplateCustomRadio: Story<{
  checkedIcon: React.ReactNode;
  icon: React.ReactNode;
  sx: object;
}> = ({ checkedIcon, icon, sx }) => {
  return <RadioButton checkedIcon={checkedIcon} icon={icon} sx={sx} />;
};

export const CustomRadio = TemplateCustomRadio.bind({});
CustomRadio.args = {
  checkedIcon: (
    <RadioButtonCheckedIcon
      sx={{
        color: 'primary.600',
        width: 24,
        height: 24,
        '& circle': {
          strokeWidth: 1
        }
      }}
    />
  ),
  icon: (
    <RadioButtonUncheckedIcon
      sx={{
        color: 'grey.300',
        width: 24,
        height: 24,
        '& circle': {
          strokeWidth: 1
        }
      }}
    />
  ),
  sx: {
    padding: 0,
    '&:hover': {
      bgcolor: 'transparent'
    }
  }
};

export const CustomRadioGroup = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
    <RadioButton
      checked={true}
      checkedIcon={
        <RadioButtonCheckedIcon
          sx={{
            color: 'primary.600',
            width: 24,
            height: 24,
            '& circle': {
              strokeWidth: 1
            }
          }}
        />
      }
      icon={
        <RadioButtonUncheckedIcon
          sx={{
            color: 'grey.300',
            width: 24,
            height: 24,
            '& circle': {
              strokeWidth: 1
            }
          }}
        />
      }
      sx={{
        padding: 0,
        '&:hover': {
          bgcolor: 'transparent'
        }
      }}
    />
    <RadioButton
      checked={false}
      checkedIcon={
        <RadioButtonCheckedIcon
          sx={{
            color: 'primary.600',
            width: 24,
            height: 24,
            '& circle': {
              strokeWidth: 1
            }
          }}
        />
      }
      icon={
        <RadioButtonUncheckedIcon
          sx={{
            color: 'grey.300',
            width: 24,
            height: 24,
            '& circle': {
              strokeWidth: 1
            }
          }}
        />
      }
      sx={{
        padding: 0,
        '&:hover': {
          bgcolor: 'transparent'
        }
      }}
    />
  </Box>
);
