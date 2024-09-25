import { FormControl, FormControlLabel, RadioGroup } from '@mui/material';
import type { ComponentMeta, Story } from '@storybook/react';
import type { RadioButtonProps } from './RadioButton';
import RadioButton from './RadioButton';

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
