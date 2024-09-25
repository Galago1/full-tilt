import { Box } from '@mui/material';
import { ComponentMeta, Story } from '@storybook/react';
import LightboxControl, { LightboxControlProps } from './LightboxControl';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/Swipeable Image/Lightbox Control',
  component: LightboxControl
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof LightboxControl>;

export const ControlButtons: Story<LightboxControlProps> = ({
  onPrevious,
  onNext
}) => (
  <Box display="flex" justifyContent="space-between">
    <LightboxControl onPrevious={onPrevious} />
    <LightboxControl next onNext={onNext} />
  </Box>
);
