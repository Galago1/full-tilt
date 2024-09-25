import { Box, Grid } from '@mui/material';
import { ComponentMeta, Story } from '@storybook/react';
import Pills, { PillsProps } from './Pills';

export default {
  title: 'Molecules/Taggable Image',
  component: Pills
} as ComponentMeta<typeof Pills>;

const Template: Story<PillsProps> = (_args) => {
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={7} mx={'auth'}>
        <Box sx={{ height: 'auto', width: 561 }}>
          <Pills
            value={0}
            onMove={() => {}}
            onRemove={() => {}}
            includeEdit={false}
          />
        </Box>
      </Grid>
    </Grid>
  );
};
export const Default = Template.bind({});
