import { FormControl, FormControlLabel, FormGroup } from '@mui/material';
import type { ComponentMeta, Story } from '@storybook/react';
import type { SwitchProps } from 'src/components/atoms/Switch/Switch';
import Switch from 'src/components/atoms/Switch/Switch';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Switch',
  component: Switch
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof Switch>;

// Placement
const TemplateLabelPlacement: Story<SwitchProps> = (args) => (
  <FormControl component="fieldset">
    <FormGroup aria-label="position" row>
      <FormControlLabel
        value="top"
        control={<Switch {...args} sx={{ mt: 1 }} />}
        label="Top"
        labelPlacement="top"
      />
      <FormControlLabel
        value="start"
        control={<Switch {...args} sx={{ ml: 1 }} />}
        label="Start"
        labelPlacement="start"
      />
      <FormControlLabel
        value="bottom"
        control={<Switch {...args} sx={{ mb: 1 }} />}
        label="Bottom"
        labelPlacement="bottom"
      />
      <FormControlLabel
        value="end"
        control={<Switch {...args} sx={{ mr: 1 }} />}
        label="End"
        labelPlacement="end"
      />
    </FormGroup>
  </FormControl>
);

export const PlacementSwitch = TemplateLabelPlacement.bind({});
PlacementSwitch.args = {};

// Sizes
const TemplateSize: Story<{
  switchNormal: SwitchProps;
  switchSmall: SwitchProps;
}> = ({ switchNormal, switchSmall }) => {
  return (
    <FormGroup row>
      <FormControlLabel
        control={<Switch sx={{ mr: 1 }} {...switchSmall} />}
        label="Small"
      />
      <FormControlLabel
        control={<Switch sx={{ mr: 1 }} {...switchNormal} />}
        label="Normal"
      />
    </FormGroup>
  );
};

export const SizeSwitch = TemplateSize.bind({});
SizeSwitch.args = {
  switchNormal: { value: 'switchNormal', size: 'medium' },
  switchSmall: { value: 'switchSmall', size: 'small' }
};

// Colors
const TemplateColors: Story<{
  switchDefault: SwitchProps;
  switchPrimary: SwitchProps;
  switchSecondary: SwitchProps;
  switchSuccess: SwitchProps;
  switchWarning: SwitchProps;
  switchError: SwitchProps;
  switchDisabled: SwitchProps;
  switchDisabledChecked: SwitchProps;
}> = ({
  switchDefault,
  switchPrimary,
  switchSecondary,
  switchSuccess,
  switchWarning,
  switchError,
  switchDisabled,
  switchDisabledChecked
}) => {
  return (
    <FormGroup>
      <FormControlLabel
        sx={{ mb: 1 }}
        control={<Switch sx={{ mr: 1 }} {...switchDefault} />}
        label="Default"
      />
      <FormControlLabel
        sx={{ mb: 1 }}
        control={<Switch sx={{ mr: 1 }} {...switchPrimary} />}
        label="Primary"
      />
      <FormControlLabel
        sx={{ mb: 1 }}
        control={<Switch sx={{ mr: 1 }} {...switchSecondary} />}
        label="Secondary"
      />
      <FormControlLabel
        sx={{ mb: 1 }}
        control={<Switch sx={{ mr: 1 }} {...switchSuccess} />}
        label="Success"
      />
      <FormControlLabel
        sx={{ mb: 1 }}
        control={<Switch sx={{ mr: 1 }} {...switchWarning} />}
        label="Warning"
      />
      <FormControlLabel
        sx={{ mb: 1 }}
        control={<Switch sx={{ mr: 1 }} {...switchError} />}
        label="Error"
      />
      <FormControlLabel
        sx={{ mb: 1 }}
        control={<Switch sx={{ mr: 1 }} {...switchDisabled} />}
        label="Disabled"
      />
      <FormControlLabel
        sx={{ mb: 1 }}
        control={<Switch sx={{ mr: 1 }} {...switchDisabledChecked} />}
        label="Disabled Checked"
      />
    </FormGroup>
  );
};

export const ColorSwitch = TemplateColors.bind({});
ColorSwitch.args = {
  switchDefault: { value: 'switchDefault', color: 'default' },
  switchPrimary: { value: 'switchPrimary', color: 'primary' },
  switchSecondary: { value: 'switchSecondary', color: 'secondary' },
  switchSuccess: { value: 'switchSuccess', color: 'success' },
  switchWarning: { value: 'switchWarning', color: 'warning' },
  switchError: { value: 'switchError', color: 'error' },
  switchDisabled: { value: 'switchDisabled', disabled: true },
  switchDisabledChecked: {
    value: 'switchDisabledChecked',
    disabled: true,
    defaultChecked: true
  }
};
