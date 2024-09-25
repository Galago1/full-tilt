import { FormControl, FormControlLabel, RadioGroup } from '@mui/material';
import type { ComponentMeta, Story } from '@storybook/react';
import type { RadioButtonProps } from 'src/components/atoms/RadioButton/RadioButton';
import RadioButton from 'src/components/atoms/RadioButton/RadioButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/RadioButton',
  component: RadioButton
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof RadioButton>;

// Basic
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

// Placement
const TemplatePlacement: Story<{
  radioTop: RadioButtonProps;
  radioStart: RadioButtonProps;
  radioButtom: RadioButtonProps;
  radioEnd: RadioButtonProps;
}> = ({ radioTop, radioStart, radioButtom, radioEnd }) => {
  return (
    <FormControl component="fieldset">
      <RadioGroup aria-label="position" defaultValue="radioTop" row>
        <FormControlLabel
          value="top"
          control={<RadioButton {...radioTop} />}
          label="Top"
          labelPlacement="top"
        />
        <FormControlLabel
          value="start"
          control={<RadioButton {...radioStart} />}
          label="Start"
          labelPlacement="start"
        />
        <FormControlLabel
          value="bottom"
          control={<RadioButton {...radioButtom} />}
          label="Bottom"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="end"
          control={<RadioButton {...radioEnd} />}
          label="End"
          labelPlacement="end"
        />
      </RadioGroup>
    </FormControl>
  );
};

export const PlacementRadioButtons = TemplatePlacement.bind({});
PlacementRadioButtons.args = {
  radioTop: { value: 'radioTop' },
  radioStart: { value: 'radioStart' },
  radioButtom: { value: 'radioButtom' },
  radioEnd: { value: 'radioEnd' }
};

// Size
const TemplateSize: Story<{
  radioNormal: RadioButtonProps;
  radioSmall: RadioButtonProps;
}> = ({ radioNormal, radioSmall }) => {
  return (
    <FormControl>
      <RadioGroup defaultValue="radioOne" row>
        <FormControlLabel
          control={<RadioButton {...radioNormal} />}
          label="Normal"
        />
        <FormControlLabel
          control={<RadioButton {...radioSmall} />}
          label="Small"
        />
      </RadioGroup>
    </FormControl>
  );
};

export const SizeRadioButtons = TemplateSize.bind({});
SizeRadioButtons.args = {
  radioNormal: { value: 'radioOne', size: 'medium' },
  radioSmall: { value: 'radioTwo', size: 'small' }
};

// Colors
const TemplateColors: Story<{
  radioDefault: RadioButtonProps;
  radioPrimary: RadioButtonProps;
  radioSecondary: RadioButtonProps;
  radioSuccess: RadioButtonProps;
  radioWarning: RadioButtonProps;
  radioError: RadioButtonProps;
  radioDisabled: RadioButtonProps;
}> = ({
  radioDefault,
  radioPrimary,
  radioSecondary,
  radioSuccess,
  radioWarning,
  radioError,
  radioDisabled
}) => {
  return (
    <FormControl>
      <RadioGroup defaultValue="radioDefault">
        <FormControlLabel
          control={<RadioButton {...radioDefault} />}
          label="Default"
        />
        <FormControlLabel
          control={<RadioButton {...radioPrimary} />}
          label="Primary"
        />
        <FormControlLabel
          control={<RadioButton {...radioSecondary} />}
          label="Secondary"
        />
        <FormControlLabel
          control={<RadioButton {...radioSuccess} />}
          label="Success"
        />
        <FormControlLabel
          control={<RadioButton {...radioWarning} />}
          label="Warning"
        />
        <FormControlLabel
          control={<RadioButton {...radioError} />}
          label="Error"
        />
        <FormControlLabel
          control={<RadioButton {...radioDisabled} />}
          label="Disabled"
        />
      </RadioGroup>
    </FormControl>
  );
};

export const ColorRadioButtons = TemplateColors.bind({});
ColorRadioButtons.args = {
  radioDefault: { value: 'radioDefault', color: 'default' },
  radioPrimary: { value: 'radioPrimary', color: 'primary' },
  radioSecondary: { value: 'radioSecondary', color: 'secondary' },
  radioSuccess: { value: 'radioSuccess', color: 'success' },
  radioWarning: { value: 'radioWarning', color: 'warning' },
  radioError: { value: 'radioError', color: 'error' },
  radioDisabled: { value: 'radioDisabled', disabled: true }
};
